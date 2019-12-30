# Rhythm Sequencer LM-808 (Lisa Mae 808)

This is the Lisa Mae version of the Splice SM-808 Practice Exercise. This project uses React for the web UI and ES6 JavaScript for the business logic. This was the most enjoyable take-home code project I've done so thank you for that.

## Features Included

* realtime output of beats to console, web UI visual interface, and system audio
* ability to configure new songs in code (by instantiating `Song` objects)
* ability to pass callback to allow any action to be triggered when an instrument plays a given beat
* unit tests for core song logic and component snapshot test for Pad component
* Roland TR-808 inspired color scheme

## Features Omitted

* ability to configure songs in the web UI
* ability to easily add more instruments (right now they are in 3 variables instead of an array)
* realtime audio output has some problems when BPM is set too high
* integration test

## Installation

1. Unzip the `lm808.zip` archive
1. Change to `drum-machine` dir
1. Run `yarn install` to install node modules

## Running

1. Run `yarn start` in a terminal window in the `drum-machine` directory
1. Navigate to [localhost:3000](http://localhost:3000) in a browser
1. Hit "Play" to see it go!

## Testing

1. Run `yarn test` in a terminal window in the `drum-machine` directory

## Creating a Song

Right now there is no easy UI for creating your own song, but it can be done in the code.

* `Song` objects are comprised of an arbitrary name, a number of beats (quarter notes) per minute, and a list of `Sequences`
* `Sequence` objects are comprised of an `Instrument` and a beat `Pattern`
* `Pattern` objects are a list of booleans describing whether to play on a given step. A step is the granularity of the song, and determined by the `stepsPerBeat` variable of a `Song` object (not currently parameterizable, set at 2, so each step is an eighth note). For now `Patterns` should be a list of eight booleans.
* `Instrument` objects are an arbitrary name and an audio sample, which is played when the instrument "plays". Right now the instruments are hardcoded as `'HiHat'`, `'Snare'`, and `'Kick'` and parts of the program would have to be refactored for instruments aside from these to fully work.

Once constructed, a `Song` object can be played by calling `.play()`.