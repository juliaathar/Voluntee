using api.voluntee.Contexts;

namespace api.voluntee.Services
{
    public class PontuacaoService
    {
        private readonly VolunteeContext _context;

        public PontuacaoService(VolunteeContext context)
        {
            _context = context;
        }

        public void IncrementarPontos(Guid id, int pontos)
        {
            var usuarioBuscado = _context.Usuarios.Find(id);

            if (usuarioBuscado != null)
            {
                usuarioBuscado.Pontos += pontos;
                _context.SaveChanges();
            }
        }
    }
}
