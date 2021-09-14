using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using case_webApi.Models;
{
     
}

namespace case_webApi.Data
{
    public class DataContext : DbContext
    
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) { }

        public Dbset<escola> Escola { get; set; }

        public Dbset<turma> Turma { get; set;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<escola>()
            .HasKey(AD => new {AD.idEscola});

            builder.Entity<Turma>()
            .HasData(new List<Turma>(){

            });
        }
    }
}