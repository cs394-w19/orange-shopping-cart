import React, { Component } from 'react';

import Shelf from '../Shelf';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GithubCorner />
        <main>
          <p>Finley</p>
          <p>Christian </p>
          <p>Anna</p>
          <p>Bennett</p>
          <p>Arthur</p>
          <p>Elizabeth</p>
          <Shelf />
        </main>
        <FloatCart />
      </div>
    );
  }
}

export default App;
