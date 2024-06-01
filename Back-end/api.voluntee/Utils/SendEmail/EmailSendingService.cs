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
            string Response = @" < p style = color: #666666;text-align: center""><br>Equipe Voluntee</p>";

            return Response;

     


        }

        private string GetHtmlContentRecovery(int codigo)
        {
            string Response = @" < p style = color: #666666;text-align: center""><br>Equipe Voluntee</p>";

            return Response;
        }
    }
}

