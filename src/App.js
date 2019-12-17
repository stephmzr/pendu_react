import React, { Component} from "react";
import ReactDOM from "react-dom";
import './App.css';


    // Produit une représentation textuelle de l’état de la partie,
    // chaque lettre non découverte étant représentée par un _underscore_.
    // (CSS assurera de l’espacement entre les lettres pour mieux
    // visualiser le tout).
    function computeDisplay(phrase, usedLetters) {
      return phrase.replace(/\w/g,
        (letter) => (usedLetters.has(letter) ? letter+' ' : '_ ')
      )
    }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: "ARBRE",
      hidden: true
    };
  }

  methodInState = letter => {
    this.setState({
      phrase: letter
    });
  };
  
  render() {
      return (
      <div className="App">
        <header className="App-header">
        <div>
          <span>{this.state.phrase}</span>
            <Keyboard addLetter={this.methodInState.bind(this)} />
          </div>
        </header>
      </div>
    )
  }
}

class Keyboard extends Component {
  render() {
    return (
      <div className="keyboard-line">
        <button onClick={() => this.props.addLetter("A")}>A</button>
        <button onClick={this.props.addLetter.bind(this, "B")}>B</button>
        <button onClick={this.props.addLetter.bind(this, "C")}>C</button>
        <button onClick={this.props.addLetter.bind(this, "D")}>D</button>
        <button onClick={this.props.addLetter.bind(this, "E")}>E</button>
        <button onClick={this.props.addLetter.bind(this, "F")}>F</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App
