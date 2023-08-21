import inquirer from "inquirer";

const tables = [1, 2, 3];

function selectSQL() {
    inquirer
        .prompt([{
            type: "rawlist",
            name: "select_table",
            message: "How many tables do you want to select?",
            choices: tables
        }])
        .then(answer => {
            inquirer
                .prompt([{
                    type: "input",
                    name: "table1",
                    message: "First table name: ",
                }])
                .then(answer => {
                    console.log(answer.table1);
                })
        })
}

export default selectSQL;