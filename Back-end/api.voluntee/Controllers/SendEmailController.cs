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
            string Response = @"
<div style=""width:100%; background-color:#0066FF; padding: 20px;"">
    <div style=""max-width: 600px; margin: 0 auto; background-color:#fbfbfb; border-radius: 30px; padding: 20px;"">
        <img src=""https://blobvitalhub.blob.core.windows.net/containervitalhub/logotipo.png"" alt=""Logotipo da Aplicação"" style="" display: block; margin: 0 auto; max-width: 200px;"" />
        <h1 style=""color: #1E1E1E; text-align: center;"">Bem-vindo ao Voluntee!</h1>
        <p style=""color: #1E1E1E; text-align: center;"">Olá <strong>"" + userName + @""</strong>,</p>
        <p style=""color: #1E1E1E;text-align: center"">Estamos muito felizes por você ter se cadastrado no nosso aplicativo.</p>
        <p style=""color: #1E1E1E;text-align: center"">Explore todas as funcionalidades que oferecemos e faça o bem participando das ações solidárias</p>
        <p style=""color: #1E1E1E;text-align: center"">Aproveite sua experiência conosco!</p>
        <p style=""color: #1E1E1E;text-align: center"">Atenciosamente,<br>Equipe Voluntee</p>
    </div>
</div>";

            return Response;

        }
    }
}
