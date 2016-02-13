function DnaTranscriber(){

  this.toRna = function(Dna){
    var Rna = "";
    for(var i = 0;i<Dna.length;i++)
    {
      if (Dna[i] === 'G')
        Rna += 'C';
      else if (Dna[i] === 'C')
        Rna += 'G';
      else if (Dna[i] === 'T')
        Rna += 'A';
      else if (Dna[i] === 'A')
        Rna += 'U';
    }

    return Rna;
  }
}
