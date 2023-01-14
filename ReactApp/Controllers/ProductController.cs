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
            //using (var db = new Context())
            //{
            //    return await db.Products.ToListAsync();
            //}
        }
        //public async Task<IEnumerable<Product>> GetAsync()
        //{
        //    return await ProductRepo.GetProductsAsync();
        //}

        //[HttpGet("id")]
        //public async Task<Product> DetailsId(int id)
        //{
        //   return await ProductRepo.GetProductByIdAsync(id);

        //}
        //[HttpPost]
        //public async Task<bool> CreateAsync(Product product)
        //{
        //    return await ProductRepo.CreateProductAsync(product);
        //}

        //[HttpPost]
        //public async Task<bool> UpProduct(Product productToUpdate)
        //{
        //   return await ProductRepo.UpdateProductAsync(productToUpdate);
            
        //}

        //[HttpPost]
        //public async Task<bool> DeleteAsync(int id)
        //{
        //  return  await ProductRepo.DeleteProductAsync(id);
        //}

    }
}
