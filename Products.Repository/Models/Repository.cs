using Products.Repository.Models;
using System.Collections.Generic;

namespace Products.Repository
{
    public interface IProductsRepository
    {
        List<Product> Get();
    }
}
