using api.voluntee.Domains;
using api.voluntee.Dtos;
using api.voluntee.Interfaces;
using api.voluntee.Repository;
using api.voluntee.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.voluntee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;

        }

        [HttpPatch]
        public IActionResult AlterarSenha(string email, AlterarSenhaViewModel senha)
        {
            try
            {
                _usuarioRepository.AlterarSenha(email, senha.SenhaNova!);

                return Ok("Senha alterada com sucesso!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public IActionResult Cadastrar(Usuario usuario)
        {
            try
            {
                _usuarioRepository.Cadastrar(usuario);
                return StatusCode(201, usuario);
            }
            catch (Exception)
            {

                throw;
            }
        } 
        
        [HttpPatch("Id")]
        public IActionResult EditarPerfil(Guid id, UsuarioUpdateDto usuario)
        {
            try
            {
                _usuarioRepository.EditarPerfil(id, usuario);
                return StatusCode(201, usuario);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet("Id")]
        public IActionResult BuscarUsuarioPorId(Guid id)
        {
            try
            {
                return Ok(_usuarioRepository.BuscarUsuario(id));
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
