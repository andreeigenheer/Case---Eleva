using case_webApi.Data;
using Microsoft.AspNetCore.Mvc;

namespace case_webApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class EscolaController : ControllerBase
    {

      public EscolaController(IRepository repo)
      {
            
        }

        public IRepository Repo { get; }

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