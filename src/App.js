import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pattern from './models/pattern';
import Sequence from './models/sequence';
import Song from './models/song';
import Instrument from './models/instrument';

class Pad extends Component {

  render() {
    const { name } = this.props;
    let lightOnStyle, lightOffStyle;
    switch (name) {
      case 'HiHat':
        lightOnStyle = 'hh-circle-active';
        lightOffStyle = 'hh-circle';
        break;
      case 'Snare':
        lightOnStyle = 'sd-circle-active';
        lightOffStyle = 'sd-circle';
        break;
      case 'Kick':
        lightOnStyle = 'k-circle-active';
        lightOffStyle = 'k-circle';
        break;
    };
    return (
      <div><div class={this.props.lightOn ? lightOnStyle : lightOffStyle}><p className='pad'>{name}</p></div></div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    const hhPattern = new Pattern([false, true, false, true, false, true, false, true]);
    const sdPattern = new Pattern([false, false, false, true, false, false, false, true]);
    const kPattern = new Pattern([true, true, true, true, true, true, true, true]);

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
   // const prevStepNumInSeq = stepNumInSeq === 0 ? 7 : stepNumInSeq - 1;

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
      hhPads.push(<Pad name='HiHat' lightOn={this.state.hhLights[i]} />);
      sdPads.push(<Pad name='Snare' lightOn={this.state.sdLights[i]} />);
      kPads.push(<Pad name='Kick' lightOn={this.state.kLights[i]} />);
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Rhythm Composer LM-808</h2>  
        </div>
        <div className="grid-container">
          {hhPads}
          {sdPads}
          {kPads}
        </div>
        <div className="btn-container">
        <div className="btn-group">
        <p><button type='button' className="play-button" onClick={this.state.song.play}>play</button></p>
        <p><button type='button' className="stop-button" onClick={this.state.song.stop}>stop</button></p>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
