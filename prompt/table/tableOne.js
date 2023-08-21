import inquirer from "inquirer";
import columnOne from "./column/columnOne.js";

const columns = ["all", "specific"];

function tableOne() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "table1",
                message: "First table name: ",
            },
            {
                type: "rawlist",
                name: "column",
                message: "Select all columns or specific columns?",
                choices: columns,
            },
        ])
        .then((columnAnswer) => {
            columnOne(columnAnswer);
        });
}

export default tableOne;
