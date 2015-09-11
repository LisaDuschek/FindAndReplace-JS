function FindReplace(inputSentence, replaceWord, newWord) {
  var inputNew = inputSentence.replace(/\W+/g, ' ').toLowerCase().split(" ");
  var replaceWord = replaceWord.toLowerCase();
  var newWord = newWord.toLowerCase();

  inputNew.forEach(function(word){
      if (word === replaceWord ){
        inputNew[inputNew.indexOf(word)] = newWord;
  }
});


  return inputNew.join(" ").trim();
}


  $(document).ready(function()  {
  $("form#find_and_replace").submit(function(event) {
    var inputSentence = ($("input#inputSentence").val());
    var replaceWord = ($("input#replaceWord").val());
    var newWord = ($("input#newWord").val());
    var result = FindReplace(inputSentence, replaceWord, newWord);

    $(".find_and_replace").text(result);

    $("#result").show();
    event.preventDefault();

  });

});
