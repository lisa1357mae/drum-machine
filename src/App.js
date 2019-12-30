import React, { Component } from 'react';
import './App.css';
import Pattern from './models/pattern';
import Sequence from './models/sequence';
import Song from './models/song';
import Instrument from './models/instrument';
import Pad from './components/Pad';

class App extends Component {
  constructor(props) {
    super(props);
    const hhPattern = new Pattern([true, true, true, true, true, true, true, true]);
    const sdPattern = new Pattern([false, false, true, false, false, false, true, false]);
    const kPattern = new Pattern([true, false, true, false, true, false, true, false]);

    this.state = {
      hhPattern,
      sdPattern,
      kPattern,
      hhLights: [false, false,false, false,false, false,false, false, ],
      sdLights: [false, false,false, false,false, false,false, false, ],
      kLights: [false, false,false, false,false, false,false, false, ],
      song: new Song('4 on the floor', 112, [
        new Sequence(new Instrument('HiHat', 'http://www.denhaku.com/r_box/tr707/closed.wav'), hhPattern, this.setPatternBeat),
        new Sequence(new Instrument('Kick', 'https://www.myinstants.com/media/sounds/bass-drum.mp3'), kPattern, this.setPatternBeat),
        new Sequence(new Instrument('Snare', 'https://www.myinstants.com/media/sounds/snare.mp3'), sdPattern, this.setPatternBeat),
      ]),
    };
  }

  setLight = (instrName, stepNum) => {
    const stepNumInSeq = stepNum % 8;
    let lights;
    switch (instrName) {
      case 'HiHat':
        lights = [false, false,false, false,false, false,false, false,];
        lights[stepNumInSeq] = true;
        this.setState({hhLights: lights});
        break;
      case 'Snare':
        lights = [false, false,false, false,false, false,false, false,];
        lights[stepNumInSeq] = true;
        this.setState({sdLights: lights});
        break;
      case 'Kick':
        console.log(this.state.kPads);
        lights = [false, false,false, false,false, false,false, false,];
        lights[stepNumInSeq] = true;
        this.setState({kLights: lights});
        break;
        default:
          console.log('default instrument');
    }
  }

  setPatternBeat = (instrName, stepNum) => {
    console.log('beat cb, name: %s, step: %d', instrName, stepNum);
    this.setLight(instrName, stepNum);
  }

  render = () => {
    const hhPads = [];
    const sdPads = [];
    const kPads = [];
    for (let i=0; i<8; i++) {
      hhPads.push(<Pad name='HiHat' lightOn={this.state.hhLights[i]} key={i} />);
      sdPads.push(<Pad name='Snare' lightOn={this.state.sdLights[i]} key={i} />);
      kPads.push(<Pad name='Kick' lightOn={this.state.kLights[i]} key={i} />);
    }
    return (
      <div className="App">
        <div className="App-header">
          <h2>Rhythm Sequencer LM-808</h2>  
        </div>
        <div className="grid-container">
          {hhPads}
          {sdPads}
          {kPads}
        </div>
        <div className="button-container">
          <button type="button" className="child" id="slide_start_button" onClick={this.state.song.play}>play</button>
          <button type="button" className="child" id="slide_stop_button"  onClick={this.state.song.stop}>stop</button>
        </div>
        </div>
    );
  }
}

export default App;
