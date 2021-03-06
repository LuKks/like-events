# like-events

Extends events with async for better flow

![](https://img.shields.io/npm/v/like-events.svg) ![](https://img.shields.io/npm/dt/like-events.svg) ![](https://img.shields.io/badge/tested_with-tap-e683ff.svg) ![](https://img.shields.io/github/license/LuKks/like-events.svg)

```javascript
const LikeEmitter = require('like-events');
const emitter = new LikeEmitter();

emitter.on('change', async function () {
  await sleep(1000);
  return true;
});

emitter.on('change', async function () {
  await sleep(1000);
  return false;
});

// it just takes 1s
emitter.emitAll('change').then(console.log); // [true, false]

// util
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

## Install
```
npm i like-events
```

## Features
#### Description
Extension of native events module (EventEmitter).\
Useful for async operations.

#### Methods
```javascript
like.emitSync(event: String, ...args): Array
like.emitAll(event: String, ...args): Promise->Array
like.emitSeq(event: String, ...args): Promise->Array
```

## Examples
#### emitSync
```javascript
emitter.on('update', function () {
  return true;
});

emitter.on('update', function () {
  return false;
});

console.log(emitter.emitSync('update'));
```
```
[true, false]
```

#### emitAll
```javascript
emitter.on('change', async function () {
  console.log('change A1');
  await sleep(1000);
  console.log('change A2');
  return true;
});

emitter.on('change', async function () {
  console.log('change B1');
  await sleep(1000);
  console.log('change B2');
  return false;
});

console.log(await emitter.emitAll('change'));
```
```
change A1
change B1
sleep +1s
change A2
change B2
[true, false]
```

#### emitSeq
```javascript
emitter.on('processing', async function () {
  console.log('processing A');
  await sleep(1000);
  return 49;
});

emitter.on('processing', async function () {
  console.log('processing B');
  return 51;
});

console.log(await emitter.emitSeq('processing'));
```
```
processing A
sleep +1s
processing B
[49, 51]
```

## Tests
```
npm test
```

## Issues
Feedback, ideas, etc are very welcome so feel free to open an issue.

## License
Code released under the [MIT License](https://github.com/LuKks/like-events/blob/master/LICENSE).
