#! /usr/bin/env node
import inquirer from "inquirer";
let toDos = [];
let trueCondition = true;
async function main() {
    while (trueCondition) {
        let answer = await inquirer.prompt([
            {
                name: "selectOptions",
                type: "list",
                message: "Select One of Them",
                choices: ['Add ToDos', 'Show ToDos', 'Delete ToDos', 'Update ToDos', 'Terminate Program']
            },
        ]);
        if (answer.selectOptions === "Add ToDos") {
            let answer = await inquirer.prompt([
                {
                    name: "addToDos",
                    type: "input",
                    message: "What is Your Todo Name ? ",
                },
            ]);
            toDos.push(answer.addToDos);
        }
        else if (answer.selectOptions === "Show ToDos") {
            console.log(toDos);
        }
        else if (answer.selectOptions === "Delete ToDos") {
            let answer = await inquirer.prompt([
                {
                    name: "deleteIndex",
                    type: "input",
                    message: "Enter the index of the Todo you want to delete: ",
                    validate: (value) => {
                        if (!isNaN(Number(value)) && Number(value) >= 0 && Number(value) < toDos.length) {
                            return true;
                        }
                        return "Please enter a valid index";
                    }
                },
            ]);
            toDos.splice(parseInt(answer.deleteIndex), 1);
            console.log("Todo deleted successfully.");
        }
        else if (answer.selectOptions === "Update ToDos") {
            let answer = await inquirer.prompt([
                {
                    name: "updateIndex",
                    type: "input",
                    message: "Enter the index of the Todo you want to update: ",
                    validate: (value) => {
                        if (!isNaN(Number(value)) && Number(value) >= 0 && Number(value) < toDos.length) {
                            return true;
                        }
                        return "Please enter a valid index";
                    }
                },
                {
                    name: 'updatedTodo',
                    type: 'input',
                    message: 'Enter the new value for the Todo:',
                }
            ]);
            toDos[parseInt(answer.updateIndex)] = answer.updatedTodo;
            console.log("Todo updated successfully.");
        }
        if (answer.selectOptions === "Terminate Program") {
            trueCondition = false;
            console.log('Program Terminated');
        }
    }
    console.log(toDos);
}
main();
