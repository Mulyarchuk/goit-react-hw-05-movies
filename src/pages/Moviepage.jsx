import { useState,useEffect } from "react";
import { getSearchMovies } from "Api";
import { Loader } from "components/Loader/Loader";
import { useSearchParams } from 'react-router-dom';
import SearchMovie from "components/SearchMovie/SearchMovie";

const Moviepage = () =>{
    // const [query,setQuery] = useState(``);
    const [searchFilms,setSearchFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryMovie = searchParams.get('query') ?? '';

    // const handelChange = e => {
    //     const { value } = e.target;
    //     setQuery(value);
    //   };
    //   const handleSubmit = e => {
    //     e.preventDefault();
    //     setSearchParams({ query });
    //     setQuery('');
    //   };
    const handleSubmit = event => {
        event.preventDefault();
        setSearchParams({ query: event.target.elements.query.value.toLowerCase() });
    };


     useEffect(() => {
        if (queryMovie) {
          const onSearchMovie = async () => {
            setLoading(true);
            try {
              const searchMovie = await getSearchMovies(queryMovie);
              setSearchFilms(searchMovie);
            } catch (error) {
              console.log(error);
            } finally {
              setLoading(false);
            }
          };
          onSearchMovie();
        }
    }, [queryMovie]);

    return (
        <main>
            <form onSubmit={handleSubmit}>
            <input
            // onChange={handelChange}
            type="text"
            placeholder="Search movie"
            name="query"
            />
            <button type="submit">Search</button>
            </form>
            {loading && <Loader />}
            {searchFilms && <SearchMovie films={searchFilms}/>}
            {searchFilms &&
            searchFilms.length === 0 &&
            (queryMovie ? (
              <p>Nothing found!</p>
            ) : (
              <p>Please, enter request !</p>
            ))}
           
        </main>
        );
};
export default Moviepage;