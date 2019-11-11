using System;
namespace adminsite.Models
{
    public class Contacts
    {
#nullable disable
        public long id { get; set; }

        public string name { get; set; }
#nullable enable
        public string? category { get; set; }
#nullable disable
        public string email { get; set; }

        public string message { get; set; }
#nullable enable
        public DateTime? date { get; set; }
    }
}