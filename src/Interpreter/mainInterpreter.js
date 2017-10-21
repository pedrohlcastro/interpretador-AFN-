'use strict';

const buildEdges = require('./buildEdges');
// const readLine = require('readline-sync');

const runInterpreter = (file, test) => {
    let af = file.af;
    let initialNodes = af[3];
    let finalNodes = af[4];
    let buildEdgesReturn = buildEdges(af);
    let nodesDict = buildEdgesReturn.nodesDict; //helper dictionary
    let edgeList = buildEdgesReturn.edgeList; // list of edges
    
    let controlStack = []; // stack for flux control
    let visitedArray = []; // visited array
    let success = false; //success flag
    

    initialNodes.forEach((initial) => {
        let control = {
            from: initial,
            duty: test
        };

        //Already used this state
        if( visitedArray.find((e) => {JSON.stringify(e) == JSON.stringify(control); }) ){
            return;
        } else {
            controlStack.push(control);
            
            while(controlStack.length != 0){
                let currentState = controlStack.pop();
                visitedArray.push(currentState); 
                // console.log('Atual:');           
                // console.log(currentState);
                let fromNode = currentState.from;
                let currentDuty = currentState.duty;
                
                //check for success entry
                if(currentDuty == ''){
                    //Final node
                    if(finalNodes.find((e) => { return e == fromNode; })){
                        success = true;
                        return;
                    }
                }

                //do a list of possible paths
                let canIgoTo = edgeList[nodesDict[fromNode]].filter((e) => {
                    if(e.with == '#' || e.with == currentDuty[0]) return e;
                })
                    .forEach((pathToGo) => {
                        let control = {
                            from: pathToGo.to,
                            duty: currentDuty
                        };
                        if(pathToGo.with != '#'){ // if this path consume one letter
                            control.duty = control.duty.slice(1,);
                        }
                     
                        if( visitedArray.find((e) => { return JSON.stringify(e) == JSON.stringify(control) }) ){
                            return;
                        }

                        controlStack.push(control);
                    });
                // console.log('\nPilha:');
                // console.log(controlStack);
                // console.log('\nVisitado:');
                // console.log(visitedArray);
                // console.log('\n_________________________\n:');
                // readLine.question('');
            }
        }
    });
    
    return success ? 'Sim' : 'Não'; 
};

module.exports = runInterpreter;