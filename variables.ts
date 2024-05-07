import inquirer from "inquirer";

let answer: 
 {
    "num1": number,
    "num2": number,
    "operator": string
}
= await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your First Number : "
    },

    {
        type: "number",
        name: "num2",
        message: "Enter your Second Number : "
    },

    {
        type: "list",
        name: "operator",
        message: "Select the Operator : ",
        choices: ["+", "-", "*", "/"]
    }
])

export {answer}