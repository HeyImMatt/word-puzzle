$(document).ready(function () {
  $('form#user-sentence').submit(function (event) {
    event.preventDefault();
    const userSentence = $('#sentenceInput').val();
    console.log(userSentence);
    const result = puzzle(userSentence);
    console.log(result)
  });
});

function puzzle(sentence) {
  const puzzleSentence = sentence.split('');
  console.log('Starting loop')
  for (let index = 0; index <= sentence.length - 1; index++) {
    let letter = puzzleSentence[index];
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      puzzleSentence.splice(index, 1, '-')
      console.log(puzzleSentence)
    } else if (letter = ' ') {
      puzzleSentence.splice(index, 1, ' ')
      console.log(puzzleSentence)
    } else {
      puzzleSentence.splice(index, 1, letter)
      console.log(puzzleSentence)
    }
  }
  console.log('End of the loop')
  return puzzleSentence.join(' ');
}

//"this is a sentence"
//"th-s -s - s-nt-nc-"