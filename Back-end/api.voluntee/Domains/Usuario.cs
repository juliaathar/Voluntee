using System;
using System.Collections.Generic;

namespace api.voluntee.Domains;

public partial class Usuario
{
    public Guid Id { get; set; }

    public string Nome { get; set; } = null!;

    public string Cpf { get; set; } = null!;

    public DateTime DataNascimento { get; set; }

    public string Email { get; set; } = null!;

    public string Senha { get; set; } = null!;

    public string? Foto { get; set; }

    public int? CodRecupSenha { get; set; }

    public int? Pontos { get; set; }

<<<<<<< HEAD
=======
    public bool? PerfilEditado { get; set; }
    public bool? FotoAtualizada { get; set; }


>>>>>>> origin/develop
    public virtual ICollection<Campanha> Campanhas { get; set; } = new List<Campanha>();

    public virtual ICollection<PresencaCampanha> PresencaCampanhas { get; set; } = new List<PresencaCampanha>();
}
