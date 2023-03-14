import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Moviespage from "../pages/Moviepage";
import MovieDetailspage  from "../pages/MovieDetailspage";
import Cast from "./Cast/Cast";
import Review from "./Review/Review";
import { Header, Link, Container } from "./App.styled";

 
export const  App = () => {
  return (
    <Container>
    <Header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
    </Header>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<Moviespage />} />
      <Route path="/movies/:movieId" element={<MovieDetailspage />} >
      <Route path="/movies/:movieId/cast" element={<Cast />} />
      <Route path="/movies/:movieId/reviews" element={<Review/>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes> 
    </Container>
  )
};
