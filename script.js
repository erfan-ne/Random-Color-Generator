const generateBtn = document.querySelector(".generate-btn")
const colorCard = document.querySelector(".color-card")
const colorCode = document.querySelector(".color-code")
const copyBtn = document.querySelector("#copy-btn")

let color = null;

const loadPage = () => generateColor()

const generateColor = () => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    color = `rgb(${red},${green},${blue})`

    colorCode.innerHTML = color
    colorCard.style.backgroundColor = color
}

generateBtn.addEventListener("click" , generateColor)

copyBtn.addEventListener("click" , () => {
    navigator.clipboard.writeText(color)
})