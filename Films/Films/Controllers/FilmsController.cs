using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Films.Data;
using Films.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Films.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FilmsController : ControllerBase
    {


        private readonly ApplicationContext _dbContext;

        public FilmsController(ApplicationContext context)
        {
            _dbContext = context;
        }

        [HttpGet]

        public IEnumerable<FilmDTO> Get()
        {
            return _dbContext.Films.Include(x => x.Genre).Select(x => new FilmDTO
            {
                Id = x.Id,
                Name = x.Name,
                Rating = x.Rating,
                Image=x.Image,
                Genre =x.Genre.Name
            }); 
        }
        [HttpPost]
        public async Task<IActionResult> Add(FilmDTO film)
        {
            if(film==null)
            {
                return BadRequest();
            }
            if(_dbContext.Films.FirstOrDefault(x=>x.Name==film.Name)!=null)
            {
                return BadRequest();
            }
            var newFilm = new Film
            {
                Name = film.Name,
                Rating = film.Rating,
                Image=film.Image,
                Genre = _dbContext.Genres.FirstOrDefault(x=>x.Name==film.Genre)
            };
            _dbContext.Films.Add(newFilm);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Edit(FilmDTO film)
        {
            
            var filmItem = await _dbContext.Films.FindAsync(film.Id);

            if(filmItem==null)
            {
                return NotFound();
            }

            filmItem.Name = film.Name;
            filmItem.Rating = film.Rating;
            filmItem.Image = film.Image;
            filmItem.Genre =_dbContext.Genres.FirstOrDefault(x=>x.Name== film.Genre);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(FilmDTO film)
        {

            var filmItem = await _dbContext.Films.FindAsync(film.Id);

            if (filmItem == null)
            {
                return NotFound();
            }
            _dbContext.Films.Remove(filmItem);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
