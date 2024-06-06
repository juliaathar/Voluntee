namespace api.voluntee.Dtos
{
    public class UsuarioPostDto
    {
        public string Nome { get; set; } = null!;

        public string Cpf { get; set; } = null!;

        public DateTime DataNascimento { get; set; }

        public string Email { get; set; } = null!;

        public string Senha { get; set; } = null!;

        public int? CodRecupSenha { get; set; }

        public int? Pontos { get; set; }

        public bool? PerfilEditado { get; set; }
        public bool? FotoAtualizada { get; set; }
    }
}
