import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      computerWinCount: 0,
      playerWinCount: 0,
      message: "We should play a game"
    }
  }
  // Returns a random integer between min (included) and max (included)
  // Using Math.round() will give you a non-uniform distribution!
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  someOnePressedTheButton = (event) => {
    let humanGuess = event.target.innerText;

    // How we would do this if we had underscore library in our project
    //let computerGuess = _.sample(["Rock", "Paper", "Scissors"])

    let computerGuess = ["Rock", "Paper", "Scissors"][this.getRandomIntInclusive(0,2)]

    let whoWins = [
      ["Rock",     "Rock",     "tie"],
      ["Rock",     "Scissors", "computer"],
      ["Rock",     "Paper",    "player"],
      ["Paper",    "Scissors", "player"],
      ["Paper",    "Rock",     "computer"],
      ["Paper",    "Paper",    "tie"],
      ["Scissors", "Scissors", "tie"],
      ["Scissors", "Paper",    "computer"],
      ["Scissors", "Rock",     "player"]
    ].find( (outcome) => { return (outcome[0] === computerGuess && outcome[1] === humanGuess) })[2]

    if (whoWins === "player" )
    {
      this.setState({playerWinCount: this.state.playerWinCount + 1});
    }

    if (whoWins === "computer" )
    {
      this.setState({computerWinCount: this.state.computerWinCount + 1});
    }

    // Start counting in the *state* how many did the human win and how many did the computer win
    this.setState({message: 'human guessed ' + humanGuess + ' and computer guessed ' + computerGuess + ' and the outcome is ' + whoWins});
  }

  render() {
    return (
      <div>
        <h1>Ro Sham Bo!</h1>
        <div className="output">
          <p>{this.state.message}</p>
          <p>Computer Win Count: {this.state.computerWinCount}</p>
          <p>Player Win Count: {this.state.playerWinCount}</p>
        </div>
        <div className="input">
          <button onClick={this.someOnePressedTheButton} className="rock">Rock</button>
          <button onClick={this.someOnePressedTheButton} className="scissors">Scissors</button>
          <button onClick={this.someOnePressedTheButton} className="paper">Paper</button>
        </div>
      </div>
    );
  }
}

export default App;
