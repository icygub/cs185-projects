var _imageList = ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg", "image-5.jpg", "image-6.jpg", "image-7.jpg", "image-8.jpg", "image-9.jpg", "image-10.jpg"];
var images = [];

function pageLoad() {
  createImagesList();
  shuffleImagesList(images);
  for(var x = 0; x < 20; x++) {
    //alert(images[x]);
  }
  for(var i = 0; i < 20; i++) {
    //var realImg = (i % 10 == 0) ? 10 : i % 10;

    var id = "" + (i+1) + "";
    var element = document.getElementById(id);
    if(i % 2 == 0) {
      element.parentNode.style.backgroundColor = "orange";
    } else {
      element.parentNode.style.backgroundColor = "purple";
    }
    element.src = images[i];
    //element.src = "image-" + realImg + ".jpg";

    //document.getElementById(i.toString()).src = "image-"+i.toString()+".jpg";
    // document.getElementById(i.toString()).setAttribute("style", "display:block");
  }
  //var td = document.getElementById("test");
  //td.style.backgroundColor = "#FF0000";
}

function createImagesList() {
  // fills the images array with the images in order.
  for(var i = 0; i < 20; i++) {
    var realI = (i % 10 == 0) ? 0 : i % 10;
    images[i] = _imageList[realI];
  }
}

function shuffleImagesList(list) {
  for(var i = 0; i < list.length; i++) {
    var rand = Math.floor(Math.random() * 20);
    var temp = list[i];
    list[i] = list[rand];
    list[rand] = temp;
  }
}
