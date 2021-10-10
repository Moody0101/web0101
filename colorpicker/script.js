const raiseR = document.getElementById("r");
const raiseB = document.getElementById("b");
const raiseG = document.getElementById("g");
const label = document.getElementById("h");
const reduce = [
document.getElementById("r-"),
document.getElementById("b-"),
document.getElementById("g-")
]
const U = document.body.firstElementChild.firstElementChild;
const num = document.getElementById("I");
var r = 0;
var g = 0;
var b = 0;
var index =  10;
function generator(r, g, b) {
color = "rgb(" + String(r) + ", " + String(g) + ", " + String(b) + ")"
console.log(color);
};
num.addEventListener("click", function() {
 index = num.valueAsNumber;
});
function change()  {
  index = num.valueAsNumber;
}
raiseR.addEventListener ("click", function(){
    r += index;
    generator(r, g, b);
    U.style.backgroundColor = color;
    label.textContent = color;
});
raiseG.addEventListener ("click", function(){
  g += index;
  generator(r, g, b);
  U.style.backgroundColor = color;
  label.textContent = color;
});
raiseB.addEventListener ("click", function(){
           b += index;
           generator(r, g, b);
           U.style.backgroundColor = color;
           label.textContent = color;
});
reduce[0].addEventListener ("click", function(){
    r -= index;
    generator(r, g, b);
    U.style.backgroundColor = color;
    label.textContent = color;
});
reduce[2].addEventListener ("click", function(){
  g -= index;
  generator(r, g, b);
  U.style.backgroundColor = color;
  label.textContent = color;
});
reduce[1].addEventListener ("click", function(){
           b -= index;
           generator(r, g, b);
           U.style.backgroundColor = color;
           label.textContent = color;
});
