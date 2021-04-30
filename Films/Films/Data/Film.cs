using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Films.Data
{
    public class Film
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public double Rating { get; set; }

        public string Image { get; set; }

        public Genre Genre { get; set; }
    };
}
