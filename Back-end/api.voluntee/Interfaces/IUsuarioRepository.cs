using api.voluntee.Domains;
using api.voluntee.Dtos;

namespace api.voluntee.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);

        void EditarPerfil(Guid id, UsuarioUpdateDto usuario);
        Usuario BuscarUsuario(Guid id);

    }
}
