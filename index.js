function theBeatlesPlay (arrayMusicians, arrayIntruments) {
  var arrayString = [];
  for (var count = 0; count < arrayMusicians.length; count++) {
    array[count] = `"${arrayMusicians[count]} plays ${arrayInstruments[count]}"`;
    return arrayString;
  }
}

function johnLennonFacts (lennonFacts) {
  var factsCount = 0;
  while (factsCount < lennonFacts.length) {
    lennonFacts[factsCount] = `${lennonFacts[factsCount]}\!\!\!`;
    factsCount++;
    return lennonFacts;
  }
}

function iLoveTheBeatles (number) {
  var arrayFanPhrases = [];
  var phraseCount = 0;
  do {
    arrayFanPhrases[phraseCount] = "I love the Beatles\!";
    phraseCount++;
  } while (phraseCount <= number);
  return arrayFanPhrases;
}
