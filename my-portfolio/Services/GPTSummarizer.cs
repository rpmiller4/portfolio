using System.Net;
using System.Text;
using Newtonsoft.Json.Linq;

public class GPTSummarizer
{


    private readonly ILogger<GPTService> _logger;

    public GPTSummarizer(ILogger<GPTService> logger)
    {
        _logger = logger;
    }

    /// <summary>
    /// In the future, This can simply be a RequestX and the parameter will include a "canned" prompt
    /// to avoid code duplication.
    /// </summary>
    /// <param name="clientId"></param>
    /// <param name="message"></param>
    /// <returns></returns>
    public async Task<string> RequestSummary(string message)
    {
        if (string.IsNullOrEmpty(message))
        {
            return string.Empty;
        }

        Configuration config = CompletionConfiguration.GetCompletionConfiguration();

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


        var requestBody = new
        {
            prompt = $"Please summarize the following text: \"{message}\"",
            max_tokens = 1000,
            temperature = config.Temperature,
            model = config.Model
        };

        var json = System.Text.Json.JsonSerializer.Serialize(requestBody);

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
        //_logger.LogInformation("clientId is : " + clientId);

        var jToken = JToken.Parse(responseJson);
        var content = jToken["choices"][0]["text"].ToString();

        return content;
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
}