obj.EventEmitter = function() {};

obj.EventEmitter.prototype = Object.create(new Object(), {
    'on' : {
        'value' : function (event, handler) {
            if (!this.listeners) this.listeners = {};
            if (!this.listeners[event]) this.listeners[event] = [];
            this.listeners[event].push(handler);
            return this;
        }
    }
    });