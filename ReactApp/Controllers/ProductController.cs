using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactApp.Data;
using ReactApp.Models;

namespace ReactApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly Context _context;

        public ProductController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetProductsAsync")]
        public async Task<List<Product>> GetProductsAsync()
        {
            return await _context.Products.ToListAsync();
           
        }

        [HttpGet("id")]
        public async Task<Product> GetByIdAsync(int id)
        {
            return await _context.Set<Product>().FindAsync(id);
        }

        [HttpPost]
        public async Task<Product> CreateAsync(Product item)
        {
            await _context.Set<Product>().AddAsync(item);
            await _context.SaveChangesAsync();
            return item;
        }

        [HttpPost]
        public async Task<Product> UpdateAsync(Product item)
        {
            _context.Set<Product>().Update(item);
            await _context.SaveChangesAsync();
            return item;
        }
       
        [HttpPost]
        public async Task<Product> DeleteAsync(Product item)
        {

            _context.Set<Product>().Remove(item);
            await _context.SaveChangesAsync();

            return item;
        }


    }
}
