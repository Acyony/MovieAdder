import './App.css';
// import MyProvider from './CountContext/Context.jsx';
// import Counter from './CountContext/Counter.jsx';

import MyProviderContext from './MovieContext/Context.jsx';
import MovieAdder from "./MovieContext/MovieAdder.jsx"
import styled from 'styled-components';


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
    </>
  );
}

export default App;
