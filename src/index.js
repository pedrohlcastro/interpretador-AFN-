'use strict'

//IMPORTS
const yargs = require('yargs');
const fileHandler = require('./FileHandler');
const runInterpreter = require('./Interpreter/mainInterpreter');

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
    await runInterpreter(JSONfile);
})()