class Pattern {
    constructor(steps) {
        this.steps = steps;
    }

    playOnStep = (stepNum) => {
        const stepNumInSeq = stepNum % this.steps.length;
        return this.steps[stepNumInSeq];
    }
};

export default Pattern;