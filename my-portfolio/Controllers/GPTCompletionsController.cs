using Microsoft.AspNetCore.Mvc;

namespace my_portfolio.Controllers;

[ApiController]
[Route("[controller]")]
public class GPTCompletionsController : ControllerBase
{
    private readonly ILogger<GPTCompletionsController> _logger;
    private readonly GPTSummarizer _gptSummarizer;

    public GPTCompletionsController(ILogger<GPTCompletionsController> logger, GPTSummarizer gptSummarizer)
    {
        _logger = logger;
        _gptSummarizer = gptSummarizer;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Hello from GPTSummarizer");
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CompletionRequest completionRequest)
    {
        string response = await _gptSummarizer.RequestSummary(completionRequest.userInput);
        return Ok(new { gptResponse = response });
    }

   
}
public class CompletionRequest
{
    public string userInput { get; set; }
}

