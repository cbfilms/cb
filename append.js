  var fs = require('fs');

  fs.appendFile('/users.txt', 'hello', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
