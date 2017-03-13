var sz1 = document.getElementById('sz1');
var sz2 = document.getElementById('sz2');
var sz3 = document.getElementById('sz3');

sz1.addEventListener('click', picLink);
sz2.addEventListener('click', picLink);
sz3.addEventListener('click', picLink);

function picLink() {
  var allImages = document.querySelectorAll('img');

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}
// sz1.addEventListener('click', function() {
//   if (sz1pic.className === "hide") {
//     sz1pic.className = "";
//   } else {
//     sz1pic.className = "hide";
//   }
// });
// sz2.addEventListener('click', function() {
//   if (sz2pic.className === "hide") {
//     sz2pic.className = "";
//   } else {
//     sz2pic.className = "hide";
//   }
// });
// sz3.addEventListener('click', function() {
//   if (sz3pic.className === "hide") {
//     sz3pic.className = "";
//   } else {
//     sz3pic.className = "hide";
//   }
// });
