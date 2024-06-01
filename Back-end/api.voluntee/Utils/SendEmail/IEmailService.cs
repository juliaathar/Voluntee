namespace api.voluntee.Utils.SendEmail
{
    public interface IEmailService
    {
        Task SendEmailAsync(EmailRequest emailRequest);
    }
}
