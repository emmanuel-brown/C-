using Microsoft.EntityFrameworkCore;

namespace adminsite.Models
{
    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options)
         : base(options)
        {
        }

        public DbSet<Products> products { get; set; }

        public DbSet<Price> price { get; set; }

        public DbSet<Contacts> contacts { get; set; }
    }
}