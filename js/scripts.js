function FindReplace(input_sentence, replace_word, new_word) {
  var input_new = input_sentence.replace(/\W+/g, ' ').toLowerCase().split(" ");
  var replace_word = replace_word.toLowerCase();
  var new_word = new_word.toLowerCase();

  input_new.forEach(function(word){
      if (word === replace_word ){
        input_new[input_new.indexOf(word)] = new_word;

      }
});


  return input_new.join(" ").trim();


  }


  $(document).ready(function()  {
  $("form#find_and_replace").submit(function(event) {
    var input_sentence = ($("input#input_sentence").val());
    var replace_word = ($("input#replace_word").val());
    var new_word = ($("input#new_word").val());
    var result = FindReplace(input_sentence, replace_word, new_word);

    $(".find_and_replace").text(result);

    $("#result").show();
    event.preventDefault();

  });

});
