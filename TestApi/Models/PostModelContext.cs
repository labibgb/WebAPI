using System;
using Microsoft.EntityFrameworkCore;


namespace TestApi.Models
{
    public class PostModelContext: DbContext
    {
        public PostModelContext(DbContextOptions<PostModelContext> options) : base(options)
        {

        }

        public DbSet<PostModel> Posts { get; set; }
    }
}
