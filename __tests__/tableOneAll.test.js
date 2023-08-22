import inquirer from "inquirer";
import jest from "jest";
import columnOne from "./prompt/table/column/columnOne.js";

jest.mock("inquirer");

describe("columnOne function", () => {
    it("should return correct SQL query for 'all' columns", async () => {
        const columnAnswer = {
            column: "all",
            table1: "myTable",
        };

        const result = await columnOne(columnAnswer);

        expect(result).toBe(`SELECT * FROM ${columnAnswer.table1}`);
    });
});



