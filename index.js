import inquirer from "inquirer";
import selectSQL from "./prompt/selectSQL.js";

const choices = ["Select SQL", "Insert SQL", "Delete SQL"];
const tables = [1, 2, 3];

inquirer
    .prompt([{
        type: "rawlist",
        name: "query",
        message: "What do you want to create?",
        choices: choices
    }])
    .then(answer => {
        if (answer.query === "Select SQL") {
            selectSQL();
        }
    })