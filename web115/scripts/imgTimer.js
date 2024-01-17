var imgs = ["images/army_me.jpg", "images/meinfrontofsign.jpg", "images/meandwifeyatconcert.jpg"]

var index = 0;
setInterval (function(){
  if (index == imgs.length) {
    index = 0;
  }
  document.getElementById("chgImg").src = imgs[index];
  index++;
} , 2585);