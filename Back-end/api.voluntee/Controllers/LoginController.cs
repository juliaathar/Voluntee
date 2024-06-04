using api.voluntee.Domains;
using api.voluntee.Interfaces;
using api.voluntee.Repository;
using api.voluntee.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace api.voluntee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private readonly IUsuarioRepository _usuarioRepository;

        public LoginController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel usuario)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.BuscarPorEmailESenha(usuario.Email!, usuario.Senha!);

                if (usuarioBuscado == null)
                {
                    return StatusCode(401, "Email ou senha inválidos!");
                }


                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email!),
                    new Claim(JwtRegisteredClaimNames.Name,usuarioBuscado.Nome!),
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.Id.ToString()),
      
                };

        
                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("voluntee-webapi-chave-symmetricsecuritykey"));

        
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

  
                var meuToken = new JwtSecurityToken(
                        issuer: "Voluntee-WebAPI",
                        audience: "Voluntee-WebAPI",
                        claims: claims,
                        expires: DateTime.Now.AddMinutes(30),
                        signingCredentials: creds
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(meuToken)
                });
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }
    }
}
