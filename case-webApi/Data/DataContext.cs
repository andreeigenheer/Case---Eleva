using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using case_webApi.Models;

   

namespace case_webApi.Data
{
    public class DataContext : DbContext
    
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) { }

        public DbSet<escola> Escola { get; set; }

        public DbSet<turma> Turma { get; set;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<escola>()
            .HasKey(AD => new {AD.idEscola});

            builder.Entity<turma>()
            .HasData(new List<turma>(){

            });
        }
    }
}