
//https://www.npmjs.com/package/bcrypt


const bcrypt = require('bcrypt');

start = 'asdfghjkl';
var hashed = [];
// hash - password, rounds to salt, starting hash
bcrypt.hash( start, 10, (err, hash) =>{
    hashed.push(hash);
    console.log(hash);
});
console.log(hashed);

//async
bcrypt.compare(start, hashed, function(err, res) {
    if(res) {
     //match
     console.log('matches');
    } else {
     //no match
     console.log('does not match');
    }
  });

//sync
let hash = bcrypt.hashSync(start, 10);
// Store hash in database
if(bcrypt.compareSync(start, hash)) {
    console.log('sync match')
   } else {
    console.log('sync does not match')
   }