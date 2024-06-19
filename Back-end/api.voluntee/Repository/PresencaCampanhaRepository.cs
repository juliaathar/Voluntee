using api.voluntee.Contexts;
using api.voluntee.Domains;
using api.voluntee.Interfaces;
using api.voluntee.Services;

namespace api.voluntee.Repository
{
    public class PresencaCampanhaRepository : IPresencaCampanhaRepository
    {

        private readonly VolunteeContext _ctx = new VolunteeContext();
        private readonly PontuacaoService _pontuacaoService;

        public PresencaCampanhaRepository (VolunteeContext ctx, PontuacaoService pontuacaoService)
        {
            _ctx = ctx;
            _pontuacaoService = pontuacaoService;
        }
        public void ConfirmarPresenca(Guid idUsuario, Guid idCampanha)
        {
            try
            {
                var campanha = _ctx.Campanhas.Find(idCampanha) ?? throw new Exception("Campanha não encontrada");

                var usuario = _ctx.Usuarios.Find(idUsuario) ?? throw new Exception("Usuário não encontrado");

                var presencaJaConfirmada = _ctx.PresencaCampanhas.Any(p => p.UsuarioId == idUsuario && p.CampanhaId == idCampanha);

                if (presencaJaConfirmada)
                {
                    throw new Exception("Presença já confirmada");
                }

                campanha.PessoasPresentes += 1;

                _ctx.PresencaCampanhas.Add(new PresencaCampanha { UsuarioId = idUsuario, CampanhaId = idCampanha });

                _pontuacaoService.IncrementarPontos(idUsuario, 35);

                _ctx.SaveChanges();
            }
            catch (Exception ex)
            {
                throw; 
            }
        }

    }
}
