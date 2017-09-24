'use strict'

//IMPORTS
const yargs = require('yargs');
const readLine = require('readline-sync');
const readFileTest = require('line-reader');
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
    .alias('t', 'test')
    .nargs('t', 1)
    .describe('t', 'Faz o Mesmo que < faz, use para teste')
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
    let line;
    if(argv.test){
        readFileTest.eachLine(argv.test, (line, last) => {
            process.stdout.write(runInterpreter(JSONfile, line)+ '\n');
        });
    } else {
        while(line = readLine.question('')){
            if(line == 'EOF') break;
            process.stdout.write(runInterpreter(JSONfile, line)+ '\n');
        }
    }
})()