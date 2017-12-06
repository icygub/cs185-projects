(function() {

  //Selecting node
  var myNode = document.querySelector(".container");
  var otherImage;
  myNode.addEventListener("mouseover", function(e) {

    var imageSrc = e.target.src;
    var myImage = document.createElement("img");
    myImage.id = "newImage";
    otherImage = myImage;
    myNode.addEventListener("mousemove", function(e) {

      if (e.target.tagName == "IMG") {
        e = e || window.event;
        myImage.src = imageSrc;

        myImage.addEventListener("load", function() {
          var myOverlay = document.createElement("div");
          myOverlay.id = "overlay";
          myOverlay.class = "image-display";
          myOverlay.style.position = "absolute";
          myOverlay.style.top = ((e.pageY || e.clientY) + 15) + "px";
          myOverlay.style.left = ((e.pageX || e.clientX) + 15) + "px";
          myOverlay.appendChild(myImage);
          document.body.appendChild(myOverlay);
        }, false);
      }

    }, false);
  }, false);

  myNode.addEventListener("mouseout", function(e) {
    otherImage.style.display = "none";
  }, false);
})();
