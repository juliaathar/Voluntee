﻿using System;
using System.Collections.Generic;
<<<<<<< HEAD
=======
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
>>>>>>> origin/develop

namespace api.voluntee.Domains;

public partial class Instituicao
{
    public Guid Id { get; set; }

    public string Nome { get; set; } = null!;

    public string Descricao { get; set; } = null!;

<<<<<<< HEAD
=======
    [NotMapped]
    [JsonIgnore]
    public IFormFile? ImagemArquivo { get; set; }
    public string? Imagem { get; set; }


>>>>>>> origin/develop
    public string Email { get; set; } = null!;

    public bool AceitaDoacao { get; set; }

    public bool Alimento { get; set; }

    public bool Dinheiro { get; set; }

    public bool Roupas { get; set; }

    public decimal Longitude { get; set; }

    public decimal Latitude { get; set; }

    public int Funcionarios { get; set; }
}
