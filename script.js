const face = document.getElementById("face-container").style
const input = document.querySelectorAll("input")

input[0].addEventListener("input", eyesFollow);
input[0].addEventListener("focusout", eyeContact)
input[1].addEventListener("input", eyesFollow);


function eyesFollow(e) {
    let value = 0
    value = e.target.value.length * 10
    if (value >= 100) {
        value = 100
    }
    console.log(value)
    face.setProperty('--eyesX', `${value}%`)
    face.setProperty('--eyesY', "100%")
}


function eyeContact() {
    face.setProperty('--eyesX', "0%")
    face.setProperty('--eyesY', "0%")
}