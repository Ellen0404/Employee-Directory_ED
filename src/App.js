import React from 'react';
// import ReactDom from "react-dom";
// import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="container">

      <h2>Hello</h2>
      <Wrapper>
        <Search />
      </Wrapper>
      <br></br>

      < Main />
    </div>

  );
}

export default App;
