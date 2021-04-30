using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Films.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions option) : base(option)
        {
            Database.EnsureCreated();
            
        
        }

        public DbSet<Genre> Genres { get; set; }
        public DbSet<Film> Films { get; set; }


    }
}
