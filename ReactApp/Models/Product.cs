using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactApp.Models
{
    public class Product
    {
        public int Id { get; set; }
        [StringLength(200)]
        public string? Title { get; set; }
        [StringLength(200)]
        public string? DescrLi { get; set; }
        [StringLength(2000)]
        public string? Description { get; set; }
        [Column(TypeName = "decimal(8, 2)")]
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        [StringLength(2000)]
        public string? ImgUrl { get; set; }
    }


}
