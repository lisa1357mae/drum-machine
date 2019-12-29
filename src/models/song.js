class Song {
    constructor(name, bpm, seqs) {
        this.name = name;
        this.seqs = seqs;
        this.stepNum = 0;
        this.playing = false;
        this.stepsPerBeat = 2;
        this.setBpm(bpm);
        this.play = this.play.bind(this);
    }

    setBpm = (bpm) => {
        this.bpm = bpm;
        this.secondsPerStep = 60 / (bpm * this.stepsPerBeat);
    }

    async play() {
        this.playing = true;
        while (this.playing) {
            console.log('beat: %d', this.stepNum % (this.stepsPerBeat * 4) + 1);
            for (let seq of this.seqs) {
                seq.maybePlayOnStep(this.stepNum);
            }
            await new Promise(r => setTimeout(r, this.secondsPerStep * 1000));
            this.stepNum++;
        }
    }

    stop = () => {
        this.playing = false;
        this.stepNum = 0;
    }
};

export default Song;