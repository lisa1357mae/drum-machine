import Sequence from '../models/sequence';
import Pattern from '../models/pattern';

test('maybePlayOnStep plays on proper steps', () => {
    const fakeInstr = {
        play: jest.fn(),
    };
    const pattern = new Pattern([false, false, true, false, true]);
    const fakeBeatCallback = jest.fn();
    const seq = new Sequence(fakeInstr, pattern, fakeBeatCallback);

    seq.maybePlayOnStep(0);
    expect(fakeInstr.play).toHaveBeenCalledTimes(0);
    expect(fakeBeatCallback).toHaveBeenCalledTimes(0);

    seq.maybePlayOnStep(2);
    seq.maybePlayOnStep(3);
    seq.maybePlayOnStep(4);
    seq.maybePlayOnStep(5);
    seq.maybePlayOnStep(6);
    seq.maybePlayOnStep(7);
    expect(fakeInstr.play).toHaveBeenCalledTimes(3);
    expect(fakeBeatCallback).toHaveBeenCalledTimes(3);
});