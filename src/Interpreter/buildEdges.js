'use strict';

let edgeList = [];
let nodeDict = {};
const buildEdges = (af) => {
    //make node Dict
    af[0].map((e, index) => {
        nodeDict[e] = index;
        edgeList.push(new Array());
    });
    
    //create edge List
    af[2].forEach((edge) => {
        let newEdge = {
            from : edge[0],
            with: edge[1],
            to: edge[2]
        }
        edgeList[nodeDict[edge[0]]].push(newEdge);
    });
    return edgeList;
}
module.exports = buildEdges;