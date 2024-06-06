using api.voluntee.Contexts;
using api.voluntee.Domains;
using api.voluntee.Dtos;
using api.voluntee.Interfaces;
using api.voluntee.Services;
using Microsoft.EntityFrameworkCore;
using WebAPI.Utils;

namespace api.voluntee.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly VolunteeContext ctx = new VolunteeContext();
        private readonly PontuacaoService _pontuacaoService;

        public UsuarioRepository(VolunteeContext context, PontuacaoService pontuacaoService)
        {
            ctx = context;
            _pontuacaoService = pontuacaoService;
        }

        public void Cadastrar(UsuarioPostDto usuarioDto)
        {
            try
            {
                bool cpfExiste = ctx.Usuarios.Any(u => u.Cpf == usuarioDto.Cpf);

                if (cpfExiste)
                {
                    throw new InvalidOperationException("CPF já cadastrado.");
                }
                else
                {
                    var usuario = new Usuario
                    {
                        Id = Guid.NewGuid(),
                        Nome = usuarioDto.Nome,
                        Cpf = usuarioDto.Cpf,
                        DataNascimento = usuarioDto.DataNascimento,
                        Email = usuarioDto.Email,
                        Senha = Criptografia.GerarHash(usuarioDto.Senha!),
                        CodRecupSenha = usuarioDto.CodRecupSenha,
                        Pontos = usuarioDto.Pontos,
                        PerfilEditado = usuarioDto.PerfilEditado,
                        FotoAtualizada = usuarioDto.FotoAtualizada
                    };

                    ctx.Usuarios.Add(usuario);
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
            Usuario usuarioBuscado = ctx.Usuarios.Find(id);

            if (usuarioBuscado != null)
            {
                usuarioBuscado.Email = usuario.Email!;
                usuarioBuscado.Nome = usuario.Nome!;

                if (usuarioBuscado.PerfilEditado == false)
                {
                    _pontuacaoService.IncrementarPontos(id, 100);
                    usuarioBuscado.PerfilEditado = true;
                }

                ctx.Usuarios.Update(usuarioBuscado);
                ctx.SaveChanges();
            }
        }

        public Usuario BuscarUsuario(Guid id)
        {
            try
            {
                return ctx.Usuarios.FirstOrDefault(x => x.Id == id)!;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Usuario BuscarPorEmailESenha(string email, string senha)
        {
            try
            {
                var user = ctx.Usuarios.Select(u => new Usuario
                {
                    Id = u.Id,
                    Email = u.Email,
                    Senha = u.Senha,
                    Nome = u.Nome,

                }).FirstOrDefault
                (x => x.Email == email);

                if (user == null) return null!;

                if (!Criptografia.CompararHash(senha, user.Senha!)) return null!;

                return user;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public bool AlterarSenha(string email, string senhaNova)
        {
            try
            {
                var user = ctx.Usuarios.FirstOrDefault(x => x.Email == email);

                if (user == null) return false;

                user.Senha = Criptografia.GerarHash(senhaNova);

                ctx.Update(user);

                ctx.SaveChanges();

                return true;

            }
            catch (Exception)
            {
                throw;
            }
        }

        public void AtualizarFoto(Guid id, string novaUrlFoto)
        {
            try
            {
                Usuario usuarioBuscado = ctx.Usuarios.FirstOrDefault(x => x.Id == id)!;

                if (usuarioBuscado != null)
                {
                    usuarioBuscado.Foto = novaUrlFoto;
                    if (usuarioBuscado.FotoAtualizada == false)
                    {
                        _pontuacaoService.IncrementarPontos(id, 100);
                        usuarioBuscado.FotoAtualizada = true;
                    }
                }
            

                ctx.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }



    }
}
