using api.voluntee.Contexts;
using api.voluntee.Domains;
using api.voluntee.Dtos;
using api.voluntee.Interfaces;
using api.voluntee.Services;

namespace api.voluntee.Repository
{
    public class CampanhaRepository : ICampanhaRepository
    {
        private readonly VolunteeContext ctx = new VolunteeContext();
        private readonly PontuacaoService _pontuacaoService;

       public CampanhaRepository(VolunteeContext context, PontuacaoService pontuacaoService)
        {
            ctx = context;
            _pontuacaoService = pontuacaoService;
        }
        public Campanha BuscarCampanha(Guid id)
        {
            try
            {
                return ctx.Campanhas.FirstOrDefault(x => x.Id == id)!;
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao achar campanha", ex);
            }
        }

        public void Cadastrar(CampanhaPostDto campanhaDto)
        {
            var usuarioBuscado = ctx.Usuarios.Find(campanhaDto.UsuarioId);
            if (usuarioBuscado == null)
            {
                throw new Exception("Usuário não encontrado");
            }

            bool primeiraCampanha = !ctx.Campanhas.Any(c => c.UsuarioId == campanhaDto.UsuarioId);

            var campanha = new Campanha
            {
                Nome = campanhaDto.Nome,
                UsuarioId = campanhaDto.UsuarioId,
                Imagem = campanhaDto.Imagem,
                Email = campanhaDto.Email,
                Descricao = campanhaDto.Descricao,
                AceitaDoacao = campanhaDto.AceitaDoacao,
                Alimento = campanhaDto.Alimento,
                Dinheiro = campanhaDto.Dinheiro,
                Roupas = campanhaDto.Roupas,
                Longitude = campanhaDto.Longitude,
                Latitude = campanhaDto.Latitude,
                DataInicio = campanhaDto.DataInicio,
                DataEncerramento = campanhaDto.DataEncerramento,
                PessoasPresentes = campanhaDto.PessoasPresentes

            };

            ctx.Campanhas.Add(campanha);

            if (primeiraCampanha)
            {
                _pontuacaoService.IncrementarPontos(campanha.UsuarioId, 100);
            }

            ctx.SaveChanges();
        }


        public List<Campanha> ListarCampanhas()
        {
            try
            {
                return ctx.Campanhas.ToList();
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao listar campanhas", ex);
            }
        }

        public List<Campanha> ListarCampanhasPopulares()
        {
            try
            {

                int valorPopularidade = 5000;
                return ctx.Campanhas.Where(p => p.PessoasPresentes >= valorPopularidade).ToList();
            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao achar campanhas populares", ex);
            }
        }
    }
}
