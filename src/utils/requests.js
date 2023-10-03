const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getToprateMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.result;
};

// export const getMovies = async () => {
//   const res = await fetch(
//     `${BASE_URL}/search/movie?&api_key=${API_KEY}&query=${}`
//   );
//   const data = await res.json();
//   return data.result;
// };

// export const getMovieDetails = async () => {
//   const res = await fetch(`${BASE_URL}/movie/${}?&api_key=${API_KEY}`);
//   const data = await res.json();
//   return data.result;
// };

// export const getWatchlistMovies = async () => {
//   const res = await fetch(
//     `${BASE_URL}/trending/movie/day?language=en-US-&api_key=${API_KEY}`
//   );
//   const data = await res.json();
//   return data.result;
// };
