let xlsx = require('node-xlsx');
let obj = xlsx.parse('./dungeon_basements.xlsx');

var finalCell = null;
var openedPaths = [];
var steps = [];
var goAhead = false;
var debugFindingPath = false;
var data = null;

for (let sheet = 0; sheet < obj.length; sheet++) {
    let hasExit = checkBasement(obj[sheet].data);
    console.log(obj[sheet].name, "\t", hasExit ? 'Has exit': 'Dead end');
}

function checkBasement(objData) {
    data = objData;
    let rows;//TODO - Get data.length for retrieve rows value
    let cols;//TODO - Get cols value, size o some row

    finalCell = { 'x': rows, 'y':  cols};
    //TODO - Reset varibles(openedPaths, steps, goAhead)
    //TODO - findPath of initial state (0,0)

    if(debugFindingPath) {
        //TODO(optional) - console.log variables (finalCell, data, goAhead, openedPaths, steps)
    }
    return goAhead;
}

function findPath(x, y) {
    let coordinate = "(" + x + "," + y + ")";
    //TODO - if coordinate is equals to finallCell coordinate then
        //TODO - Push coordinate into openedPaths
        //TODO - Push coordinate into steps
        //TODO - return goAhead = true

    //TODO - if data[x][y] is cell with path(1) and openedPaths does not includes coordinate and goAhead = false then
        //TODO - Validate all 4 possible steps
        //TODO - if is valid left coordinate and exists in data then
            //TODO - Push coordinate into openedPaths
            //TODO - findPath of x and y value checked in condition
            //TODO - pushStep of x and y value
        //TODO - if is valid up coordinate and exists in data then do the same as in the left validation
        //TODO - if is valid right coordinate and exists in data then do the same as in the left validation
        //TODO - if is valid down coordinate and exists in data then do the same as in the left validation
    //TODO - else return false
}

function pushStep(x, y) {
    let coordinate = "(" + x + "," + y + ")";
    if(goAhead && steps.includes(coordinate) == false){
        steps.push(coordinate);
    }
}
function isValid(x,y) {
    if(x >= 0 && y >= 0 && x < finalCell.x && y < finalCell.y){
        return true;
    }
    return false;
}