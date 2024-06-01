using api.voluntee.Contexts;
using api.voluntee.Interfaces;
using api.voluntee.Repository;
using api.voluntee.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
builder.Services.AddScoped<ICampanhaRepository, CampanhaRepository>();
builder.Services.AddScoped<IPresencaCampanhaRepository, PresencaCampanhaRepository>();
builder.Services.AddScoped<PontuacaoService>(); 
builder.Services.AddDbContext<VolunteeContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Data Source=ABENATHAR\\SQLEXPRESS; initial catalog=Voluntee; user Id = sa; pwd = senai; TrustServerCertificate=true;")));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
