const t = require('tap');
const LikeEmitter = require('../index.js');
const emitter = new LikeEmitter();

emitter.on('processing', async function (arr) {
  arr.push(49);
  await sleep(100);
  return true;
});

emitter.on('processing', async function (arr) {
  arr.push(51);
  return false;
});

let arr = [];
emitter.emitSeq('processing', arr).then(results => {
  t.strictSame(results, [true, false]);
  t.strictSame(arr, [49, 51]);
});

// util
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}