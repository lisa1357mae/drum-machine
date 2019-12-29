import Pattern from '../models/pattern';

test('playOnStep plays when it should', () => {
    const pattern1 = new Pattern([false, true, true]);
    expect(pattern1.playOnStep(1)).toBeTruthy();
    expect(pattern1.playOnStep(3)).toBeFalsy();
});