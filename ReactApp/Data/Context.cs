using Microsoft.EntityFrameworkCore;
using ReactApp.Models;

namespace ReactApp.Data
{
    public class Context: DbContext
    {
        public Context()
        {
        }

        public Context(DbContextOptions<Context> options)
        : base(options)
        {
        }
        public DbSet<Product> Products { get; set; } = null!;
    }
}
