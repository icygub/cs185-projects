function palindrome() {
  var original = document.getElementById("textbox").value;
  var cleanString = removeUnnecessaryCharacters(original);
  var list = countOccurrencesOfEachLetterAKACountCrap(cleanString);
  var reversed = reverseString(cleanString)

  printOccurrences(list);
  if(cleanString.toLowerCase() === reversed.toLowerCase()) {
    document.getElementById("button").insertAdjacentHTML('afterend', original + " (" + cleanString + ") is a palindrome!");
    //alert(original + " (" + cleanString + ") is a palindrome!");
  } else {
    document.getElementById("button").insertAdjacentHTML('afterend', original + " (" + cleanString + ") is NOT a palindrome!");
    //alert(original + " (" + cleanString + ") is NOT a palindrome!");
  }
  document.getElementById("button").insertAdjacentHTML('afterend', "<br><br>");
}
function removeUnnecessaryCharacters(input) {
  var input = input.replace(/\s/g,''); //removes spaces
  var input = input.replace(/,/g,''); //removes comma
  var input = input.replace(/’/g,''); //removes apostrophe
  var input = input.replace(/'/g,''); //removes apostrophe
  return input;
}

function reverseString(input) {
  var reversedString = "";
  for(i = input.length - 1; i >= 0; i--) {
    reversedString = reversedString + input[i]
  }
  return reversedString;
}

function countOccurrencesOfEachLetterAKACountCrap(input) {
  var list = {};
  for (var i=0; i<input.length;i++) {
      var char = input.charAt(i);
      if (list[char]) { //3
         list[char]++;
      } else { //4
         list[char] = 1;
      }
  }
  return list;
}

function printOccurrences(list) {
  var listString = "";
  for(var key in list) {
    var value = list[key];
    listString = key + "=" + value.toString() + " ";
    document.getElementById("button").insertAdjacentHTML('afterend', listString);
  }
  document.getElementById("button").insertAdjacentHTML('afterend', "<br>");


}
