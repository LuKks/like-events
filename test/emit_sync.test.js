const t = require('tap');
const LikeEmitter = require('../index.js');
const emitter = new LikeEmitter();

emitter.on('update', function () {
  return true;
});

emitter.on('update', function () {
  return false;
});

emitter.on('update', function () {
  return true;
});

let results = emitter.emitSync('update');

t.strictSame(results, [true, false, true]);
