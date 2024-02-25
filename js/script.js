const form = document.querySelector('#form')
const colorPicker = document.querySelector('#color-picker')
const select = document.querySelector('#select')

form.addEventListener('submit',(e) => {
    e.preventDefault()
    console.log(select.value)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&mode=${select.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        renderColors(data.colors)
        renderText(data.colors)
    })
})

function renderColors(colors) {
    let colorDivHtml = ''
    colors.map(color => {
        return colorDivHtml += `
        <div class="color" style="background-color: ${color.hex.value};">1</div>`
    })
    document.querySelector('.colors').innerHTML = colorDivHtml
}

function renderText(colors) {
    let colorText = ''
    colors.map((color) => {
       return colorText += `
        <p class="hex-value">${color.hex.value}</p>`
    })
    document.querySelector('.footer').innerHTML = colorText
}