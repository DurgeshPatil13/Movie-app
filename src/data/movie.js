   const movies = [
   {
  id: 1,
  title: "Interstellar",
  year: 2014,
  rating: 8.7,
  genres: ["Sci-Fi", "Adventure"],
  runtime: "169 min",
  language: "English",
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgn7tSCyTHZUjPyGgheDYh2NL5E1bhIfOtKWYBq9v-w&s=10",
  overview:
    "A team of explorers travels through a mysterious wormhole in search of a new home for humanity."
},
{
  id: 2,
  title: "Inception",
  year: 2010,
  rating: 8.8,
  genres: ["Action", "Sci-Fi"],
  runtime: "148 min",
  language: "English",
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdhunAp1tS2_sCHf1rZUqd94v0mLoq2nHrAYFoyBWlg&s=10",
  overview:
    "A skilled thief enters people's dreams to steal secrets and is assigned one final impossible mission."
},
{
  id: 3,
  title: "The Dark Knight",
  year: 2008,
  rating: 9.0,
  genres: ["Action", "Crime"],
  runtime: "152 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  overview:
    "Batman faces the Joker, a criminal mastermind determined to plunge Gotham City into chaos."
},
{
  id: 4,
  title: "Avengers: Endgame",
  year: 2019,
  rating: 8.4,
  genres: ["Action", "Adventure"],
  runtime: "181 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  overview:
    "The Avengers reunite for one last battle to reverse Thanos' snap and restore the universe."
},
{
  id: 5,
  title: "Joker",
  year: 2019,
  rating: 8.4,
  genres: ["Crime", "Drama"],
  runtime: "122 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  overview:
    "A failed comedian descends into madness and becomes Gotham's most infamous criminal."
},
{
  id: 6,
  title: "Spider-Man: No Way Home",
  year: 2021,
  rating: 8.2,
  genres: ["Action", "Fantasy"],
  runtime: "148 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  overview:
    "Peter Parker seeks Doctor Strange's help after his identity is exposed, opening the multiverse."
},
{
  id: 7,
  title: "Dune",
  year: 2021,
  rating: 8.0,
  genres: ["Sci-Fi", "Adventure"],
  runtime: "155 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  overview:
    "Paul Atreides journeys to Arrakis, where destiny, politics, and survival collide."
},
{
  id: 8,
  title: "Oppenheimer",
  year: 2023,
  rating: 8.6,
  genres: ["Drama", "History"],
  runtime: "180 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
  overview:
    "The story of J. Robert Oppenheimer and the creation of the atomic bomb during World War II."
},
{
  id: 9,
  title: "Top Gun: Maverick",
  year: 2022,
  rating: 8.3,
  genres: ["Action", "Drama"],
  runtime: "131 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
  overview:
    "Maverick returns to train a new generation of elite fighter pilots for a dangerous mission."
},
{
  id: 10,
  title: "The Batman",
  year: 2022,
  rating: 7.8,
  genres: ["Action", "Mystery"],
  runtime: "176 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  overview:
    "Batman investigates a series of murders committed by the mysterious Riddler while uncovering corruption."
},
{
  id: 11,
  title: "Fight Club",
  year: 1999,
  rating: 8.8,
  genres: ["Drama", "Thriller"],
  runtime: "139 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  overview:
    "An insomniac office worker forms an underground fight club that spirals into chaos."
},
{
  id: 12,
  title: "The Shawshank Redemption",
  year: 1994,
  rating: 9.3,
  genres: ["Drama", "Crime"],
  runtime: "142 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  overview:
    "Two imprisoned men form an enduring friendship while hoping for freedom inside Shawshank prison."
},
{
  id: 13,
  title: "The Godfather",
  year: 1972,
  rating: 9.2,
  genres: ["Crime", "Drama"],
  runtime: "175 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  overview:
    "The aging patriarch of a powerful crime family transfers control of his empire to his reluctant son."
},
{
  id: 14,
  title: "The Matrix",
  year: 1999,
  rating: 8.7,
  genres: ["Sci-Fi", "Action"],
  runtime: "136 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  overview:
    "A hacker discovers reality is a simulation and joins a rebellion against intelligent machines."
},
{
  id: 15,
  title: "Gladiator",
  year: 2000,
  rating: 8.5,
  genres: ["Action", "Drama"],
  runtime: "155 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  overview:
    "A betrayed Roman general seeks revenge against the emperor who destroyed his family."
},
{
  id: 16,
  title: "Parasite",
  year: 2019,
  rating: 8.5,
  genres: ["Thriller", "Drama"],
  runtime: "132 min",
  language: "Korean",
  poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  overview:
    "A poor family gradually infiltrates the lives of a wealthy household with unexpected consequences."
},
{
  id: 17,
  title: "The Lord of the Rings: The Fellowship of the Ring",
  year: 2001,
  rating: 8.9,
  genres: ["Fantasy", "Adventure"],
  runtime: "178 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  overview:
    "A humble hobbit begins an epic quest to destroy the One Ring and save Middle-earth."
},
{
  id: 18,
  title: "Avatar",
  year: 2009,
  rating: 7.9,
  genres: ["Sci-Fi", "Adventure"],
  runtime: "162 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  overview:
    "A Marine on the distant world of Pandora must choose between duty and protecting its people."
},
{
  id: 19,
  title: "John Wick",
  year: 2014,
  rating: 7.4,
  genres: ["Action", "Thriller"],
  runtime: "101 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
  overview:
    "A retired assassin returns to the underworld after a devastating personal tragedy."
},
{
  id: 20,
  title: "Mad Max: Fury Road",
  year: 2015,
  rating: 8.1,
  genres: ["Action", "Adventure"],
  runtime: "120 min",
  language: "English",
  poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
  overview:
    "Max joins Furiosa in a high-speed escape across a brutal post-apocalyptic wasteland."
}
  ]
  export default movies