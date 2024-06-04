using api.voluntee.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.voluntee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PresencaCampanhaController : ControllerBase
    {
        private readonly IPresencaCampanhaRepository _presencaCampanhaRepository;

        public PresencaCampanhaController(IPresencaCampanhaRepository presencaCampanhaRepository)
        {
            _presencaCampanhaRepository = presencaCampanhaRepository;
        }

        [HttpPost]
        public IActionResult ConfirmarPresenca(Guid idUsuario, Guid idCampanha)
        {
            try
            {
                _presencaCampanhaRepository.ConfirmarPresenca(idUsuario, idCampanha);
                return StatusCode(201, "Presença confirmada");
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
