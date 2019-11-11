namespace adminsite.Models
{
    public class Products
    {
#nullable disable
        public int id { get; set; }
        public string name { get; set; }

        public string description { get; set; }

        public string img { get; set; }

        public string category { get; set; }

        public int stock { get; set; }
    }
}