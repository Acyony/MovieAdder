import React, { useContext } from 'react';
import { myContext } from "./Context.jsx";

import styled from 'styled-components';

const MovieWrap = styled.div`
border: 1px solid grey;
margin-bottom: 2rem;
padding: 0 2rem;
background-color: #FBE7C6;
`
const InputWrap = styled.div`
display: flex;
flex-direction: column;
width: 35vw;
`
const ButtonSubmit = styled.button `
margin-right: 2rem;
background-color: #B6E2D3;
border: none;
padding: 0.5rem;
`

const ButtonClear = styled.button `
background-color: #EF7C8E;
border: none;
padding: 0.5rem;
`
const Input = styled.input`
margin-bottom: 0.5rem;
padding: 0.5rem;
`

export default function MovieAdder() {
    const { movies, movie, changeHandlerMovie, submit, handleClear, clearInputOnFocus } = useContext(myContext)

    return (
        <div>
            {movies.map((m, index) => {
                return (
                    <>
                        <MovieWrap>
                            <h2 key={index + 1}>{m.movieName}</h2>
                            <p key={index + 1}>{m.moviePrice} Euro</p>
                        </MovieWrap>
                    </>
                )
            })}

            <p>Please fill the movie and the price.</p>
            <InputWrap>
                <Input name="movieName"
                    type="text"
                    placeholder="Type the movie name"
                    value={movie.movieName}
                    onChange={changeHandlerMovie}
                    onFocus = {clearInputOnFocus} 
                ></Input>
                <Input name="moviePrice"
                    type="text"
                    placeholder="Type the movie price"
                    value={movie.moviePrice}
                    onChange={changeHandlerMovie}
                    onFocus = {clearInputOnFocus} 

                ></Input>
            </InputWrap>
            <ButtonSubmit type="submit" onClick={submit}>Submit</ButtonSubmit>
            <ButtonClear type="submit" onClick={handleClear}>Clear Movies</ButtonClear>

        </div>
    )
}
