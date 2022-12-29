let opnButton = document.querySelector("#open")
let clsButton = document.querySelector("#close")
let div = document.querySelector("div")
let submitBtn = document.getElementById("submitBtn");


// console.log("hello")
// opnButton.addEventListener('click',()=>{
//     div.classList.remove('hide')
//     // console.log("hello")
// })
// clsButton.addEventListener('click',()=>{
//     div.classList.add('hide')
// })


// 28-12-2022
     // let anchor = document.querySelector("a");
    //  submitBtn.addEventListener("click", (e) => {
    //      e.preventDefault();
    //      console.log(e);
    //  })


    let inputdata= document.getElementById("inputBox")
    let button= document.querySelector("button")
    let todoList = document.querySelector("ul");
    // let del = document.getElementById("Delete")

    let arr = [];
    window.addEventListener('load', ()=>{
        arr = JSON.parse(localStorage.getItem("toDoData")) || [];
        arr.forEach(element => {
            todoList.innerHTML+=`<li>${element}<button onclick="deleteFn('${element}', this)">Delete</button></li>`
        }); 
    })
    button.addEventListener("click", (e)=> {
        e.preventDefault();
        console.log(inputdata.value)
        // let child= document.createElement("li");
        // child.innerText=inputdata.value;
        // let child2=`<li>${inputdata.value}</li>`
        // todoList.appendChild(child);
        // todoList.appendChild(child)(child2);
        todoList.innerHTML+=`<li>${inputdata.value}<button onclick="deleteFn('${inputdata.value}', this)">delete</button></li>`
        arr.push(inputdata.value)
        localStorage.setItem("toDoData", JSON.stringify(arr))
        inputdata.value="";     
    })

    function deleteFn(todo, element) {
        console.log(element)
        let index = arr.indexOf(todo); // Index nikala perticular data ka
        arr.splice(index,1); // Array se data remove kiya
        element.parentElement.remove();  // Removed from UI
        localStorage.setItem("toDoData", JSON.stringify(arr)); // Removed array ko local Storage pe save kiya
    }
