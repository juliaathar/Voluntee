using api.voluntee.Utils.SendEmail;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.voluntee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SendEmailController : ControllerBase
    {
        private readonly IEmailService emailService;
        public SendEmailController(IEmailService service)
        {
            emailService = service;
        }

        [HttpPost]
        public async Task<IActionResult> SendMail(string email, string userName)
        {
            try
            {
                EmailRequest emailRequest = new EmailRequest();

                emailRequest.ToEmail = email;
                emailRequest.Subject = "Bem-vindo(a) ao Voluntee";
                emailRequest.Body = GetHtmlContent(userName);


                await emailService.SendEmailAsync(emailRequest);

                return Ok("Email enviado com sucesso");
            }
            catch (Exception)
            {

                return BadRequest("Falha ao enviar email");
            }
        }

        private string GetHtmlContent(string userName)
        {
            string Response = @" < p style = color: #666666;text-align: center""><br>Equipe Voluntee</p>";

            return Response;

        }
    }
}
