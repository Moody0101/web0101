const body = document.getElementsByTagName('body');
const label = document.getElementById('color_label');
const button = document.getElementById("change");
const button2 = document.getElementById("change2");
const label2 = document.getElementById('color_label2');
var colors = ["#820DFA", "#5E3B2F",
"#F3D918", "#C92158", "#78C28C", "#896317", "#335F38", "#3B76A8",
'#0A1519', "#486F8A", "#337920", "#3269EE", "#B398A2", "#D95F30"
]
const x = rgbFormatgetter();
Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
function getNumber(arr_) {
    return Math.floor(Math.random() * arr_.length)
}
button.addEventListener('click', function() {
 hexColor = "#"
 for(let j = 0; j < 6; j++){
 hexColor += Hex[getNumber(Hex)];
 }
 label.textContent = hexColor;
 body[0].style.backgroundColor = hexColor;
});

VanillaTilt.init(document.querySelectorAll(".main"), {
    max: 16,
    speed: 10,
    });
function rgbFormatgetter(){
   rgbFormat = [];
   for(let j = 0; j < 256;j++) {
   rgbFormat.push(j);
   }
   return rgbFormat;
}
button2.addEventListener("click", function(){
    rgbNums = [];
    for(let i = 0; i < 3;i++){
    rgbNums.push(getNumber(x));
    }
    label2.textContent = "rgb(" + String(rgbNums[0]) + ", " + String(rgbNums[1])+ ", " + String(rgbNums[2]) + ")"
    body[0].style.backgroundColor = "rgb(" + String(rgbNums[0]) + ", " + String(rgbNums[1])+ ", " + String(rgbNums[2]) + ")";
});


fonts = {
boldy: "Cooper Black"
}

