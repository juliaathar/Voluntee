using api.voluntee.Domains;
using api.voluntee.Dtos;
using api.voluntee.Interfaces;
using api.voluntee.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.voluntee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CampanhaController : ControllerBase
    {
        private readonly ICampanhaRepository _campanhaRepository;

        public CampanhaController(ICampanhaRepository campanhaRepository)
        {
            _campanhaRepository = campanhaRepository;
        }

        [HttpPost]
        public IActionResult Cadastrar(CampanhaPostDto campanha)
        {
            try
            {
                _campanhaRepository.Cadastrar(campanha);
                return StatusCode(201, "Sucesso ao cadastrar campanha");
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet]
        public IActionResult ListarCampanhas()
        {
            try
            {
                var campanhas = _campanhaRepository.ListarCampanhas();

                return StatusCode(200, campanhas);
            }
            catch (Exception)
            {

                throw;
            }
        }   
        
        
        
        [HttpGet("ListarCampanhaPopulares")]
        public IActionResult ListarCampanhasPopulares()
        {
            try
            {
                var campanhas = _campanhaRepository.ListarCampanhasPopulares();

                return StatusCode(200, campanhas);
            }
            catch (Exception)
            {

                throw;
            }
        } 
        
        
        [HttpGet("Id")]
        public IActionResult BuscarCampanha(Guid id)
        {
            try
            {
                var campanha = _campanhaRepository.BuscarCampanha(id);

                return StatusCode(200, campanha);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
