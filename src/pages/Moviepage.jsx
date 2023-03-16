import { useState,useEffect } from "react";
import { getSearchMovies } from "Api";
import { Loader } from "components/Loader/Loader";
import { useSearchParams } from 'react-router-dom';
import SearchMovie from "components/SearchMovie/SearchMovie";
import { Form, Input, Button } from "./Moviepage.styled"

const Moviepage = () =>{
    const [query,setQuery] = useState(``);
    const [searchFilms,setSearchFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryMovie = searchParams.get('query') ?? '';

    const handelChange = e => {
        const { value } = e.target;
        setQuery(value);
      };
      const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({ query });
        setQuery('');
      };
 


     useEffect(() => {
        if (queryMovie) {
          const onSearchMovie = async () => {
            setLoading(true);
            try {
              const search = await getSearchMovies(queryMovie);
              setSearchFilms(search);
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
            <Form onSubmit={handleSubmit}>
            <Input
            onChange={handelChange}
            type="text"
            placeholder="Search movie"
            name="query"
            value={query}
            />
            <Button type="submit">Search</Button>
            </Form>
            {loading && <Loader />}
            {searchFilms && <SearchMovie films={searchFilms}/>}
            {searchFilms &&
            searchFilms.length === 0 &&
            (queryMovie ? (
              <p>Nothing found!</p>
            ) : (
              <p>Please, enter your request !</p>
            ))}
           
        </main>
        );
};
export default Moviepage;