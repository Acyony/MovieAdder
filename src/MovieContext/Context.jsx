import React, { useState } from "react";

// -----=^.^-=----- 1 - Step creat the Context and store it in an const;
export const myContext = React.createContext();

// -----=^.^-=----- 2 - Step create the providers

export default function MyProviderContext({ children }) {
  // -----=^.^-=----- In the mounting stage
  if (!localStorage.getItem("movies")) {
    localStorage.setItem(
      "movies",
      JSON.stringify([
        {
          movieName: "Harry Potter",
          moviePrice: "10",
        },
      ])
    );
  }

  const initialState = JSON.parse(localStorage.getItem("movies"));
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

  const handleClear = () => {
    localStorage.clear();
    setMovies([]);
  };

  const clearInputOnFocus = (e) => {
    e.target.value = ""
  }

  function submit(e) {
    e.preventDefault();
    if (movie.movieName === "" || movie.moviePrice === "") {
      setErrorMessage((prevState) => ({
        value: "Empty field. Please check it again!",
      }));
      return;
    }

    if (movies.find((m) => m.movieName === movie.movieName)) {
      setErrorMessage((prevState) => ({
        value: "This movie is already add!",
      }));
      return;
    }

    setMovies([...movies, movie]);
    localStorage.setItem("movies", JSON.stringify([...movies, movie]));
    //  -----=^.^-=----- reset the input value
    setMovie({ movieName: "", moviePrice: "" });
  }

  return (
    <>
      <myContext.Provider
        value={{ movies, movie, changeHandlerMovie, submit, handleClear, clearInputOnFocus }}
      >
        {children}
        <p style={{ color: "red" }}>{errorMessage.value}</p>
      </myContext.Provider>
    </>
  );
}
