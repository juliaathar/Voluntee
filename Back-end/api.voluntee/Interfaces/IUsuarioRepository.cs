using api.voluntee.Domains;
using api.voluntee.Dtos;

namespace api.voluntee.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(UsuarioPostDto usuario);

        void EditarPerfil(Guid id, UsuarioUpdateDto usuario);
        Usuario BuscarUsuario(Guid id);

        Usuario BuscarPorEmailESenha(string email, string senha);
        bool AlterarSenha(string email, string senhaNova);

        public void AtualizarFoto(Guid id, string novaUrlFoto);

        List<Campanha> ListarPresencasCampanhas(Guid id);
    }
}
