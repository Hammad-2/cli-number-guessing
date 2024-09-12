#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([

    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6: "
    }
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You Guessed Right Number")
}else{
    console.log("You Guessed Wrong Number")
};