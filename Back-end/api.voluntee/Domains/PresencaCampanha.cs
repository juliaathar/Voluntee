using System;
using System.Collections.Generic;

namespace api.voluntee.Domains;

public partial class PresencaCampanha
{
    public Guid Id { get; set; }

    public Guid CampanhaId { get; set; }

    public Guid UsuarioId { get; set; }

    public virtual Campanha Campanha { get; set; } = null!;

    public virtual Usuario Usuario { get; set; } = null!;
}
