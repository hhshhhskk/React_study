import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

const test = () => {
  fetch('localhost:4000/getNews/'+1, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
        },
    body: JSON.stringify({
        keyword : "김종국",
        page    : "1"
    })
}).than(()=>console.log("fetch run"))
}

class App extends Component {
  render() {
    return (
      <>
        <button onClick={test()}>test</button>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}
export default App;