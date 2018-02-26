var DnaTranscriber = function () { };

DnaTranscriber.prototype.toRna = function (dna) {

  let dnaArray = dna.split('');
  let rna = '';

  for (i = 0; i < dnaArray.length; i++) {
    switch (dnaArray[i]) {
      case 'C':
        rna += 'G';
        break;
      case 'G':
        rna += 'C';
        break;
      case 'A':
        rna += 'U';
        break;
      case 'T':
        rna += 'A';
        break;
      default:
        throw new Error('Invalid input');
    }
  }

  return rna

};

module.exports = DnaTranscriber;
