using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace api.voluntee.ViewModels
{
    public class UsuarioViewModel
    {
        [NotMapped]
        [JsonIgnore]
        public IFormFile? Arquivo { get; set; }
        public string? Foto { get; set; }
    }
}
