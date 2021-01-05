import { alphabeticShift } from './alphabeticShift';

describe('Alphabetic Shift Test Cases', () => {
  it('returns a shifted string', () => {
    expect(alphabeticShift('Pseudopseudohypoparathyroidism')).toEqual(
      'Qtfvepqtfvepizqpqbsbuizspjejtn'
    );
    // expect(alphabeticShift('Zseudopseudohypoparathyroidism')).toEqual(
    //   'Atfvepqtfvepizqpqbsbuizspjejtn'
    // );
    expect(alphabeticShift('Floccinaucinihilipilification')).toEqual(
      'Gmpddjobvdjojijmjqjmjgjdbujpo'
    );

    expect(alphabeticShift('Floccinaucinihilipilification')).toEqual(
      'Gmpddjobvdjojijmjqjmjgjdbujpo'
    );

    expect(alphabeticShift('Antidisestablishmentarianism')).toEqual('Boujejtftubcmjtinfoubsjbojtn');

    expect(alphabeticShift('supercalifragilisticexpialidocious')).toEqual(
      'tvqfsdbmjgsbhjmjtujdfyqjbmjepdjpvt'
    );
  });
});
