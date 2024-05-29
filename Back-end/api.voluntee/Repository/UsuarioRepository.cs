using api.voluntee.Contexts;
using api.voluntee.Domains;
using api.voluntee.Interfaces;

namespace api.voluntee.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
		public VolunteeContext ctx = new VolunteeContext();
        public void Cadastrar(Usuario usuario)
        {
			try
			{
		
				ctx.Add(usuario);
				ctx.SaveChanges();
			}
			catch (Exception)
			{

				throw;
			}
        }
    }
}
