fs = require('fs');
let result = {};
fs.readFile('./syllables.txt', 'utf-8', function (err, data) {
    data.split("\n").forEach(label => {
        result[label] = 0;
    });
    fs.writeFile('./index.html', JSON.stringify(result) , 'utf8', function (err) {

    })
});
console.log('Done');
