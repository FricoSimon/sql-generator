import inquirer from "inquirer";

inquirer
    .prompt([{
        type: "input",
        name: "name",
        message: "What's your name?"
    }])
    .then(answer => {
        console.log(`Hi ${answer.name}`);
    })