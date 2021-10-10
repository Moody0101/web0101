document.addEventListener("DOMcontentloaded", function(){
alert('Dom is ready');
});
const nav = document.getElementById('nav');
const navStyle = document.getElementsByClassName("navbar-menu")[0];
const firstSpan = document.getElementsByTagName("span")[0];
const secondSpan = document.getElementsByTagName("span")[1];
const thirdSpan = document.getElementsByTagName("span")[2];
const button = document.getElementById("menu-toggler");
const spans = [firstSpan, secondSpan, thirdSpan];

window.addEventListener ("scroll", function() {
if (window.scrollY > 20) {
  nav.style.backgroundColor = "white";
  navStyle.style.backgroundColor = "white";
  for (let i = 0; i < navStyle.children.length; i++) {
  navStyle.children[i].classList.replace('a', 'a2');
  }

  for (let i = 0; i < spans.length; i++ ) {
  spans[i].style.backgroundColor = "black";
  }
} else {
 navStyle.style.backgroundColor = "";
 nav.style.backgroundColor = "";
 for (let i = 0; i < spans.length; i++ ) {
  spans[i].style.backgroundColor = "";
  }
   for (let i = 0; i < navStyle.children.length; i++) {
  navStyle.children[i].classList.replace('a2', 'a');
  }
}
});

button.addEventListener('click', function() {
if (navStyle.style.display == "") {
navStyle.style.display = "block";
firstSpan.style.display = "none";
secondSpan.style.transform = "rotate(-45deg)";
thirdSpan.style.transform = "rotate(45deg)";
thirdSpan.style.position = "relative";
thirdSpan.style.bottom = "10px";
}
else if(navStyle.style.display == "block"){
navStyle.style.display = "";
firstSpan.style.display = "";
secondSpan.style.transform = "";
thirdSpan.style.transform = "";
thirdSpan.style.position = "";
thirdSpan.style.bottom = "";
}
});

