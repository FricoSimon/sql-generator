import inquirer from "inquirer";

function columnOne(columnAnswer) {
    if (columnAnswer.column === "all") {
        console.log(`SELECT * FROM ${columnAnswer.table1}`);
    } else if (columnAnswer.column === "specific") {
        inquirer
            .prompt([
                {
                    type: "number",
                    name: "number_of_columns",
                    message: "How many columns do you want to select?",
                },
            ])
            .then((numberColumnAnswer) => {
                if (numberColumnAnswer.number_of_columns === 1) {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "column1",
                                message: "First column name: ",
                            },
                        ])
                        .then((column1Answer) => {
                            console.log(`SELECT ${column1Answer.column1} FROM ${columnAnswer.table1}`);
                        });
                }
            });
    }
}

export default columnOne;