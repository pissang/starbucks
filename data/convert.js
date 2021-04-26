var csv = require('csv');
var fs = require('fs');

var str = fs.readFileSync('All_Starbucks_Locations_in_the_World.csv', 'utf-8');

csv.parse(str, function (err, data) {
    fs.writeFileSync('starbucks.json', JSON.stringify(data), 'utf-8');
});