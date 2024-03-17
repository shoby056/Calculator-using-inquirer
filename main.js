import inquirer from "inquirer";
let loop = true;
while (loop) {
    const userInput = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter first number"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number"
        },
        {
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            message: "Enter your operator"
        }
    ]);
    const num1 = userInput.num1;
    const num2 = userInput.num2;
    const operator = userInput.operator;
    if (num1 && num2) {
        if (operator === "Addition") {
            console.log("\nThe answer of", num1 + num2, "=" + num1 + num2);
        }
        else if (operator === "Subtraction") {
            console.log(`\nThe answer of ${num1} - ${num2} = ${num1 - num2}`);
        }
        else if (operator === "Multiplication") {
            console.log(`\nThe answer of ${num1} * ${num2} = ${num1 * num2}`);
        }
        else if (operator === "Division") {
            console.log(`\nThe answer of ${num1} / ${num2} = ${num1 / num2}`);
        }
    }
    else {
        console.log("please enter valid operator");
    }
    const calculateMore = await inquirer.prompt([{
            type: "confirm",
            name: "more",
            message: "Do you want more calculations?",
            default: "false"
        }]);
    if (!calculateMore.more) {
        loop = false;
        console.log("\nThankyou");
    }
}
