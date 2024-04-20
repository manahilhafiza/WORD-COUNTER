import inquirer from "inquirer";
import chalk from "chalk";
console.log("=".repeat(60));
console.log(chalk.bold.blueBright('\n\t\tcode-with-manahil - word counter'));
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count words :",
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log((chalk.bgMagenta `your sentence words count is ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
