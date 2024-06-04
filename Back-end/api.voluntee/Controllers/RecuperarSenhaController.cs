using api.voluntee.Contexts;
using api.voluntee.Utils.SendEmail;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.voluntee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecuperarSenhaController : ControllerBase
    {

        private readonly VolunteeContext _context;
        private readonly EmailSendingService _emailSendingService;

        public RecuperarSenhaController(VolunteeContext context, EmailSendingService emailSendingService)
        {
            _context = context;
            _emailSendingService = emailSendingService;
        }

        [HttpPost]
        public async Task<IActionResult> SendRecoveryCodePassword(string email)
        {
            try
            {
                var user = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == email);

                if (user == null)
                {
                    return NotFound("Usuário não encontrado");
                }

                Random random = new Random();
                int recoveryCode = random.Next(1000, 9999);

                user.CodRecupSenha = recoveryCode;

                await _context.SaveChangesAsync();

                await _emailSendingService.SendRecoveryPassword(user.Email, recoveryCode);

                return Ok("Código enviado com sucesso");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPost("ValidarCodigoRecuperarSenha")]
        public async Task<IActionResult> ValidatePasswordRecoveryCode(string email, int codigo)
        {
            try
            {
                var user = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == email);

                if (user == null)
                {
                    return NotFound("Usuário não encontrado!");
                }

                if (user.CodRecupSenha != codigo)
                {
                    return BadRequest("Código de recuperação inválido!");
                }

                user.CodRecupSenha = null;
                await _context.SaveChangesAsync();

                return Ok("Código de recuperação está correto!");
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }
    }
}
