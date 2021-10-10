colors = ["#820DFA", "#5E3B2F",
"#F3D918", "#C92158", "#78C28C", "#896317", "#335F38", "#3B76A8", "#C81A6C"
]
const divs = document.getElementsByTagName("div");
for(let i = 0; divs.length > i; i++) {
  divs[i].style.backgroundColor = String(colors[i]);
}
for(let j = 0; divs.length > j; j++) {
divs[j].innerHTML = '<h4 class="Label">' + String(colors[j]) +
        '</h4>';

}