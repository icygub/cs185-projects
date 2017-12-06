var _imageList = ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg", "image-5.jpg", "image-6.jpg", "image-7.jpg", "image-8.jpg", "image-9.jpg", "image-10.jpg"];
var questionMark = "image-question-mark.jpg";
var images = [];

var lastImgIdClicked = "";
var lastImgIdClicked2 = "";
var lastImgIdClickedAbsolute = "";
var clickCounter = 0;

(function() {

  createImagesList();
  shuffleImagesList(images);
  for (var i = 0; i < 20; i++) {
    //var realImg = (i % 10 == 0) ? 10 : i % 10;
    var id = "" + (i + 1) + "";
    var element = document.getElementById(id);
    if (i % 2 == 0) {
      element.parentNode.style.backgroundColor = "orange";
    } else {
      element.parentNode.style.backgroundColor = "purple";
    }
    element.src = questionMark;
    //element.src = images[i];
    //element.src = "image-" + realImg + ".jpg";
    //document.getElementById(i.toString()).src = "image-"+i.toString()+".jpg";
    // document.getElementById(i.toString()).setAttribute("style", "display:block");
  }

  document.getElementById("table").addEventListener("click", function(e) {
    if (e.target.tagName == "IMG") {
      if(lastImgIdClickedAbsolute != e.target.id) {
        document.getElementById(e.target.id).src = images[parseInt(e.target.id) - 1]; //ID's are one ahead of the images[] list indexes
        if (clickCounter == 0) {
          if (lastImgIdClicked != "" && lastImgIdClicked2 != "") {
            document.getElementById(lastImgIdClicked).src = questionMark;
            document.getElementById(lastImgIdClicked2).src = questionMark;
            lastImgIdClicked = "";
            lastImgIdClicked2 = "";
          }

          lastImgIdClicked = e.target.id;
          lastImgIdClickedAbsolute = lastImgIdClicked;
          //alert(e.target.id);
          clickCounter++;
        } else if (clickCounter == 1) {
          if (document.getElementById(e.target.id).src == document.getElementById(lastImgIdClicked).src && e.target.id != lastImgIdClicked) {
            //a match/win
          } else {
            lastImgIdClicked2 = e.target.id;
            lastImgIdClickedAbsolute = lastImgIdClicked2;
          }
          clickCounter = 0;
        }
      }



    }
  }, false);

})();

function createImagesList() {
  // fills the images array with the images in order.
  //alert("here");
  for (var i = 0; i < 20; i++) {
    var realI = (i % 10 == 0) ? 0 : i % 10;
    images[i] = _imageList[realI];
  }
}

function shuffleImagesList(list) {
  for (var i = 0; i < list.length; i++) {
    var rand = Math.floor(Math.random() * 20);
    var temp = list[i];
    list[i] = list[rand];
    list[rand] = temp;
  }
}

function tableClick() {
  alert("here");
}
