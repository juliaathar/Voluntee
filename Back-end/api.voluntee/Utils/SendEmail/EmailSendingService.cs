namespace api.voluntee.Utils.SendEmail
{
    public class EmailSendingService
    {
        private readonly IEmailService emailService;

        public EmailSendingService(IEmailService service)
        {
            emailService = service;
        }

        public async Task SendWelcomeEmail(string email, string userName)
        {
            try
            {
                EmailRequest request = new EmailRequest
                {
                    ToEmail = email,
                    Subject = "Bem-vindo(a) ao Voluntee",
                    Body = GetHtmlContent(userName)
                };

                await emailService.SendEmailAsync(request);
            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task SendRecoveryPassword(string email, int codigo)
        {
            try
            {
                EmailRequest request = new EmailRequest
                {
                    ToEmail = email,
                    Subject = "Recupere sua senha",
                    Body = GetHtmlContentRecovery(codigo)
                };

                await emailService.SendEmailAsync(request);
            }
            catch (Exception)
            {

                throw;
            }
        }

        private string GetHtmlContent(string userName)
        {
            string Response = @"
<div style=""width:100%; background-color:#0066FF; padding: 20px;"">
    <div style=""max-width: 600px; margin: 0 auto; background-color:#fbfbfb; border-radius: 30px; padding: 20px;"">
        <img src=""https://volunteebd.blob.core.windows.net/imagem/logo1.png"" alt=""Logotipo da Aplicação"" style="" display: block; margin: 0 auto; max-width: 200px;"" />
        <h1 style=""color: #1E1E1E; text-align: center;"">Bem-vindo ao Voluntee!</h1>
<p style=""color: #1E1E1E; text-align: center;"">Olá <strong>" + userName + @"</strong>,</p>
        <p style=""color: #1E1E1E;text-align: center"">Estamos muito felizes por você ter se cadastrado no nosso aplicativo.</p>
        <p style=""color: #1E1E1E;text-align: center"">Explore todas as funcionalidades que oferecemos e faça o bem participando das ações solidárias</p>
        <p style=""color: #1E1E1E;text-align: center"">Aproveite sua experiência conosco!</p>
        <p style=""color: #1E1E1E;text-align: center"">Atenciosamente,<br>Equipe Voluntee</p>
    </div>
</div>";


            return Response;

     


        }

        private string GetHtmlContentRecovery(int codigo)
        {
            string Response = @"
<div style=""width:100%; background-color:#0066FF; padding: 20px;"">
    <div style=""max-width: 600px; margin: 0 auto; background-color:#fbfbfb; border-radius: 30px; padding: 20px;"">
        <img src=""https://volunteebd.blob.core.windows.net/imagem/logo1.png"" alt=""Logotipo da Aplicação"" style="" display: block; margin: 0 auto; max-width: 200px;"" />
        <h1 style=""color: #1E1E1E;text-align: center;"">Recuperação de senha</h1>
    <p style=""color: #1E1E1E;font-size: 24px; text-align: center;"">Código de confirmação <strong>"+codigo +@"</strong></p>

    </div>
</div>";


            return Response;
        }
    }
}

