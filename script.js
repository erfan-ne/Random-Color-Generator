const generateBtn = document.querySelector(".generate-btn")
const colorCard = document.querySelector(".color-card")
const colorCode = document.querySelector(".color-code")
const copyBtn = document.querySelector("#copy-btn")

let color = null;

generateBtn.addEventListener("click" , () => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    color = `rgb(${red},${green},${blue})`

    colorCode.innerHTML = color
    colorCard.style.backgroundColor = color
    
})

copyBtn.addEventListener("click" , () => {
    navigator.clipboard.writeText()
})