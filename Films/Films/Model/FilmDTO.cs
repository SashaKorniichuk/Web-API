using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Films.Model
{
    public class FilmDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public double Rating { get; set; }

        public string Image { get; set; }

        public string Genre { get; set; }
    }
}
