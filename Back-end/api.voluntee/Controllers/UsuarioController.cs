using api.voluntee.Domains;
using api.voluntee.Dtos;
using api.voluntee.Interfaces;
using api.voluntee.Repository;
using api.voluntee.Utils.BlobStorage;
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

        [HttpPut("AlterarFotoPerfil")]
        public async Task<IActionResult> UpdateProfileImage(Guid id, [FromForm] UsuarioViewModel form)
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
    }
}
