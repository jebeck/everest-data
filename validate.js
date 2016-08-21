const tv4 = require('tv4');

const data = require('./died-climbing-Everest.json');
const schema = require('./schema.json');

const valid = tv4.validate(data, schema);

if (valid) {
  console.log('Data valid :)');
  console.log();
  process.exit(0);
}
console.warn('Data invalid :(');
console.log();
process.exit(1);
