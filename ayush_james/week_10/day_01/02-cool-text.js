//readline

const readline = require('readline');
const figlet = require('figlet');
const chalk = require('chalk');

// it is seriously this much trouble

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', function (response) {
  console.log (
    chalk.red(
    figlet.textSync(response, {
      font: 'slant',
      verticalLayout: 'default',
      horizontal_layout: 'default'
    })
    )
  );
  rl.close();
});
