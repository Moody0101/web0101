document.addEventListener("DOMcontentloaded", function(){
alert('Dom is ready');
});
const btt = document.getElementById('menu-toggler');
const navmenu = document.getElementsByClassName("navbar-menu");
const nav = document.getElementsByClassName("navbar");
const a = document.getElementsByClassName("a");
const span = document.getElementsByTagName("span");
var i;
window.addEventListener ("scroll", function(){
if(window.scrollY > 20){
  nav[0].style.backgroundColor = "white";
  navmenu[0].style.backgroundColor = "white";
  for (i = 0; i < a.length; i++){
         a[i].style.color = "black";}
  for (i = 0; i < span.length; i++){
  span[i].style.backgroundColor = "black";} }else {
  navmenu[0].style.backgroundColor = "";
  nav[0].style.backgroundColor = "";
  for (i = 0; i < a.length; i++){
  a[i].style.color = ""; }
  for (i = 0; i < span.length; i++){
    span[i].style.backgroundColor = "";
    }  }
});
btt.addEventListener ("click", function(){
       if (navmenu[0].style.display == "" || navmenu[0].style.display == "none") {
            span[0].style.transform = "rotate(45deg)";
            span[0].style.top = "4px";
            span[1].style.transform = "rotate(-45deg)";
            span[1].style.bottom = "4px";
            span[2].style.display = "none"
            navmenu[0].style.display = "block";
         } else {
            navmenu[0].style.display = "none";
            span[0].style.transform = "";
            span[0].style.top = "";
            span[1].style.transform = "";
            span[1].style.bottom = "";
            span[2].style.display = ""
            navmenu[0].style.display = "";
         }

});


