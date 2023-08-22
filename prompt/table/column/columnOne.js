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
                const columnPrompts = [];

                for (let i = 0; i < numberColumnAnswer.number_of_columns; i++) {
                    columnPrompts.push({
                        type: "input",
                        name: `column${i + 1}`,
                        message: `Column ${i + 1} name: `,
                    });
                }

                inquirer.prompt(columnPrompts).then((columnsAnswer) => {
                    const selectedColumns = Object.values(columnsAnswer).filter(
                        (value) => value !== ""
                    );

                    console.log(
                        `SELECT ${selectedColumns.join(", ")} FROM ${columnAnswer.table1};`
                    );
                });
            });
    }
}

export default columnOne;
