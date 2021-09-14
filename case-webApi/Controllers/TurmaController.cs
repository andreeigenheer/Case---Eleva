using Microsoft.AspNetCore.Mvc;

namespace case_webApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class TurmaController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get(){
            return Ok ("BRAVO");
        }
    }
}