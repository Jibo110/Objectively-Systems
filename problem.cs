/* Problem 4 : There is a bug in the following .NET Core code for adding a new item to the database using Entity Framework. Identify and fix the issue.  

using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

public class Item
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class AppDbContext : DbContext
{
    public DbSet<Item> Items { get; set; }
}

class Program
{
    static void Main()
    {
        using (var context = new AppDbContext())
        {
            var newItem = new Item { Name = "New Item" };
            context.Items.Add(newItem);
            context.SaveChanges();
            Console.WriteLine("Item added successfully.");
        }
    }
}
*/

// Solutoion: 
using System;
using Microsoft.EntityFrameworkCore;

public class Item
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class AppDbContext : DbContext
{
    public DbSet<Item> Items { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // Configure SQLite as the database provider
        optionsBuilder.UseSqlite("Data Source=app.db");
    }
}

class Program
{
    static void Main()
    {
        using (var context = new AppDbContext())
        {
            // Ensure the database is created
            context.Database.EnsureCreated();
            
            var newItem = new Item { Name = "New Item" };
            context.Items.Add(newItem);
            context.SaveChanges();
            Console.WriteLine("Item added successfully.");
        }
    }
}