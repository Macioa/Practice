const chalk = require('chalk');
const moment = require('moment');
console.log(chalk.blue('hellow world!'));
console.log(chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")));
console.log(chalk.blue(moment().format("DDDo") +" day of the year"));
//console.log(moment().format(S))
console.log(chalk.blue("it is "+`${moment().isDST()? '':'not '}`+"daylight savings time"));
console.log(chalk.blue("it is "+`${moment().isLeapYear()? '':'not '}`+"daylight savings time"));