var words= [
     "apple",
     "banana", 
     "orange", 
     "grape", 
     "kiwi", 
     "strawberry", 
     "pineapple",
 ];

 var currentWordIndex = 0;
 var scrambledWord = "";
 var timer;


 function displayWord() {
    $("#word").text(scrambledWord);
 }
 function scrambledWord(word){
    return word
    .split('')
    .sort(function(){
        return 0.5 - Math.random();
    })
    .join("");
 }