process.stdin.setEncoding('utf-8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {

  if (input) {
    process.stdout.write(`Your name is: ${input}`);
  }

  process.stdin.end();
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
