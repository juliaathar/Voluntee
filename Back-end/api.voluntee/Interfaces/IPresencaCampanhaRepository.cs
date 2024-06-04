namespace api.voluntee.Interfaces
{
    public interface IPresencaCampanhaRepository
    {
        void ConfirmarPresenca(Guid idUsuario, Guid idCampanha);
    }
}
