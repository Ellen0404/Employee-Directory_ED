import React from 'react';
// import ReactDom from "react-dom";
// import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="container">

      <Wrapper>
        <h2>Employee Directory </h2>
        <Search icon={"search"} />
      </Wrapper>

      <span className="row">
        <h2>Search for department</h2>
        <Search icon={"users"} />
      </span>
      <br></br>


      < Main />
    </div>

  );
}

export default App;
