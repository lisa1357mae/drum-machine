import Song from '../models/song';

test('setBpm resets seconds per step', () => {
    const s1 = new Song('fake song', 120, []);
    expect(s1.secondsPerStep).toEqual(0.5 / s1.stepsPerBeat);  // sec between beat
    s1.setBpm(60);
    expect(s1.secondsPerStep).toEqual(1.0 / s1.stepsPerBeat);
})