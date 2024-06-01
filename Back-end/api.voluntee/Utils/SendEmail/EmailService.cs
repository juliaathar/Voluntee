
using Microsoft.Extensions.Options;
using MimeKit;
using MailKit.Net.Smtp;

namespace api.voluntee.Utils.SendEmail
{
    public class EmailService : IEmailService
    {
        private readonly EmailSettings emailSettings;
        public EmailService(IOptions<EmailSettings> options)
        {
            emailSettings = options.Value;
        }
        public async Task SendEmailAsync(EmailRequest emailRequest)
        {
            try
            {
                var email = new MimeMessage();

                email.Sender = MailboxAddress.Parse(emailSettings.Email);

                email.To.Add(MailboxAddress.Parse(emailRequest.ToEmail));

                email.Subject = emailRequest.Subject;

                var builder = new BodyBuilder();

                builder.HtmlBody = emailRequest.Body;

                email.Body = builder.ToMessageBody();

                using (var smtp = new SmtpClient())
                {
                    smtp.Connect(emailSettings.Host, emailSettings.Port, MailKit.Security.SecureSocketOptions.StartTls);

                    smtp.Authenticate(emailSettings.Email, emailSettings.Password);

                    await smtp.SendAsync(email);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}

