using api.voluntee.Domains;
using api.voluntee.Dtos;

namespace api.voluntee.Interfaces
{
    public interface ICampanhaRepository
    {
        void Cadastrar (CampanhaPostDto campanha);
        List<Campanha> ListarCampanhas();
        Campanha BuscarCampanha (Guid id);
        List<Campanha> ListarCampanhasPopulares();
    }
}
