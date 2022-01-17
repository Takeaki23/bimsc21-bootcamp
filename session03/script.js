//console.log("hey. I am in an external file")

const doc = document.documentElement
//console,log(doc)
doc.style.fontFamily = "timesnewroman";
doc.style.background = "lightgrey";
doc.style.color = "white";


//accsess elements from the doc

const titlebar = document.documentElement.querySelector("#child-1");
console.log(titlebar.innnerHTML);
titlebar.innerHTML = "This is my website's titlebar";
titlebar.style.fontSize = "20px";

//add elements into the site
let resetButton = document.createElement("button");
titlebar.appendChild(resetButton);
resetButton.innerHTML = "Reset Button";
resetButton.style.float = "right";

//assign an event to my button
resetButton.addEventListener("click", doSomething);

function doSomething(){
    console.log("button has been pressed");
}

const mainText = document.querySelector("p");
mainText.innerHTML = ""


const sidebar = document.querySelector("#child-2");


//create a form (user input) to fill the paragraph
let input = document.createElement("input");

sidebar.appendChild(input);

let submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";
sidebar.appendChild(submitButton);

let val = submitButton.addEventListener("click", submitText);

function submitText(){
    let inputText = input.value;
    console.log(inputText);
    mainText.innerHTML += inputText + " ";
    input.value = "";

};



