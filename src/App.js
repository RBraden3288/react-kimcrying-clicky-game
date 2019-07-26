import React from 'react';
import kimscrying from './images';
import kims from "./kims.json";
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import CardGroup from './components/CardGroup';
import Wrapper from './components/Wrapper/Wrapper';


class App extends React.Component {
    state = {
        //scoreing  
        currentScore : 0,
        topScore : 0,

        //images + id
        kims,
        //array of shuffled images

    };

    // HANDLES SCORING
    handleIncrement = () => {
        this.setState({ currentScore: this.state.currentScore + 1 });
      };
    handleDecrement = () => {
        this.setState({ currentScore: this.state.currentScore - 1 });
      };

    // SAVES TOP SCORE
    updateTopScore = () => {

    }

    // RANDOMIZES IMAGE PLACEMENT
    shuffleImages = () => {
      // separate images
      const kimArray = kims.slice();
      // holds kimscrying
      const shuffledArray = [];

      //

    }


    render() {
        const state = this.state;
        return (
          <div className="App">
            <Navbar 
              currentScore= {state.currentScore}
              topScore= {state.topScore}/>
            <Jumbotron />
            <Wrapper>
             {this.state.kims.map(kim =>(
               <CardGroup 
               id ={kim.id}
               image={kim.image}
             />))}
            </Wrapper>
          </div>
        )
    }
    
}

export default App;