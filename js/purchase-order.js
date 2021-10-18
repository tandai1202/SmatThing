var header = document.getElementById("myDIV");

var order_link = header.getElementsByClassName("order__link");

for (var i = 0; i < order_link.length; i++) {
  order_link[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("order__item-active");
    current[0].className = current[0].className.replace(" order__item-active", "");
    this.className += " order__item-active";
  });
}