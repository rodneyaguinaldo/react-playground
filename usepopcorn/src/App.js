import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { KEY } from "./constants/global";
import { useMovies } from "./useMovies";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

  function handleCloseMovie() {
    setSelectedId(null);
  }

  return (
    <>
      <NavBar query={query} setQuery={setQuery} movies={movies} />
      <Main
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        error={error}
        isLoading={isLoading}
        movies={movies}
        // setMovies={setMovies}
        // tempMovieData={tempMovieData}
        // tempWatchedData={tempWatchedData}
      />
    </>
  );
}
