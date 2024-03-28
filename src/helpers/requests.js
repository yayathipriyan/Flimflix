const API_KEY = "678c7b7f4802f0c6036ba6c1bfdf7511"

export default{
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
};