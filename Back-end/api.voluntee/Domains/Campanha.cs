﻿using System;
using System.Collections.Generic;

namespace api.voluntee.Domains;

public partial class Campanha
{
    public Guid Id { get; set; }

    public Guid UsuarioId { get; set; }

    public string Imagem { get; set; } = null!;

    public string Nome { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Descricao { get; set; } = null!;

    public bool AceitaDoacao { get; set; }

    public bool Alimento { get; set; }

    public bool Dinheiro { get; set; }

    public bool Roupas { get; set; }

    public decimal Longitude { get; set; }

    public decimal Latitude { get; set; }

    public DateTime DataInicio { get; set; }

    public DateTime DataEncerramento { get; set; }

    public int PessoasPresentes { get; set; }

    public virtual ICollection<PresencaCampanha> PresencaCampanhas { get; set; } = new List<PresencaCampanha>();

    public virtual Usuario Usuario { get; set; } = null!;
}
