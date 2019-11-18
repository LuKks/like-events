const t = require('tap');
const LikeEmitter = require('../index.js');
const emitter = new LikeEmitter();

emitter.on('change', async function () {
  return true;
});

emitter.on('change', async function () {
  return false;
});

emitter.on('change', async function () {
  return true;
});

emitter.emitAll('change').then(results => {
  t.strictSame(results, [true, false, true]);
});
