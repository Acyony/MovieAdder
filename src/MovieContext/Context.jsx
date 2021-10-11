import React, { useState } from "react";

// -----=^.^-=----- 1 - Step creat the Context and store it in an const;
export const myContext = React.createContext();

// -----=^.^-=----- 2 - Step create the providers

export default function MyProviderContext({ children }) {
  const initialState = [
    { movieName: "Harry Potter", moviePrice: "20" },
    { movieName: "Harry Potter2", moviePrice: "10" },
  ];
  const [movies, setMovies] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState({ value: "" });

  // -----=^.^-=----- To set one Movie to movies
  const [movie, setMovie] = useState({ movieName: "", moviePrice: "" });

  function changeHandlerMovie(e) {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    e.preventDefault();
    if (movie.movieName === "" || movie.moviePrice === "") {
      setErrorMessage((prevState) => ({
        value: "Empty field. Please check it again!",
      }));
    } else {
      setMovies([...movies, movie]);
    }
  }

  return (
    <>
      <myContext.Provider value={{ movies, changeHandlerMovie, submit }}>
        {children}
        <p style={{ color: "red" }}>{errorMessage.value}</p>
      </myContext.Provider>
    </>
  );
}
