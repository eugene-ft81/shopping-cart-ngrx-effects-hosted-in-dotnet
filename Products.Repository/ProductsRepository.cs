using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Products.Repository.Models;

namespace Products.Repository
{
    public class ProductsRepository : IProductsRepository
    {
        public List<Product> Get()
        {
            var filePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Data/ApiData.json");
            var fileContent = System.IO.File.ReadAllText(filePath);
            var productsJson = JsonDocument.Parse(fileContent).RootElement.GetProperty("products").GetRawText();
            var products = JsonSerializer.Deserialize<List<Product>>(productsJson);
            return products;
        }
    }
}
