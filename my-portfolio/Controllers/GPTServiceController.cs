using Microsoft.AspNetCore.Mvc;

namespace my_portfolio.Controllers;

[ApiController]
[Route("[controller]")]
public class GPTServiceController : ControllerBase
{
    private readonly ILogger<GPTServiceController> _logger;
    private readonly GPTService _gptService;

    public GPTServiceController(ILogger<GPTServiceController> logger, GPTService gptService)
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
}
public class ChatRequest
{
    public string clientId { get; set; }
    public string userInput { get; set; }
}

