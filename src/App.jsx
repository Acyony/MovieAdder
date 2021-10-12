import './App.css';
// ----=^.^=----- Movie exercise
import MyProvider from './CountContext/Context.jsx';
import Counter from './CountContext/Counter.jsx';

import MyProviderContext from './MovieContext/Context.jsx';
import MovieAdder from "./MovieContext/MovieAdder.jsx"
import styled from 'styled-components';

// import MyProvider from "./CountReducer/ReducerContext.jsx";
// import Count from "./CountReducer/Count.jsx"

const Container = styled.div`
margin: 4rem 8rem;
`

const MovieWrap = styled.div`
`
const H1 = styled.h1`
text-align:center;
color:#FFAEBC;
`

function App() {
  return (
    <>
      {/* <MyProvider>
        <Counter/>
      </MyProvider> */}

     <Container>
        <MyProviderContext>
        <H1>Welcome to the Kino Stars!</H1>

          <MovieWrap>
            <MovieAdder></MovieAdder>
          </MovieWrap>
        </MyProviderContext>
      </Container> 


    {/*   <MyProvider >
      <Count />
    </MyProvider> */}
    </>
  );
}

export default App;
