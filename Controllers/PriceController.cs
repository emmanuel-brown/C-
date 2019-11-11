using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using adminsite.Models;

namespace adminsite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PriceController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public PriceController(DataBaseContext context)
        {
            _context = context;
        }

        // GET: api/Price
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Price>>> Getprice()
        {
            return await _context.price.ToListAsync();
        }

        // GET: api/Price/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Price>> GetPrice(long id)
        {
            var price = await _context.price.FindAsync(id);

            if (price == null)
            {
                return NotFound();
            }

            return price;
        }

        // PUT: api/Price/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrice(long id, Price price)
        {
            if (id != price.id)
            {
                return BadRequest();
            }

            _context.Entry(price).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PriceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Price
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Price>> PostPrice(Price price)
        {
            _context.price.Add(price);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPrice", new { id = price.id }, price);
        }

        // DELETE: api/Price/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Price>> DeletePrice(long id)
        {
            var price = await _context.price.FindAsync(id);
            if (price == null)
            {
                return NotFound();
            }

            _context.price.Remove(price);
            await _context.SaveChangesAsync();

            return price;
        }

        private bool PriceExists(long id)
        {
            return _context.price.Any(e => e.id == id);
        }
    }
}
