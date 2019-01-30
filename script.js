var i = 0;
var photoList = [];
var currentPhoto;

photoList = document.getElementsByClassName("photo");

function changePhoto(index) {

    photoList[i].classList.toggle("hide");
    i += index;

    if (i > 0) {
        i %= photoList.length;
    } else if (i < 0) {
        i = photoList.length - 1;
    }

    photoList[i].classList.toggle("hide");
    
}