using System;
using System.Collections.Generic;

namespace api.voluntee.Domains;

public partial class Instituicao
{
    public Guid Id { get; set; }

    public string Nome { get; set; } = null!;

    public string Descricao { get; set; } = null!;

    public string Imagem { get; set; } = null!;


    public string Email { get; set; } = null!;

    public bool AceitaDoacao { get; set; }

    public bool Alimento { get; set; }

    public bool Dinheiro { get; set; }

    public bool Roupas { get; set; }

    public decimal Longitude { get; set; }

    public decimal Latitude { get; set; }

    public int Funcionarios { get; set; }
}
