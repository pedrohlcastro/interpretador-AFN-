'use strict';

const fs = require('fs');

const fileHandler = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) reject(new Error('Cannot Read File - Internal Error'));
            else{
                let JSONFile = JSON.parse(JSON.stringify(data));
                // console.log(JSONFile);
                resolve(JSONFile);
            }
        });
    });
}

module.exports = fileHandler;