var a = Math.floor(Math.random() * 10);
var b = Math.floor(Math.random() * 100);
function random(base) {
  if (base && base % 1 === 0) {
    return Math.floor(Math.random() * base);
  } else {
    return 0;
  }
}

// const data = require('sam-test-data')

console.log(random(),a,b);

var index = {

};
// module.exports = {}

export { index as default };
