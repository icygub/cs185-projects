document.getElementById('searchBox').addEventListener('keydown', function (event) {
  // A keyCode of 13 means that the ENTER key was pressed.
  // You don't need to do anything until ENTER is pressed.
  if (event.which === 13 || event.keyCode === 13) {

    var searchText = this.value;
    // let node = document.getElementById("bullet");
    // alert(node.id);

    //let children = node.childNodes;

    //children[0].parentNode.style.backgroundColor = "red";

    // let a = 0;
    // function search(node) {
    //   if(node.nodeType === Node.TEXT_NODE) {
    //     node.parentNode.style.backgroundColor = "yellow";
    //     alert(node.id);
    //     //a = a + 1;
    //     return;
    //   }
    //   else if(node.hasChildNodes()) {
    //     let children = node.childNodes;
    //     let i;
    //     for(i = 0; i < children.length; i++) {
    //       search(children[i]);
    //     }
    //   }
    // }
    //
    // search(document.getElementById("h2-pasta-caprese"));
    var i;
    var nodes = document.getElementsByTagName("*");
    alert(nodes.length);
    for (i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if(node.hasChildNodes()) {
        if(node.childNodes.length === 1) {
          if(node.childNodes[0].nodeType === Node.TEXT_NODE) {
            if(node.innerHTML)
          }
        }
      }
    }


  }
});
