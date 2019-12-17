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
    <div>
      <div className="keyboard-line">
        <button onClick={() => this.props.addLetter("A")}>A</button>
        <button onClick={this.props.addLetter.bind(this, "B")}>B</button>
        <button onClick={this.props.addLetter.bind(this, "C")}>C</button>
        <button onClick={this.props.addLetter.bind(this, "D")}>D</button>
        <button onClick={this.props.addLetter.bind(this, "E")}>E</button>
        <button onClick={this.props.addLetter.bind(this, "F")}>F</button>
        <button onClick={this.props.addLetter.bind(this, "G")}>G</button>
        <button onClick={this.props.addLetter.bind(this, "H")}>H</button>
        <button onClick={this.props.addLetter.bind(this, "I")}>I</button>
        <button onClick={this.props.addLetter.bind(this, "K")}>K</button>
        <button onClick={this.props.addLetter.bind(this, "L")}>L</button>
        <button onClick={this.props.addLetter.bind(this, "M")}>M</button>
        <button onClick={this.props.addLetter.bind(this, "N")}>N</button>
        <button onClick={this.props.addLetter.bind(this, "O")}>O</button>
      </div>
      <div>
        <button onClick={this.props.addLetter.bind(this, "P")}>P</button>
        <button onClick={this.props.addLetter.bind(this, "Q")}>Q</button>
        <button onClick={this.props.addLetter.bind(this, "R")}>R</button>
        <button onClick={this.props.addLetter.bind(this, "S")}>S</button>
        <button onClick={this.props.addLetter.bind(this, "T")}>T</button>
        <button onClick={this.props.addLetter.bind(this, "U")}>U</button>
        <button onClick={this.props.addLetter.bind(this, "V")}>V</button>
        <button onClick={this.props.addLetter.bind(this, "W")}>W</button>
        <button onClick={this.props.addLetter.bind(this, "X")}>X</button>
        <button onClick={this.props.addLetter.bind(this, "Y")}>Y</button>
        <button onClick={this.props.addLetter.bind(this, "Z")}>Z</button>
      </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App
