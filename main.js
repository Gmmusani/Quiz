#! /usr/bin/env node
import { input, select } from "@inquirer/prompts";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n\t\tWelcome to GM Musani - Quiz"));
console.log("*".repeat(60));
let name = await input({ message: "Please Enter Your Name: " });
let quiz = [
    {
        question: "What is TypeScript?",
        option: ["A programming language", "A superset of JavaScript", "A database", "A framework"]
    },
    {
        question: "Which keyword is used to define a variable in TypeScript?",
        option: ["var", "let", "const", "All of the above"]
    },
    {
        question: "Which file extension is used for TypeScript files?",
        option: [".js", ".ts", ".java", ".jsx"]
    },
    {
        question: "How do you define an interface in TypeScript?",
        option: ["interface MyInterface {}", "class MyInterface {}", "function MyInterface {}", "None of the above"]
    },
    {
        question: "Which of the following is true about TypeScript?",
        option: ["TypeScript is an interpreted language", "TypeScript is a strongly typed language", "TypeScript is used for styling web pages", "TypeScript is a markup language"]
    }
];
let points = 0;
let question1 = await select({
    message: quiz[0].question,
    choices: quiz[0].option.map((val) => ({
        name: val,
        value: val
    }))
});
if (question1 === "A superset of JavaScript") {
    points += 4;
    console.log("Your answer is correct");
}
else {
    console.log("Your answer is incorrect");
}
;
let question2 = await select({
    message: quiz[1].question,
    choices: quiz[1].option.map((val) => ({
        name: val,
        value: val
    }))
});
if (question2 === "All of the above") {
    points += 4;
    console.log("Your answer is correct");
}
else {
    console.log("Your answer is incoorect");
}
;
let question3 = await select({
    message: quiz[2].question,
    choices: quiz[2].option.map((val) => ({
        name: val,
        value: val
    }))
});
if (question3 === ".ts") {
    points += 4;
    console.log("Your answer is correct");
}
else {
    console.log("Your answer is incorrect");
}
;
let question4 = await select({
    message: quiz[3].question,
    choices: quiz[3].option.map((val) => ({
        name: val,
        value: val
    }))
});
if (question4 === "interface MyInterface {}") {
    points += 4;
    console.log("Your answer is correct");
}
else {
    console.log("Your answer is incorrect");
}
;
let question5 = await select({
    message: quiz[4].question,
    choices: quiz[4].option.map((val) => ({
        name: val,
        value: val
    }))
});
if (question5 === "TypeScript is a strongly typed language") {
    points += 4;
    console.log("Your answer is correct");
}
else {
    console.log("Your answer is incorrect");
}
;
if (points >= 8) {
    console.log(chalk.bold.greenBright(`\nCongratulations ${name} on successfully passing the quiz`));
    console.log(`You have got ${points} Points.`);
}
else {
    console.log(chalk.bold.redBright(`\nYou lose, Better luck next time`));
    console.log(`You have got ${points} Points.`);
}
;
