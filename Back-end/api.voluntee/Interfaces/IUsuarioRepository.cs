using api.voluntee.Domains;
<<<<<<< HEAD
=======
using api.voluntee.Dtos;
>>>>>>> origin/develop

namespace api.voluntee.Interfaces
{
    public interface IUsuarioRepository
    {
<<<<<<< HEAD
        void Cadastrar(Usuario usuario);
=======
        void Cadastrar(UsuarioPostDto usuario);

        void EditarPerfil(Guid id, UsuarioUpdateDto usuario);
        Usuario BuscarUsuario(Guid id);

        Usuario BuscarPorEmailESenha(string email, string senha);
        bool AlterarSenha(string email, string senhaNova);

        public void AtualizarFoto(Guid id, string novaUrlFoto);

        List<Campanha> ListarPresencasCampanhas(Guid id);
>>>>>>> origin/develop
    }
}
