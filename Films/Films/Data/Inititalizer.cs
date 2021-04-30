using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Films.Data
{
    public class Inititalizer
    {
        public static void Seed(ApplicationContext context)
        {
          
            if (!context.Genres.Any())
            {
                context.Genres.AddRange(Genres);
            }

            if (!context.Films.Any())
            {
                context.AddRange
                    (
                    new Film
                    {
                      Name="Harry Potter",
                      Rating=10,
                      Image= "https://sites.google.com/site/znakomstvogp/_/rsrc/1363533236445/home/1235573806_garri_potter1.jpg",
                      Genre=Genres.FirstOrDefault(x=>x.Name=="Fantasy")
                    },
                     new Film
                     {
                         Name = "Avatar",
                         Rating = 3,
                         Image = "https://img-tv.vl.ru/fhd/0f3f565c929ea34315aabd160a67668c19012c.jpg",
                         Genre = Genres.FirstOrDefault(x => x.Name == "Fantasy")
                     },
                     new Film
                     {
                         Name = "One Home",
                         Rating = 3,
                         Image = "https://ptzgovorit.ru/sites/default/files/styles/700x400/public/original_nodes/odin_doma.jpg?itok=DiNYwBPj",
                         Genre = Genres.FirstOrDefault(x => x.Name == "Comedy")
                     }
                    );
                context.SaveChanges();

            }
        }

        private static List<Genre> genres;
        public static List<Genre> Genres
        {
            get
            {
                if (genres == null)
                {
                    var genreList = new Genre[]
                    {
                        new Genre{Name="Comedy"},
                        new Genre{Name="Fantasy"}
                    };
                    genres = new List<Genre>();

                    genres = genreList.ToList();
                }
                return genres;
            }
        }
    }
}
