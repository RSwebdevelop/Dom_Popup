let opnButton = document.querySelector("#open")
let clsButton = document.querySelector("#close")
let div = document.querySelector("div")


// console.log("hello")
opnButton.addEventListener('click',()=>{
    div.classList.remove('hide')
    // console.log("hello")
})
clsButton.addEventListener('click',()=>{
    div.classList.add('hide')
})