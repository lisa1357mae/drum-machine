class Instrument {
    constructor(name, src) {
        this.name = name;
        this.src = src;
        this.sample = new Audio(src);
    }

    play = () => {
        console.log(this.name);
        this.sample.play();
    }
};

export default Instrument;