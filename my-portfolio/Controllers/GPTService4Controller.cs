using Microsoft.AspNetCore.Mvc;

namespace my_portfolio.Controllers;

[ApiController]
[Route("[controller]")]
public class GPTService4Controller : ControllerBase
{
    private readonly ILogger<GPTService4Controller> _logger;
    private readonly GPTService4 _gptService;

    public GPTService4Controller(ILogger<GPTService4Controller> logger, GPTService4 gptService)
    {
        _logger = logger;
        _gptService = gptService;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Hello from GPTService");
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] ChatRequest chatRequest)
    {
        string response = await _gptService.RequestChatText(chatRequest.clientId, chatRequest.userInput);
        return Ok(new { gptResponse = response });
    }

    [HttpPost("GetHistory")]
    public async Task<IActionResult> GetGptHistory([FromBody] ChatRequest chatRequest)
    {
        var response = await _gptService.GetChatHistoryAsync(chatRequest.clientId);
        _logger.LogInformation("Retrieved History for " + chatRequest.clientId + "There were " + response.Count() + "items");
        return Ok(new { gptHistory = response });
    }

    [HttpGet("GetHistory/{clientId}")]
    public async Task<IActionResult> GetGptHistory(string clientId)
    {
        var response = await _gptService.GetChatHistoryAsync(clientId);
        return Ok(new { gptHistory = response });
    }

    [HttpDelete("ClearHistory/{clientId}")]
    public async Task<IActionResult> ClearHistory(string clientId)
    {
        await _gptService.ClearChatHistoryAsync(clientId);

        return Ok();
    }
}
public class ChatRequest4
{
    public string clientId { get; set; }
    public string userInput { get; set; }
}

