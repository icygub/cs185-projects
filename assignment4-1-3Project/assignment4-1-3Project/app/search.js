document.getElementById('searchBox').addEventListener('keydown', function (event) {
  // A keyCode of 13 means that the ENTER key was pressed.
  // You don't need to do anything until ENTER is pressed.
  if (event.which === 13 || event.keyCode === 13) {

    var searchText = this.value;

    var i;
    var nodes = document.getElementsByTagName("*");
    var matchingSearches = 0;
    for (i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if(node.hasChildNodes()) {
        if(node.childNodes.length === 1) {
          if(node.childNodes[0].nodeType === Node.TEXT_NODE) {
            if(searchText == "") {
              node.style.display = "block";
              node.style.backgroundColor = "white";
            }
            else if(node.innerHTML.toUpperCase() == searchText.toUpperCase()) {
              matchingSearches++;
              node.style.backgroundColor = "yellow";
              node.style.display = "block";
            }
            else {
              node.style.backgroundColor = "white";
              node.style.display = "none";
            }
          }
        }
      }
    }

    var x;
    if(matchingSearches == 0 && searchText != "") {
      for (x = 0; x < nodes.length; x++) {
        var node = nodes[x];
        if(node.hasChildNodes()) {
          if(node.childNodes.length === 1) {
            if(node.childNodes[0].nodeType === Node.TEXT_NODE) {
              node.style.backgroundColor = "white";
              node.style.display = "none";
            }
          }
        }
      }
    }

    matchingSearches = 0; //reset

  }
});
