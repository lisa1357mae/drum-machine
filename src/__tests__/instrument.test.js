import Instrument from '../models/instrument';

test('play() plays sample', () => {
    const instr = new Instrument('mock instrument', 'src');
    const mockPlay = jest.fn();
    instr.sample.play = mockPlay;
    instr.play();
    expect(mockPlay).toHaveBeenCalled();
});