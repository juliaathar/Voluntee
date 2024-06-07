using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using api.voluntee.Domains;

namespace api.voluntee.Contexts;

public partial class VolunteeContext : DbContext
{
    public VolunteeContext()
    {
    }

    public VolunteeContext(DbContextOptions<VolunteeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Campanha> Campanhas { get; set; }

    public virtual DbSet<Instituicao> Instituicaos { get; set; }

    public virtual DbSet<PresencaCampanha> PresencaCampanhas { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.

        => optionsBuilder.UseSqlServer("Data Source=NOTE22-S21\\SQLEXPRESS; initial catalog=Voluntee; user Id = sa; pwd = senai@134; TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Campanha>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Campanha__3214EC07A93AA8F5");

            entity.ToTable("Campanha");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
            entity.Property(e => e.DataEncerramento).HasColumnType("datetime");
            entity.Property(e => e.DataInicio).HasColumnType("datetime");
            entity.Property(e => e.Descricao).IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Imagem).IsUnicode(false);
            entity.Property(e => e.Latitude).HasColumnType("decimal(9, 6)");
            entity.Property(e => e.Longitude).HasColumnType("decimal(9, 6)");
            entity.Property(e => e.Nome)
                .HasMaxLength(255)
                .IsUnicode(false);

            entity.HasOne(d => d.Usuario).WithMany(p => p.Campanhas)
                .HasForeignKey(d => d.UsuarioId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Campanha__Usuari__5070F446");
        });

        modelBuilder.Entity<Instituicao>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Institui__3214EC07E0788559");

            entity.ToTable("Instituicao");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
            entity.Property(e => e.Descricao).IsUnicode(false);
            entity.Property(e => e.Imagem).IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Latitude).HasColumnType("decimal(9, 6)");
            entity.Property(e => e.Longitude).HasColumnType("decimal(9, 6)");
            entity.Property(e => e.Nome)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        modelBuilder.Entity<PresencaCampanha>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Presenca__3214EC0757A408AC");

            entity.ToTable("PresencaCampanha");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

            entity.HasOne(d => d.Campanha).WithMany(p => p.PresencaCampanhas)
                .HasForeignKey(d => d.CampanhaId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__PresencaC__Campa__5441852A");

            entity.HasOne(d => d.Usuario).WithMany(p => p.PresencaCampanhas)
                .HasForeignKey(d => d.UsuarioId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__PresencaC__Usuar__5535A963");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Usuario__3214EC0757BE5519");

            entity.ToTable("Usuario");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
            entity.Property(e => e.Cpf)
                .HasMaxLength(14)
                .IsUnicode(false);
            entity.Property(e => e.DataNascimento).HasColumnType("datetime");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Foto).IsUnicode(false);
            entity.Property(e => e.Nome)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.PerfilEditado).HasDefaultValue(false);
            entity.Property(e => e.FotoAtualizada).HasDefaultValue(false);
            entity.Property(e => e.Senha)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
