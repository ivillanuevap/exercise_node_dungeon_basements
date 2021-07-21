let xlsx = require('node-xlsx');
let obj = xlsx.parse('./dungeon_basements.xlsx');

for (let sheet = 0; sheet < obj.length; sheet++) {
    //TODO - Write a function checkBasement to get to the stairs by going through the basement of the dungeon in the fewest steps possible.
    //TODO - If it has exit then put in Console.log "Has exit", otherwise "Dead end"
}
