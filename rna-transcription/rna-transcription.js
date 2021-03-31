//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  if (dna === '') return '';
  const complements = {
    A: 'U',
    C: 'G',
    G: 'C',
    T: 'A',
  };
  if (dna.length > 1) {
    const rna_strand = dna.split('').map((item) => complements[item]);
    return rna_strand.join('');
  } else {
    return complements[dna];
  }
};
