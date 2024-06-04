using api.voluntee.Contexts;
using api.voluntee.Interfaces;
using api.voluntee.Repository;
using api.voluntee.Services;
using api.voluntee.Utils.SendEmail;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddAuthentication(options =>
{
    options.DefaultChallengeScheme = "JwtBearer";
    options.DefaultAuthenticateScheme = "JwtBearer";
}).AddJwtBearer("JwtBearer", options =>
 {
     options.TokenValidationParameters = new TokenValidationParameters
     {

         ValidateIssuer = true,


         ValidateAudience = true,


         ValidateLifetime = true,


         IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("vital-webapi-chave-symmetricsecuritykey")),

     
         ClockSkew = TimeSpan.FromMinutes(30),

         ValidIssuer = "Vital-WebAPI",


         ValidAudience = "Vital-WebAPI"
     };
 });

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "API Voluntee",
        Description = "Backend API",
        Contact = new OpenApiContact
        {
            Name = "Senai Informática"
        }
    });


    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Value: Bearer TokenJWT ",
    });
    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
});


builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
builder.Services.AddScoped<ICampanhaRepository, CampanhaRepository>();
builder.Services.AddScoped<IPresencaCampanhaRepository, PresencaCampanhaRepository>();
builder.Services.AddScoped<PontuacaoService>();
builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection(nameof(EmailSettings)));
builder.Services.AddTransient<IEmailService, EmailService>();
builder.Services.AddScoped<EmailSendingService>();
builder.Services.AddDbContext<VolunteeContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Data Source=NOTE06-S21\\SQLEXPRESS; initial catalog=Voluntee; user Id = sa; pwd = Senai@134; TrustServerCertificate=true;")));
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
