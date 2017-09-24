'use strict';

const buildEdges = (af) => {
    let edgeList = [];
    let nodesDict = {};
    //make node Dict
    af[0].map((e, index) => {
        nodesDict[e] = index;
        edgeList.push(new Array());
    });
    
    //create edge List
    af[2].forEach((edge) => {
        let newEdge = {
            from : edge[0],
            with: edge[1],
            to: edge[2]
        }
        edgeList[nodesDict[edge[0]]].push(newEdge);
    });
    return { edgeList: edgeList, nodesDict: nodesDict };
}
module.exports = buildEdges;