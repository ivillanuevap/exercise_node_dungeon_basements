let xlsx = require('node-xlsx');
let obj = xlsx.parse('./dungeon_basements.xlsx');

var finalCell = null;
var openedPaths = [];//Checked coordinates
var steps = [];//Chosen path
var goAhead = false;//Go ahead in search of the exit path
var debugFindingPath = false;//Console log variables
var data = null;//Sheet data of xlsx

for (let sheet = 0; sheet < obj.length; sheet++) {
    let hasExit = checkBasement(obj[sheet].data);
    console.log(obj[sheet].name, "\t", hasExit ? 'Has exit': 'Dead end');
}

function checkBasement(objData) {
    data = objData;
    let rows;//TODO - Get data.length for retrieve rows value
    let cols;//TODO - Get cols value, size o some row

    finalCell = { 'x': rows, 'y':  cols};
    openedPaths = [];
    steps = [];
    goAhead = false;

    //TODO - findPath of initial state (0,0)

    if(debugFindingPath) {
        steps.reverse();
        console.log("finalCell: ", finalCell);
        console.log("data: ", data);
        console.log("goAhead: " + goAhead);
        console.log("openedPaths: ", openedPaths);
        console.log("steps: ", steps);
    }
    return goAhead;
}

function findPath(x, y) {
    let coordinate = "(" + x + "," + y + ")";
    if(coordinate == "(" + (finalCell.x-1) + "," + (finalCell.y-1) + ")") {
        //TODO - Push coordinate into openedPaths
        //TODO - Push coordinate into steps
        //TODO - return goAhead = true
    }
    if(data[x][y] == 1 && openedPaths.includes(coordinate) == false && !goAhead) {
        //Validate all 4 possible steps
        if(isValid(( x - 1 ), y) && data[( x - 1 )][y] == 1) {
            //TODO - Push coordinate into openedPaths
            //TODO - findPath of x and y value checked in condition
            //TODO - pushStep of x and y value
        }
        if(isValid(x, ( y - 1 )) && data[x][( y - 1 )] == 1) {
            //TODO - Push coordinate into openedPaths
            //TODO - findPath of x and y value checked in condition
            //TODO - pushStep of x and y value
        }
        if(isValid(( x + 1 ),y) && data[( x + 1 )][y] == 1) {
            //TODO - Push coordinate into openedPaths
            //TODO - findPath of x and y value checked in condition
            //TODO - pushStep of x and y value
        }
        if(isValid(x, ( y + 1 )) && data[x][( y + 1 )] == 1) {
            //TODO - Push coordinate into openedPaths
            //TODO - findPath of x and y value checked in condition
            //TODO - pushStep of x and y value
        }
    } else {
        return false;
    }
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