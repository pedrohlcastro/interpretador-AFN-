'use strict'

//IMPORTS
const yargs = require('yargs');
const readline = require('readline');
const fileHandler = require('./FileHandler');
const runInterpreter = require('./Interpreter/mainInterpreter');

//config INPUT
let inputText = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ARGV handle
const argv = yargs
    .usage('Usage: node $0 [options]')
    .example('node $0 -f foo.json', ' -> envia arquivo foo.json')
    .alias('f', 'file')
    .nargs('f', 1)
    .describe('f', 'Carrega arquivo')
    .demandOption(['f'])
    .help('h')
    .alias('h', 'help')
    .argv;

// RUN INTERPRETER
let JSONfile;
(async () => {
    // PARSE FILE INTO JSON
    await fileHandler(argv.file)
        .then((data) => { 
            JSONfile = data;
        })
        .catch((err) =>{ throw err; });
    
    //INTERPRETER
    const getText = async() => {
        inputText.question("", (answer) => {
            // if(await runInterpreter(JSONfile, answer) console.log('SIM');
            // else console.log('NÃO');
            console.log(runInterpreter(JSONfile, answer));
            getText();
        });
    };
    getText();
})()