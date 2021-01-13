const displayEl = document.querySelector(".display");
const display1El = document.querySelector(".display1");

const acEl = document.querySelector("#ac");
const delEl = document.querySelector("#delete");

const divisionEl = document.querySelector("#division");
const multiplicationEl = document.querySelector("#multiplication");
const subtractionEl = document.querySelector("#subtraction");
const additionEl = document.querySelector("#addition");
const equalsEl = document.querySelector("#equals");

const dotEl = document.querySelector("#dot");
const number0El = document.querySelector("#zero");
const number1El = document.querySelector("#one");
const number2El = document.querySelector("#two");
const number3El = document.querySelector("#three");
const number4El = document.querySelector("#four");
const number5El = document.querySelector("#five");
const number6El = document.querySelector("#six");
const number7El = document.querySelector("#seven");
const number8El = document.querySelector("#eight");
const number9El = document.querySelector("#nine");

const numberElArray = [number0El, number1El, number2El, number3El, number4El, number5El, number6El, number7El, number8El, number9El,];


//functions
const handleNumberClick = (numStr) => {
const currentDisplayStr = displayEl.textContent;
if (currentDisplayStr === "0"){
    displayEl.textContent = numStr;}
else {displayEl.textContent = 
    currentDisplayStr + numStr;}
}


//add eventListeners
//numbers
for (let i=0; i < numberElArray.length; i++) {
    const numberEl = numberElArray[i];
    numberEl.addEventListener("click", () => {
    handleNumberClick(i.toString());
 });
}


//dot
dotEl.addEventListener ("click" , () => {
    displayEl.textContent = displayEl.textContent + ".";})


//ac
acEl.addEventListener ("click", () => {
    setTimeout("location.reload(true);", 0000);})

//⌫
delEl.addEventListener ("click", () =>{
    const number1 = displayEl.textContent;
    const number2 = display1El.textContent;
displayEl.textContent = number1.substr(0, number1.length - 1);;
})



//addition
additionEl.addEventListener("click", () =>{
    const number1 = displayEl.textContent;
    const number2 = display1El.textContent;  

if (number2 < 1) {
display1El.textContent = displayEl.textContent
    displayEl.textContent = null;
    equalsEl.addEventListener("click", () =>{
        displayEl.textContent = Number (display1El.textContent) + Number (displayEl.textContent);
        display1El.textContent = null})
}

else {
    display1El.textContent = Number (number1) + Number (number2);
    displayEl.textContent = null;
    equalsEl.addEventListener("click", () =>{
        displayEl.textContent = Number (display1El.textContent) + Number (displayEl.textContent);
        display1El.textContent = null})
}
});



//multiplication
multiplicationEl.addEventListener("click", () =>{
    const number1 = displayEl.textContent;
    const number2 = display1El.textContent;  

if (number2 < 1) {
display1El.textContent = displayEl.textContent
    displayEl.textContent = null;
    equalsEl.addEventListener("click", () =>{
        displayEl.textContent = display1El.textContent * displayEl.textContent;
        display1El.textContent = null})
}

else {
    display1El.textContent = displayEl.textContent * display1El.textContent;
    displayEl.textContent = null;
    equalsEl.addEventListener("click", () =>{
        displayEl.textContent = display1El.textContent * displayEl.textContent;
        display1El.textContent = null})
}
});



//division
divisionEl.addEventListener("click", () =>{
    const number1 = displayEl.textContent;
    const number2 = display1El.textContent;

if (number2 < 1) {
display1El.textContent = displayEl.textContent
    displayEl.textContent = null;
    equalsEl.addEventListener("click", () =>{
        displayEl.textContent = display1El.textContent / displayEl.textContent;
        display1El.textContent = null})
}

else {
    display1El.textContent = display1El.textContent / displayEl.textContent;
    displayEl.textContent = null;
    equalsEl.addEventListener("click", () =>{
        displayEl.textContent = display1El.textContent / displayEl.textContent;
        display1El.textContent = null})
}
});

 
//subtraction
subtractionEl.addEventListener("click", () =>{
    const number1 = displayEl.textContent;
    const number2 = display1El.textContent;

if (number2 < 1) {
display1El.textContent = displayEl.textContent
    displayEl.textContent = null;
    equalsEl.addEventListener("click", () =>{
        displayEl.textContent = display1El.textContent - displayEl.textContent;
        display1El.textContent = null})
}

else {
    display1El.textContent = display1El.textContent - displayEl.textContent;
    displayEl.textContent = null;

equalsEl.addEventListener("click", () =>{
    displayEl.textContent = display1El.textContent - displayEl.textContent;
    display1El.textContent = null})

}
});

//equals

        
     
        
    
    
    

    
    
    
     
     
   
   
    



