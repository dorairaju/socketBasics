var moment = require("moment");
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));

// console.log(now.format('x')); //milli seconds i.e. 1/1000 in sec

// console.log(now.valueOf());

console.log(now.format('X'));

console.log(moment.unix(1477501027).format('h:mma'));

var timestamp = 1477500249;
var timestampMoment = moment.utc(timestamp);

console.log("timestampMoment: "+ timestampMoment.local().format('h:mma'));


//now.subtract(1, 'year');

//console.log('one year ago '+now.subtract(1, 'year');



// console.log(now.format());

console.log(now.format('h:mma')); // Oct 5th 2015, 6:45 pm

// console.log(now.format('MMM Do YYYY, h:mm a'));