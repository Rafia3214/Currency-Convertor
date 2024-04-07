#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\n \t Welcome to Currency Convertor\n"));


//define the list of currencies and thier exchange rates
let exchange_rates :any =  {
    "USD": 1,  //Base Currency
    "INR": 75, //Indian Currency
    "EUR": 0.9, //European Currency(Euro)
    "GBP": 0.75, //British Currency (Pounds)
    "JPY": 113, //Japanese Currency(Yen)
    "CAD": 1.3, //Canadian DOLLARS
    "AUD": 1.65, //Australian Dollars
     "PKR":277.70, //Pakistani rupees
  
} 
 //prompt the user to select currencies to convert from and to 
 let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD","INR","EUR","GBP","JPY", "CAD","AUD","PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices:["USD","INR","EUR","GBP","JPY", "CAD","AUD","PKR"],
    },
    {
    
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
    
]);
//perform currency conversion by using formula
let from_amount = exchange_rates[user_answer.from_currency]
let to_amount = exchange_rates[user_answer.to_currency]
let amount = user_answer.amount

//Formula of conversion 
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//Display the converted amount
console.log(`The converted amount is ${chalk.green(converted_amount.toFixed(2))}`); 
  
    