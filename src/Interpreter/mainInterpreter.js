'use strict';

const buildEdges = require('./buildEdges');

const runInterpreter = (file) => {
    let af = file.af;
    let edgeList = buildEdges(af);

};

module.exports = runInterpreter;