describe('findReplace', function() {

  it("takes one word input  and outputs that word", function() {
   expect(findReplace("banana")).to.equal("banana");
  });


    it("takes two word input  and finds and outputs the word banana", function() {
     expect(findReplace("another banana")).to.equal("banana");
    });

    it("takes string input  and finds and replaces the word banana with apple", function() {
     expect(findReplace("another banana and many more")).to.equal("another apple and many more");
    });



});
