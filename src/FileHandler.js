'use strict';

const fs = require('fs');

const fileHandler = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) reject(new Error('Cannot Read File - Internal Error'));
            else{
                let JSONFile =JSON.stringify(data);
                JSONFile = JSON.parse(JSONFile);
                resolve(JSON.parse(JSONFile));
            }
        });
    });
}

module.exports = fileHandler;