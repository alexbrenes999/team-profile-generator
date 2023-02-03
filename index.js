const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generatePage = require("./lib/generatePage.js");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "public");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const teamMembers = [];

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "roleChoice",
            message: "Please choose an option",
            choices: ["Add Engineer", "Add Intern", "Team Complete"]
        }
    ])
    .then(userChoice => {
        switch (userChoice.roleChoice) {
            case "Add Engineer":
                engineerQs();
                break;
            case "Add Intern":
                internQs();
                break;
            default:
                teamBuilder();

        }
    })
}

const managerQs = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Insert your name",
        },
        {
            type: "input",
            name: "id",
            message: "Insert ID #",
        },
        {
            type: "input",
            name: "email",
            message: "Insert your email",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Insert your office #",
        }
    ]).then(answers => {
        const manager = new Manager(
            answers.name, answers.id, answers.email, answers.officeNumber,
        )
        teamMembers.push(manager);
        addEmployee();
    })
}

const engineerQs = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Insert Engineer's Name"
        },
        {
            type: "input",
            name: "id",
            message: "Insert Engineer ID #"
        },
        {
            type: "input",
            name: "email",
            message: "Insert their email"
        },
        {
            type: "input",
            name: "github",
            message: "Insert GitHub account name"
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        addEmployee();
    })
}

const internQs = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Insert intern name"
        },
        {
            type: "input",
            name: "id",
            message: "Insert intern ID #"
        },
        {
            type: "input",
            name: "email",
            message: "Insert Intern email"
        },
        {
            type: "input",
            name: "school",
            message: "Insert intern current school"
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        addEmployee();
    })
}

const teamBuilder = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generatePage(teamMembers), "utf-8");
}

managerQs();