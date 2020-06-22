import { EventEmitter } from 'events';

type Constructable = new (...args: any[]) => object;

export interface Emitter {
  $on(eventName: string, listener: (...args:any[]) => void) : EventEmitter;
  $off(eventName: string, listener: (...args:any[]) => void) : EventEmitter;
  $emit(eventName: string, ...args: any[]): boolean;
}

export default function Emitter<BC extends Constructable>(Base: BC) {
    return class extends Base implements Emitter {
      events = new EventEmitter();

      /**
       * Adds an event listener for specific event.  Named $on as opposed
       * to on so as not to override existing method in Item
       */
      $on(eventName: string, listener: (...args:any[]) => void) {
        return this.events.on(eventName, listener);
      }

      /**
       * Remove an event listener for specific event.  Named $off as opposed
       * to off so as not to override existing method in Item
       */
      $off(eventName: string, listener: (...args:any[]) => void) {
        return this.events.off(eventName, listener);
      }

      /**
       * Emit an event. Named $emit as opposed emit
       * so as not to override existing method in Item
       */
      $emit(eventName: string, ...args: any[]) {
        this.events.emit('*', eventName, ...args);
        return this.events.emit(eventName, ...args);
      }
    };
}
