/****************************************************
* Jason Thatcher                        2018        *
*                                                   *
* scrip.js - Calculator Events & Operations         *
* Performs basic calculator operations +,-,/,*      *
*                                                   *
*****************************************************/

var dirty = false;
var workingNumber = 0;
var newNumber = 0;
var currentOp = '=';


//updates display.  Responds to key num onClick.
function updateDisplay(val){
    if(dirty){
        document.getElementById('displaycalc').value = val; 
        dirty = false;               
    }
    else{
        document.getElementById('displaycalc').value += val;            
    }    
}

//responds to ops onClick
function ops(val){
    newNumber = Number(document.getElementById('displaycalc').value);
    document.getElementById('displaycalc').value = ""; 
    performOp(val);
}

//Clears or 'resets' calculator
function clearDisplay(){
    document.getElementById('displaycalc').value = null;
    currentOp = "=";
    workingNumber = 0;
    newNumber = 0;
}

//executes current calculator operation. Updates display with result.
function performOp(op){
    switch(currentOp){
        case '=':
            workingNumber = newNumber;      
            break;
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '/':
            divide();
            break;
        case '*':
            multiply();
            break;
    }

    currentOp = op;
    newNumber = 0;
    updateDisplay(workingNumber);   
    dirty=true; 

}

//Adds two numbers
function add(){
    workingNumber += newNumber;    
}

//Subtracts newNumber from workingNumber
function subtract(){
    workingNumber -= newNumber;    
}

//Divides workingNumber by newNumber
function divide(){
    workingNumber /= newNumber;
}

//Multiplies two numbers
function multiply(){
    workingNumber *= newNumber;
}


