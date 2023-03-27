using System.Net;
using System.Text;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json.Linq;

public class GPTService
{

    private readonly IMemoryCache _cache;
    private readonly ILogger<GPTService> _logger;

    public GPTService(IMemoryCache memoryCache, ILogger<GPTService> logger)
    {
        _cache = memoryCache;
        _logger = logger;
    }

    public List<ChatMessage> GetChatHistory(string clientId)
    {
        if (!_cache.TryGetValue(clientId, out List<ChatMessage> chatHistory))
        {
            chatHistory = new List<ChatMessage>();
            _cache.Set(clientId, chatHistory);
        }

        return chatHistory;
    }

    /// <summary>
    /// Consider adding to the chatHistory instead of replacing it?
    /// </summary>
    /// <param name="clientId"></param>
    /// <param name="chatHistory"></param>
    /// <returns></returns>
    public List<ChatMessage> SetChatHistory(string clientId, List<ChatMessage> chatHistory)
    { 
        _cache.Set(clientId, chatHistory);
        return chatHistory;
    }
    public async Task<string> RequestChatText(string clientId, string message)
    {
        if (string.IsNullOrEmpty(message))
        {
            return string.Empty;
        }

        List<ChatMessage> chatHistory = GetChatHistory(clientId);
        if (chatHistory.Count == 0)
        {
            chatHistory.Add(new ChatMessage { role = "system", content = "You are a helpful assistant. Please respond in brief but concise sentences unless detailed information is needed." });
        }

        Configuration config = CompletionConfiguration.GetChatConfiguration();

        string apiKey = Environment.GetEnvironmentVariable("GPT_API_KEY");
        if (string.IsNullOrEmpty(apiKey))
        {
            _logger.LogWarning("API Key is not set. Please set the GPT_API_KEY environment variable.");
        }
        var url = config.URL;

        using var client = new HttpClient();
        HttpRequestMessage CreateRequest()
        {
            var request = new HttpRequestMessage();
            request.Method = HttpMethod.Post;
            request.RequestUri = new Uri(url);
            request.Headers.Add("Authorization", $"Bearer {apiKey}");
            return request;
        }

        chatHistory = EnsureChatHistorySize(chatHistory);
        chatHistory.Add(new ChatMessage { role = "user", content = message });

        var loopRequestBody = new
        {
            messages = chatHistory,
            max_tokens = 1000,
            temperature = config.Temperature,
            model = config.Model
        };

        var json = System.Text.Json.JsonSerializer.Serialize(loopRequestBody);

        using var request = CreateRequest();
        request.Content = new StringContent(json, Encoding.UTF8, "application/json");

        using var response = await client.SendAsync(request);
        if (!response.IsSuccessStatusCode)
        {
            _logger.LogError("API request failed with status code: {StatusCode}", response.StatusCode);

            if (response.StatusCode == HttpStatusCode.Unauthorized)
            {
                _logger.LogError("Invalid API key. Please check your API_KEY environment variable.");
            }

            // Handle other error status codes if needed

            return string.Empty; // Or a default value, or throw an exception
        }

        var responseContent = await response.Content.ReadAsStringAsync();
        var responseData = System.Text.Json.JsonSerializer.Deserialize<dynamic>(responseContent);
        string responseJson = responseData.ToString();

        _logger.LogInformation(responseJson);

        var jToken = JToken.Parse(responseJson);
        var content = jToken["choices"][0]["message"]["content"].ToString();

        chatHistory.Add(new ChatMessage { role = "assistant", content = content });
        SetChatHistory(clientId, chatHistory);

        return content;
    }

    private List<ChatMessage> EnsureChatHistorySize(List<ChatMessage> chatHistory)
    {
        while (chatHistory.Sum(x => Tokenize(x.content).Length) > 3000)
        {
            int count = Tokenize(chatHistory[1].content).Length;
            chatHistory.RemoveAt(1);
            _logger.LogInformation($"Removed {count} tokens from content");
        }

        return chatHistory;
    }

    public static string[] Tokenize(string content)
    {
        
        char[] delimiterChars = { ' ', '\t' }; // Specify the delimiters

        string[] tokens = content.Split(delimiterChars, StringSplitOptions.None);
        Console.WriteLine(tokens.Count());
        return tokens;
    }

    public class Configuration
    {
        public string Name { get; set; }
        public string URL { get; set; }
        public string DefaultPrompt { get; set; }
        public int MaxTokens { get; set; }
        public float Temperature { get; set; }
        public string Model { get; set; }
        public dynamic Messages { get; set; }
    }

    public class CompletionConfiguration
    {
        public static Configuration GetCompletionConfiguration()
        {
            return new Configuration()
            {
                Name = "Completion",
                DefaultPrompt = "Once upon a time",
                URL = "https://api.openai.com/v1/completions",
                MaxTokens = 100,
                Model = "text-davinci-003",
                Temperature = 0.5f
            };
        }

        public static Configuration GetChatConfiguration()
        {
            return new Configuration()
            {
                Name = "Completion",
                Messages = new { text = "Once upon a time" },
                URL = "https://api.openai.com/v1/chat/completions",
                MaxTokens = 100,
                Model = "gpt-3.5-turbo",
                Temperature = 0.5f
            };
        }

    }

    public class ChatMessage
    {
        public string role { get; set; }
        public string content { get; set; }

    }
}