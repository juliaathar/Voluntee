using api.voluntee.Domains;
using api.voluntee.Interfaces;
using api.voluntee.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.voluntee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstituicaoController : ControllerBase
    {
        private readonly IInstituicaoRepository _instituicaoRepository;
        public InstituicaoController(IInstituicaoRepository instituicaoRepository)
        {
            _instituicaoRepository = instituicaoRepository;
        }

        [HttpPost]
        public IActionResult Cadastrar(Instituicao instituicao)
        {
            try
            {
                _instituicaoRepository.Cadastrar(instituicao);
                return StatusCode(201, instituicao);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet]
        public IActionResult ListarInsituicoes()
        {
            try
            {
                var instituicoes =  _instituicaoRepository.ListarInstituicao();
                return StatusCode(200, instituicoes);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet("Id")]
        public IActionResult BuscarInstituicao(Guid id)
        {
            try
            {
                var instituicao = _instituicaoRepository.BuscarInstituicao(id);

                return StatusCode(200, instituicao);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
