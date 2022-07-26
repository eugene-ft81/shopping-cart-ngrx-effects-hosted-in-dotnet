//using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

using System.Collections.Generic;

using Products.Repository;
using Products.Repository.Models;

namespace Products.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsRepository repository;

        public ProductsController(IProductsRepository _repository)
        {
            repository = _repository;
        }

        //[EnableCors("CartApp")]
        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get() => Ok(repository.Get());
    }
}
