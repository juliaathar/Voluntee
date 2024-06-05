using api.voluntee.Contexts;
using api.voluntee.Domains;
using api.voluntee.Interfaces;
using api.voluntee.Services;
using api.voluntee.Utils.BlobStorage;

namespace api.voluntee.Repository
{
    public class InstituicaoRepository : IInstituicaoRepository
    {

        private readonly VolunteeContext ctx = new VolunteeContext();


        public InstituicaoRepository(VolunteeContext context)
        {
            ctx = context;
        }

        public Instituicao BuscarInstituicao(Guid id)
        {
            try
            {
                return ctx.Instituicaos.FirstOrDefault(x => x.Id == id)!;
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao achar instituição", ex);

            }
        }

        public void Cadastrar(Instituicao instituicao)
        {
            try
            {

                var connectionString = "";

                var containerName = "";

                string imagemUrl = null;

                if (instituicao.ImagemArquivo != null)
                {
                    imagemUrl = AzureBlobStorageHelper.UploadImageBlobAsync(instituicao.ImagemArquivo, connectionString, containerName).GetAwaiter().GetResult();
                }

                var instituicaoCadastrada = new Instituicao
                {
                    Nome = instituicao.Nome,
                    Imagem = imagemUrl,
                    Email = instituicao.Email,
                    Descricao = instituicao.Descricao,
                    AceitaDoacao = instituicao.AceitaDoacao,
                    Alimento = instituicao.Alimento,
                    Dinheiro = instituicao.Dinheiro,
                    Roupas = instituicao.Roupas,
                    Longitude = instituicao.Longitude,
                    Latitude = instituicao.Latitude,
                    Funcionarios = instituicao.Funcionarios,
                };

                ctx.Add(instituicaoCadastrada);
                ctx.SaveChanges();
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao cadastrar instituição", ex);

            }
        }

        public List<Instituicao> ListarInstituicao()
        {
            try
            {
                return ctx.Instituicaos.ToList();
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao listar instituição", ex);

            }
        }
    }
}
