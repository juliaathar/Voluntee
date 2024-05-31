using api.voluntee.Domains;

namespace api.voluntee.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);

        void EditarPerfil(Guid id, Usuario usuario);
    }
}
