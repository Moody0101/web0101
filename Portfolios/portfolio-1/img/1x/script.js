const nav = document.getElementsByClassName("navbar");
const navmenu = document.getElementsByClassName("navbar-menu");
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
const button = document.getElementsByClassName("menu-toggler");
button.addEventListener("click", function() {

});