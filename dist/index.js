var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/index.js
__export(exports, {
  Counter: () => Counter_default,
  Metronome: () => Metronome_default,
  SignalTower: () => SignalTower_default,
  Timer: () => Timer_default
});

// src/Counter/Counter.js
var import_events = __toModule(require("events"));
var Counter = class extends import_events.default {
  constructor(initialValue = 0) {
    super();
    this.value = initialValue;
  }
  countUp() {
    this.value++;
    this.emit("change", this.value);
  }
  countDown() {
    this.value--;
    this.emit("change", this.value);
  }
  setCountTo(value) {
    this.value = value;
    this.emit("change", this.value);
  }
};
var Counter_default = Counter;

// src/Metronome/Metronome.js
var import_events2 = __toModule(require("events"));
var Metronome = class extends import_events2.default {
  constructor(frequency = 1e3) {
    super();
    this.frequency = frequency;
    this.interval = void 0;
  }
  start() {
    if (this.interval) {
      return;
    }
    this.emit("start", {
      timestamp: Date.now(),
      frequency: this.frequency
    });
    this.interval = setInterval(() => {
      this.emit("tick", {
        timestamp: Date.now(),
        frequency: this.frequency
      });
    }, this.frequency);
  }
  stop() {
    clearInterval(this.interval);
    this.interval = void 0;
    this.emit("stop");
  }
  setFrequency(frequency) {
    if (this.frequency !== frequency) {
      this.frequency = frequency;
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.emit("tick", {
          timestamp: Date.now(),
          frequency: this.frequency
        });
      }, this.frequency);
    }
  }
};
var Metronome_default = Metronome;

// src/SignalTower/SignalTower.js
var import_events3 = __toModule(require("events"));
var SignalTower = class extends import_events3.default {
  constructor() {
    super();
    this.value = void 0;
  }
  send(message) {
    this.value = message;
    this.emit("send", this.value);
  }
};
var SignalTower_default = SignalTower;

// src/Timer/Timer.js
var import_events4 = __toModule(require("events"));
var Timer = class extends import_events4.default {
  constructor(value) {
    super();
    this.value = value;
    this.interval = void 0;
  }
  start() {
    if (this.interval) {
      return;
    }
    this.interval = setInterval(() => {
      this.value++;
      this.emit("change", this.value);
    }, 1e3);
    this.emit("start");
  }
  stop() {
    clearInterval(this.interval);
    this.interval = void 0;
    this.emit("stop");
  }
  reset() {
    this.value = 0;
    this.emit("change", this.value);
    this.emit("reset");
  }
  setValue(value) {
    this.value = value;
    this.emit("change", this.value);
  }
};
var Timer_default = Timer;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Counter,
  Metronome,
  SignalTower,
  Timer
});
