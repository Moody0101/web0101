const container = document.querySelector("div.container");
const divNumber = [...Array(4 ** 2).keys()];

for (i in divNumber) {
    const i = document.createElement("div")
    i.className = "i";
    container.appendChild(i)

    i.onclick = () => {
        i.style.background = "white";
    }

}