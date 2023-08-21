import inquirer from "inquirer";
import tableOne from "./table/tableOne.js";

const tables = [1, 2, 3];

function selectSQL() {
    inquirer
        .prompt([
            {
                type: "rawlist",
                name: "select_table",
                message: "How many tables do you want to select?",
                choices: tables,
            },
        ])
        .then((tableAnswer) => {
            tableOne();
        });
}

export default selectSQL;
