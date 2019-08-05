import React from 'react';
// import kimscrying from './images/';
import kims from "./kims.json";
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import CardGroup from './components/CardGroup';
import Wrapper from './components/Wrapper/Wrapper';


class App extends React.Component {
  state = {
    //scoreing  
    currentScore: 0,
    topScore: 0,

    //images + id
    kims,
    //array of shuffled images
    clickedKims: []
  };

  // // HANDLES SCORING
  // handleIncrement = () => {
  //   this.setState({ currentScore: this.state.currentScore + 1 });
  // };
  // handleDecrement = () => {
  //   this.setState({ currentScore: this.state.currentScore - 1 });
  // };

  // SAVES TOP SCORE
  updateTopScore = () => {

  }

  // RANDOMIZES IMAGE PLACEMENT
  shuffleImages = id => {
    let clickedKims = this.state.clickedKims;
    if (clickedKims.includes(id)) {
      this.setState({ clickedKims: [], currentScore: 0 })
      return;
    } else {
      clickedKims.push(id)

      if (clickedKims.length === 10) {
        this.setState({ currentScore: 10 })
        return
      }


      this.setState({ kims, clickedKims, currentScore: clickedKims.length })

      for (let i = kims.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        [kims[i], kims[j]] = [kims[j], kims[i]]
      }
    }
  }


  render() {
    const state = this.state;
    return (
      <div className="App">
        <Navbar
          currentScore={state.currentScore}
          topScore={state.topScore} />
        <Jumbotron />
        <Wrapper>
          {this.state.kims.map(kim => (
            <CardGroup
              shuffleImages={this.shuffleImages}
              id={kim.id}
              key={kim.id}
              image={kim.image}
            />))}
        </Wrapper>
      </div>
    )
  }

}

export default App;