using api.voluntee.Contexts;
using api.voluntee.Domains;
using api.voluntee.Dtos;
using api.voluntee.Interfaces;
using WebAPI.Utils;

namespace api.voluntee.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
		public VolunteeContext ctx = new VolunteeContext();
        public void Cadastrar(Usuario usuario)
        {
            try
            {
                bool cpfExiste = ctx.Usuarios.Any(u => u.Cpf == usuario.Cpf);

                if (cpfExiste)
                {
                    throw new InvalidOperationException("CPF já cadastrado.");
                }
                else
                {
                    usuario.Senha = Criptografia.GerarHash(usuario.Senha!);

                    ctx.Add(usuario);
                    ctx.SaveChanges();
                }
        
            }
            catch (InvalidOperationException ex)
            {
                throw new InvalidOperationException("Erro ao cadastrar usuário: " + ex.Message, ex);
            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao cadastrar usuário.", ex);
            }
        }


        public void EditarPerfil(Guid id, UsuarioUpdateDto usuario)
        {
            Usuario usuarioBuscado = ctx.Usuarios.Find(id)!;

            if (usuarioBuscado != null)
            {
                usuarioBuscado.Email = usuario.Email!;
                usuarioBuscado.Nome = usuario.Nome!;
            }

            ctx.Usuarios.Update(usuarioBuscado!);

            ctx.SaveChanges();
        }
    }
}
