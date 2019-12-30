import React, { Component } from 'react';

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
        default:
          console.error('wrong instrument');
      };
      return (
        <div><div className={this.props.lightOn ? lightOnStyle : lightOffStyle}><p className='pad'>{name}</p></div></div>
      );
    }
}

export default Pad;