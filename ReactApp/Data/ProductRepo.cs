using Microsoft.EntityFrameworkCore;
using ReactApp.Models;

namespace ReactApp.Data
{
    public static class ProductRepo
    {
     
        public async static Task<List<Product>> GetProductsAsync()
        {
            using (var db = new Context())
            {
                return await db.Products.ToListAsync();
            }
        }
        public async static Task<Product> GetProductByIdAsync(int productId)
        {
            using (var db = new Context())
            {
                return await db.Products
                    .FirstOrDefaultAsync(product => product.Id == productId);
            }
        }

        public async static Task<bool> CreateProductAsync(Product productToCreate)
        {
            using (var db = new Context())
            {
                try
                {
                    await db.Products.AddAsync(productToCreate);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
        public async static Task<bool> UpdateProductAsync(Product productToUpdate)
        {
            using (var db = new Context())
            {
                try
                {
                    db.Products.Update(productToUpdate);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public async static Task<bool> DeleteProductAsync(int productId)
        {
            using (var db = new Context())
            {
                try
                {
                    Product productToDelete = await GetProductByIdAsync(productId);

                    db.Remove(productToDelete);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
    }
}
