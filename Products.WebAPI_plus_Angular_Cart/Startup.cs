using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

// start integration step #0
using Microsoft.AspNetCore.SpaServices.AngularCli;
// end integration step #0

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Products.Repository;

namespace _07252022_WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // start integration step #2
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
            // end integration step #2

            // start integration step #1
            services.AddControllers();
            //services.AddControllersWithViews();
            // start integration step #1

            services.AddScoped<IProductsRepository, ProductsRepository>();

            services.AddSwaggerGen();

            //services.AddCors(options =>
            //{
            //    options.AddPolicy(name: "CartApp", builder =>
            //    {
            //        builder
            //        //.WithOrigins("http://localhost:4200")
            //        .AllowAnyOrigin()
            //        .AllowAnyHeader()
            //        .AllowAnyMethod();
            //        //.WithMethods("GET");
            //        //.WithExposedHeaders("*");
            //    });
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseSwagger();
                app.UseSwaggerUI();
            }

            // start integration step #3
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }
            // end integration step #3

            app.UseRouting();

            //app.UseCors("AllowOrigin");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            // start integration step #4
            // Spa middleware to enable SPA request handling
            app.UseSpa(spa =>
            {
                // The directory from which the SPA files shall be served for client requests
                spa.Options.SourcePath = "ClientApp";

                // When in Development, Since the SPA app is not build use npm start command to run the node server for local run
                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
            // end integration step #4
        }
    }
}
