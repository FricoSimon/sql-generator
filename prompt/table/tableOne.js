import inquirer from "inquirer";
import columns from "./column/columns.js";

const column = ["all", "specific"];

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
                choices: column,
            },
        ])
        .then((columnAnswer) => {
            columns(columnAnswer);
        });
}

export default tableOne;
