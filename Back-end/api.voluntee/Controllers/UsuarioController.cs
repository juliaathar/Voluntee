using api.voluntee.Domains;
using api.voluntee.Dtos;
using api.voluntee.Interfaces;
using api.voluntee.Repository;
using api.voluntee.Utils.BlobStorage;
using api.voluntee.Utils.SendEmail;
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
        private readonly EmailSendingService _emailSendingService;

        public UsuarioController(IUsuarioRepository usuarioRepository, EmailSendingService emailSendingService)
        {
            _usuarioRepository = usuarioRepository;
            _emailSendingService = emailSendingService;
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
        public async Task<IActionResult> Cadastrar (UsuarioPostDto usuario)
        {
            try
            {
                _usuarioRepository.Cadastrar(usuario);
                await _emailSendingService.SendWelcomeEmail(usuario.Email, usuario.Nome);

                return Ok(usuario);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
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

        [HttpPut("AlterarFotoPerfil")]
        public async Task<IActionResult> AtualizarImagem(Guid id, [FromForm] UsuarioViewModel form)
        {
            try
            {

                Usuario usuarioBuscado = _usuarioRepository.BuscarUsuario(id);


                if (usuarioBuscado == null)
                {
                    return NotFound();
                }

                var connectionString = "";

                var containerName = "";

                string fotoUrl = await AzureBlobStorageHelper.UploadImageBlobAsync(form.Arquivo!, connectionString!, containerName!);


                usuarioBuscado.Foto = fotoUrl;

                _usuarioRepository.AtualizarFoto(id, fotoUrl);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("AlterarSenha")]
        public IActionResult UpdatePassword(string email, AlterarSenhaViewModel senha)
        {
            try
            {
                _usuarioRepository.AlterarSenha(email, senha.SenhaNova!);

                return Ok("Senha alterada com sucesso !");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
