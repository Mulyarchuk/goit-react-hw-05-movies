import { Route, Routes, Navigate } from "react-router-dom";
import { Header, Link, Container } from "./App.styled";
import { lazy, Suspense } from "react";

const Homepage = lazy (()=>import(`../pages/Homepage`));
const Moviepage = lazy (()=>import(`../pages/Moviepage`));
const MovieDetailspage = lazy (()=>import(`../pages/MovieDetailspage`));
const Cast = lazy (()=>import(`../components/Cast/Cast`));
const Review = lazy (()=>import(`../components/Review/Review`));

export const  App = () => {
  return (
    <Container>
    <Header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
    </Header>
    <Suspense fallback="loading">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<Moviepage />} />
      <Route path="/movies/:movieId" element={<MovieDetailspage />} >
      <Route path="/movies/:movieId/cast" element={<Cast />} />
      <Route path="/movies/:movieId/reviews" element={<Review/>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Suspense> 
    </Container>
  )
};
