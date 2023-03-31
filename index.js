const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/utills/generateMarkdown');
const path = require('path');


const questions = [
    {
        type:'input',
        name:'title',
        message:"what is the project title?"
    },
    {
        type:'input',
        name:'description',
        message:"what is the description of your project?"
    },
    {
        type:'input',
        name:'installation',
        message:"what is the installation for your project?"
    },
    {
        type:'input',
        name:'usage',
        message:"what is the usage information of your project?"
    },
    {
        type:'list',
        name:'license',
        message:"what is the license of your project?",
        choices:['ISC', 'Apache license', 'MIT license', 'None']
    },
    {
        type:'input',
        name:'contribution',
        message:"what is the contributing guidelines of your project?"
    },
    {
        type:'input',
        name:'test',
        message:"what is the test instruction of your project?"
    },
    {
        type:'input',
        name:'github',
        message:"what is your github username?"
    },
    {
        type:'input',
        name:'email',
        message:"what is your email?"
    },

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile('README.md', generateMarkdown(response)) 
     })
}

init();