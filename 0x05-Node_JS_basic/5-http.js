const http = require('http');
const fs = require('fs');
const path = require('path');

const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/plain');
      res.write('Hello Holberton School!');
      res.end();
    } else if (req.url === '/students') {
      res.setHeader('Content-Type', 'text/plain');

      const dbPath = path.join(__dirname, 'database.csv');

      countStudents(dbPath)
        .then(data => {
          res.write('This is the list of our students\n');
          res.write(data);
          res.end();
        })
        .catch(error => {
          res.write('Cannot load the database\n');
          res.end();
        });
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.write('Not Found');
      res.end();
    }
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Method Not Allowed');
    res.end();
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
