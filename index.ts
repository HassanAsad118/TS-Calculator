// import inquirer from "inquirer";
import {answer} from "./variables.js"
let {num1, num2, operator} = answer

if(num1 && num2 && operator){
    let result: number = 0;
    if(operator === "+"){
        result = num1 + num2
    }
    
    else if(operator === "-"){
        result = num1 - num2
    }
      
    else if(operator === "*"){
        result = num1 * num2
    }
      
    else if(operator === "/"){
        result = num1 / num2
    }
    console.log("Your Result is : " + result)
    
}else{
    console.log("Please Select A Valid Operator!")   
}

