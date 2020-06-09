//UI Logic
$(document).ready(function () {
  $('form#user-sentence').submit(function (event) {
    event.preventDefault();
    const userSentence = $('#sentenceInput').val();
    if (userSentence) {
      const result = puzzle(userSentence);
      $('form#user-sentence').toggle();
      $('#puzzle-sentence').append(`<p>${result}</p>`)
      $('#puzzle-sentence').toggle();
    } else alert("Please enter a sentence")
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