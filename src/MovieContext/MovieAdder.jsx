import React, { useContext } from 'react';
import {myContext} from "./Context.jsx";

import styled from 'styled-components';

const MovieWrap = styled.div`
border: 1px solid grey;
margin-bottom: 2rem;
padding: 0 2rem;
background-color: #FBE7C6;
`

export default function MovieAdder() {
    const { movies, changeHandlerMovie, submit } = useContext(myContext)

    return (
        <div>
        {movies.map((m) => {
            return(
                <>
                <MovieWrap>
                <h2>{m.movieName}</h2>
                <p>{m.moviePrice} Euro</p>
                </MovieWrap>
                </>
                )
        })}
       
        <p>Please fill the movie and the price.</p>

            <input name="movieName"
                type="text"
                placeholder="Type the movie name"
                onChange={changeHandlerMovie}
            ></input>
            <input name="moviePrice"
                type="text"
                placeholder="Type the movie price"
                onChange={changeHandlerMovie}
            ></input>
            <button type="submit" onClick={submit}>Submit</button>
        </div>
    )
}
