const EventEmitter = require('events');

class LikeEmitter extends EventEmitter {
  emitSync (event, ...args) {
    let listeners = this.rawListeners(event);
    let results = [];
    for (let i = 0; i < listeners.length; i++) {
      results.push(listeners[i].apply(this, args));
    }
    return results;
  }

  emitAll (event, ...args) {
    let listeners = this.rawListeners(event);
    let promises = [];
    for (let i = 0; i < listeners.length; i++) {
      promises.push(listeners[i].apply(this, args));
    }
    return Promise.all(promises);
  }

  async emitSeq (event, ...args) {
    let listeners = this.rawListeners(event);
    let results = [];
    for (let i = 0; i < listeners.length; i++) {
      results.push(await listeners[i].apply(this, args));
    }
    return results;
  }
}

module.exports = LikeEmitter;
