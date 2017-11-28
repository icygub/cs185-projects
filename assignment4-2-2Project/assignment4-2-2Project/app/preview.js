(function() {

  //Selecting node
  var myNode = document.querySelector(".container");
  var otherImage;
  //var myImage;
  myNode.addEventListener("mouseover", function(e) {
    // var myOverlay = document.createElement("div");
    // myOverlay.id = "overlay";
    // myOverlay.class = "image-display";

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


  // myNode.addEventListener("mouseover", function(e) {
  //
  //   if(e.target.tagName == "IMG") {
  //     var myOverlay = document.createElement("div");
  //     myOverlay.id = "overlay";
  //     document.body.appendChild(myOverlay);
  //
  //     //overlay styles
  //     myOverlay.style.position = "absolute";
  //     myOverlay.style.top = 0;
  //     myOverlay.style.backgroundColor = "rgba(0,0,0,0.7)";
  //     myOverlay.style.cursor = "pointer";
  //
  //     //resize and position overlay
  //
  //     myOverlay.style.width = 100 + "px";
  //     myOverlay.style.height = 100 + "px";
  //     myOverlay.style.top = 100 + "px";
  //     myOverlay.style.left = 100 + "px";
  //     // myOverlay.style.width = window.innerWidth + "px";
  //     // myOverlay.style.height = window.innerHeight + "px";
  //     // myOverlay.style.top = window.pageYOffset + "px";
  //     // myOverlay.style.left = window.pageXOffset + "px";
  //
  //     console.log(e.target);
  //
  //     //create image
  //     var imageSrc = e.target.src;
  //     var largeImage = document.createElement("img");
  //     largeImage.id = "largeImage";
  //     largeImage.src = imageSrc;
  //     largeImage.style.display = "block";
  //     largeImage.style.position = "absolute";
  //
  //     //wait until image loads
  //     largeImage.addEventListener("load", function() {
  //
  //       //Resize if taller
  //       if(this.height > window.innerHeight) {
  //         this.ratio = window.innerHeight / this.height;
  //         this.height = this.height * this.ratio;
  //         this.width = this.width * this.ratio;
  //       }
  //
  //       //Resize if wider
  //       if(this.width > window.innerWidth) {
  //         this.ratio = window.innerWidth / this.width;
  //         this.height = this.height * this.ratio;
  //         this.width = this.width * this.ratio;
  //       }
  //       centerImage(this);
  //       myOverlay.appendChild(largeImage);
  //     })
  //   }
  //   //console.log(e);
  // }, false);

  // function centerImage(theImage) {
  //   var myDifX = (window.innerWidth - theImage.width)/2;
  //   var myDifY = (window.innerHeight - theImage.height)/2;
  //
  //   theImage.style.top = myDifY + "px";
  //   theImage.style.left = myDifX + "px";
  //   return theImage;
  // }
// })();


//just commented this out
// (function() {
//
//   //Selecting node
//   var myNode = document.querySelector(".container");
//   var otherImage;
//   //var myImage;
//   myNode.addEventListener("mouseover", function(e) {
//     var imageSrc = e.target.src;
//     var myImage = document.createElement("img");
//     myImage.id = "newImage";
//     otherImage = myImage;
//     myNode.addEventListener("mousemove", function(e) {
//
//       if(e.target.tagName == "IMG") {
//         e = e || window.event;
//         myImage.src = imageSrc;
//
//         myImage.addEventListener("load", function(e) {
//           myImage.style.position = "absolute";
//           // this.height = "400px";
//           // this.width = "auto";
//           myImage.style.height = "400px";
//           myImage.style.width = "auto";
//           myImage.style.top = ((e.pageY || e.clientY)+15) + "px";
//           myImage.style.left = ((e.pageX || e.clientX)+15) + "px";
//           document.body.appendChild(myImage);
//         }, false);
//       }
//
//     }, false);
//   }, false);
//
//   myNode.addEventListener("mouseout", function(e) {
//     otherImage.style.display = "none";
//   }, false);



  // myNode.addEventListener("mouseover", function(e) {
  //
  //   if(e.target.tagName == "IMG") {
  //     var myOverlay = document.createElement("div");
  //     myOverlay.id = "overlay";
  //     document.body.appendChild(myOverlay);
  //
  //     //overlay styles
  //     myOverlay.style.position = "absolute";
  //     myOverlay.style.top = 0;
  //     myOverlay.style.backgroundColor = "rgba(0,0,0,0.7)";
  //     myOverlay.style.cursor = "pointer";
  //
  //     //resize and position overlay
  //
  //     myOverlay.style.width = 100 + "px";
  //     myOverlay.style.height = 100 + "px";
  //     myOverlay.style.top = 100 + "px";
  //     myOverlay.style.left = 100 + "px";
  //     // myOverlay.style.width = window.innerWidth + "px";
  //     // myOverlay.style.height = window.innerHeight + "px";
  //     // myOverlay.style.top = window.pageYOffset + "px";
  //     // myOverlay.style.left = window.pageXOffset + "px";
  //
  //     console.log(e.target);
  //
  //     //create image
  //     var imageSrc = e.target.src;
  //     var largeImage = document.createElement("img");
  //     largeImage.id = "largeImage";
  //     largeImage.src = imageSrc;
  //     largeImage.style.display = "block";
  //     largeImage.style.position = "absolute";
  //
  //     //wait until image loads
  //     largeImage.addEventListener("load", function() {
  //
  //       //Resize if taller
  //       if(this.height > window.innerHeight) {
  //         this.ratio = window.innerHeight / this.height;
  //         this.height = this.height * this.ratio;
  //         this.width = this.width * this.ratio;
  //       }
  //
  //       //Resize if wider
  //       if(this.width > window.innerWidth) {
  //         this.ratio = window.innerWidth / this.width;
  //         this.height = this.height * this.ratio;
  //         this.width = this.width * this.ratio;
  //       }
  //       centerImage(this);
  //       myOverlay.appendChild(largeImage);
  //     })
  //   }
  //   //console.log(e);
  // }, false);

  // function centerImage(theImage) {
  //   var myDifX = (window.innerWidth - theImage.width)/2;
  //   var myDifY = (window.innerHeight - theImage.height)/2;
  //
  //   theImage.style.top = myDifY + "px";
  //   theImage.style.left = myDifX + "px";
  //   return theImage;
  // }


//correct stuff


//   (function() {
//
//   //Selecting node
//   var myNode = document.querySelector(".container");
//   var otherImage;
//   //var myImage;
//   myNode.addEventListener("mouseover", function(e) {
//     var imageSrc = e.target.src;
//     var myImage = document.createElement("img");
//     myImage.id = "newImage";
//     otherImage = myImage;
//     myNode.addEventListener("mousemove", function(e) {
//
//       if(e.target.tagName == "IMG") {
//         e = e || window.event;
//         myImage.src = imageSrc;
//
//         myImage.addEventListener("load", function() {
//           myImage.style.position = "absolute";
//           myImage.style.display = "block";
//           myImage.style.height = "400px";
//           myImage.style.width = "400px";
//           myImage.style.top = ((e.pageY || e.clientY)+15) + "px";
//           myImage.style.left = ((e.pageX || e.clientX)+15) + "px";
//           document.body.appendChild(myImage);
//         });
//       }
//
//     }, false);
//   }, false);
//
//   myNode.addEventListener("mouseout", function(e) {
//     otherImage.style.display = "none";
//   }, false);
// })();
