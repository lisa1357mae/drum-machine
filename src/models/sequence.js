class Sequence {
    constructor(instrument, pattern, beatCallback) {
        this.instrument = instrument;
        this.pattern = pattern;
        this.beatCallback = typeof beatCallback === 'function' ? beatCallback : () => {}; 
    }

    maybePlayOnStep = (stepNum) => {
        if (this.pattern.playOnStep(stepNum)) {
            this.instrument.play();
            this.beatCallback(this.instrument.name, stepNum);
        }
    }
};

export default Sequence;