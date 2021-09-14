using Microsoft.AspNetCore.Mvc;

namespace case_webApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class EscolaController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get(){

        try
        {
           return Ok("");
        }

        catch (System.Exception ex)
        {
          return BadRequest ($"Erro:{ex.Message}");
        }
           
        }
    }
}