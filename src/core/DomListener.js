import { capitalize } from './utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) throw new Error('No $root provided for DomListener!');
    this.$root = $root;
    this.listenters = listeners;
  }

  initDOMListeners() {
    this.listenters.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(`Method ${method} is not implemented in ${this.name || ''} component`);
      }
      this.$root.on(listener, this[method].bind(this));
    });
  }

  removeDOMListeners() {
  }

}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
