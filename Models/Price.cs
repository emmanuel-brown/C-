using System;
namespace adminsite.Models
{
    public class Price
    {
#nullable disable
        public long id { get; set; }

        public long productId { get; set; }

        public decimal price { get; set; }
#nullable enable
        public string? region { get; set; }

        public DateTime? startDate { get; set; }

        public DateTime? endDate { get; set; }

        public string? coupons { get; set; }
    }
}