import { getTrending } from "Api";
import { useState,useEffect } from "react";
import SearchMovie from "components/SearchMovie/SearchMovie";
import {Loader} from "components/Loader/Loader";

const Homepage = () =>{
    const[films, setFilms] =useState([]);
    const[loading, setLoading]=useState(false);

   useEffect(()=>{
    const FetchTrendingFilm = async ()=>{
        setLoading(true);
       try {
        const trendingFilms = await getTrending();
        setFilms(trendingFilms);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    FetchTrendingFilm();
    
   },[]);
   return (
    <main>
        <h1>Trending movies today</h1>
        {films && <SearchMovie films={films} />}
        {loading && <Loader />}
    </main>
    );
}
export default Homepage;