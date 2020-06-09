//UI Logic
$(document).ready(function () {
  $('form#user-sentence').submit(function (event) {
    event.preventDefault();
    const userSentence = $('#sentenceInput').val();
    const result = puzzle(userSentence);
    console.log(result)
  });
});

//Biz Logic
function puzzle(sentence) {
  const puzzleSentence = sentence.split('');
  for (let index = 0; index <= sentence.length - 1; index++) {
    let letter = puzzleSentence[index].toLowerCase();
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      puzzleSentence.splice(index, 1, '-')
    } 
  }
  return puzzleSentence.join('');
}