$(function() {
  var currentChar = "X";
  $("#winnertext").html("&nbsp;");
  $("#winnertext").css("background-color", "orange");
  $(".btn").click(function() {
    //change button color
    var newSquare = !$(this).hasClass("XClicked") && !$(this).hasClass("OClicked"); //boolean
    if(newSquare) {
      if(currentChar == "X") {
        $(this).addClass("XClicked").html("X");
      }
      else {
        $(this).addClass("OClicked").html("O");
      }
      $("#textarea").append($(this).attr("id") + "&#xA;");
      $('#textarea').scrollTop($('textarea')[0].scrollHeight);
    }

    if(checkForWinner(currentChar)) {

      $("#winnertext").html(currentChar + " WON!!!! Press the button to start over.");
      $("#winnertext").css("background-color", "purple");

    }
    else if(newSquare){
      (currentChar == "X") ? currentChar="O" : currentChar="X";
      if(currentChar=="O") {
        $("#winnertext").css("background-color", "purple");
      } else {
        $("#winnertext").css("background-color", "orange");
      }
      //$("#winnertext").css("background-color", "purple");
      //alert(($("#winnertext").css("background-color")=="orange"));
      //($("#winnertext").css("background-color")=="orange") ? $("#winnertext").css("background-color", "purple") : $("#winnertext").css("background-color", "orange");
    }
    //alert(currentChar);

  });

  $("#startover").click(function() {
    location.reload();
  });
});

function checkForWinner(c) {
  if(checkHorizontals2D(c) || checkVerticals2D(c)) {
    return true;
  }else {
    return false;
  }
}

function checkHorizontals2D(c) {
  if( ($("#0-0-0").html()==c && $("#0-1-0").html()==c && $("#0-2-0").html()==c && $("#0-3-0").html()==c) ||
      ($("#0-0-1").html()==c && $("#0-1-1").html()==c && $("#0-2-1").html()==c && $("#0-3-1").html()==c) ||
      ($("#0-0-2").html()==c && $("#0-1-2").html()==c && $("#0-2-2").html()==c && $("#0-3-2").html()==c) ||
      ($("#0-0-3").html()==c && $("#0-1-3").html()==c && $("#0-2-3").html()==c && $("#0-3-3").html()==c) ||

      ($("#1-0-0").html()==c && $("#1-1-0").html()==c && $("#1-2-0").html()==c && $("#1-3-0").html()==c) ||
      ($("#1-0-1").html()==c && $("#1-1-1").html()==c && $("#1-2-1").html()==c && $("#1-3-1").html()==c) ||
      ($("#1-0-2").html()==c && $("#1-1-2").html()==c && $("#1-2-2").html()==c && $("#1-3-2").html()==c) ||
      ($("#1-0-3").html()==c && $("#1-1-3").html()==c && $("#1-2-3").html()==c && $("#1-3-3").html()==c) ||

      ($("#2-0-0").html()==c && $("#2-1-0").html()==c && $("#2-2-0").html()==c && $("#2-3-0").html()==c) ||
      ($("#2-0-1").html()==c && $("#2-1-1").html()==c && $("#2-2-1").html()==c && $("#2-3-1").html()==c) ||
      ($("#2-0-2").html()==c && $("#2-1-2").html()==c && $("#2-2-2").html()==c && $("#2-3-2").html()==c) ||
      ($("#2-0-3").html()==c && $("#2-1-3").html()==c && $("#2-2-3").html()==c && $("#2-3-3").html()==c) ||

      ($("#3-0-0").html()==c && $("#3-1-0").html()==c && $("#3-2-0").html()==c && $("#3-3-0").html()==c) ||
      ($("#3-0-1").html()==c && $("#3-1-1").html()==c && $("#3-2-1").html()==c && $("#3-3-1").html()==c) ||
      ($("#3-0-2").html()==c && $("#3-1-2").html()==c && $("#3-2-2").html()==c && $("#3-3-2").html()==c) ||
      ($("#3-0-3").html()==c && $("#3-1-3").html()==c && $("#3-2-3").html()==c && $("#3-3-3").html()==c) ) {
        return true;
  }else {
    return false;
  }
}

function checkVerticals2D(c) {
  if( ($("#0-0-0").html()==c && $("#0-0-1").html()==c && $("#0-0-2").html()==c && $("#0-0-3").html()==c) ||
      ($("#0-1-0").html()==c && $("#0-1-1").html()==c && $("#0-1-2").html()==c && $("#0-1-3").html()==c) ||
      ($("#0-2-0").html()==c && $("#0-2-1").html()==c && $("#0-2-2").html()==c && $("#0-2-3").html()==c) ||
      ($("#0-3-0").html()==c && $("#0-3-1").html()==c && $("#0-3-2").html()==c && $("#0-3-3").html()==c) ||

      ($("#1-0-0").html()==c && $("#1-0-1").html()==c && $("#1-0-2").html()==c && $("#1-0-3").html()==c) ||
      ($("#1-1-0").html()==c && $("#1-1-1").html()==c && $("#1-1-2").html()==c && $("#1-1-3").html()==c) ||
      ($("#1-2-0").html()==c && $("#1-2-1").html()==c && $("#1-2-2").html()==c && $("#1-2-3").html()==c) ||
      ($("#1-3-0").html()==c && $("#1-3-1").html()==c && $("#1-3-2").html()==c && $("#1-3-3").html()==c) ||

      ($("#2-0-0").html()==c && $("#2-0-1").html()==c && $("#2-0-2").html()==c && $("#2-0-3").html()==c) ||
      ($("#2-1-0").html()==c && $("#2-1-1").html()==c && $("#2-1-2").html()==c && $("#2-1-3").html()==c) ||
      ($("#2-2-0").html()==c && $("#2-2-1").html()==c && $("#2-2-2").html()==c && $("#2-2-3").html()==c) ||
      ($("#2-3-0").html()==c && $("#2-3-1").html()==c && $("#2-3-2").html()==c && $("#2-3-3").html()==c) ||

      ($("#3-0-0").html()==c && $("#3-0-1").html()==c && $("#3-0-2").html()==c && $("#3-0-3").html()==c) ||
      ($("#3-1-0").html()==c && $("#3-1-1").html()==c && $("#3-1-2").html()==c && $("#3-1-3").html()==c) ||
      ($("#3-2-0").html()==c && $("#3-2-1").html()==c && $("#3-2-2").html()==c && $("#3-2-3").html()==c) ||
      ($("#3-3-0").html()==c && $("#3-3-1").html()==c && $("#3-3-2").html()==c && $("#3-3-3").html()==c) ) {
        return true;
  }else {
        return false;
  }
}
