using api.voluntee.Domains;

namespace api.voluntee.Interfaces
{
    public interface IInstituicaoRepository
    {
       void Cadastrar(Instituicao instituicao);
       Instituicao BuscarInstituicao(Guid id);
       List<Instituicao> ListarInstituicao();
    }
}
