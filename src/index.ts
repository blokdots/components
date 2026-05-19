export {
  default as getBlokdotsSocketIOServer,
  getBlokdotsSocketIOServerAddress,
  BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT,
} from "./integrations/BlokdotsSocketIOServer";
export { default as FigmaIntegration } from "./integrations/FigmaIntegration";
export type { ReactionMessage as FigmaReactionMessage } from "./integrations/FigmaIntegration";
export { default as SocketIOIntegration } from "./integrations/SocketIOIntegration";

export { default as Counter } from "./control/Counter";
export { default as SignalTower } from "./control/SignalTower";
export { default as Timer } from "./control/Timer";
export { default as Metronome } from "./control/Metronome";

export {
  Accelerometer,
  type AccelerometerOptions,
  type AccelerometerValue,
} from "./components/Accelerometer";
export {
  Barometer,
  type BarometerOptions,
  type BarometerValue,
} from "./components/Barometer";
export { Button } from "./components/Button";
export {
  Buzzer,
  NOTE_HZ,
  type BuzzerOptions,
  type Note,
  type SongStep,
} from "./components/Buzzer";
export { CO2Sensor, type CO2SensorOptions } from "./components/CO2Sensor";
export {
  ColorSensor,
  type ColorSensorOptions,
  type ColorSensorValue,
} from "./components/ColorSensor";
export { Encoder, type EncoderOptions } from "./components/Encoder";
export {
  HapticTrack,
  Hapticlabs,
  type HapticlabsOptions,
  type HapticlabsValue,
} from "./components/Hapticlabs";
export {
  Joystick,
  type JoystickOptions,
  type JoystickValue,
} from "./components/Joystick";
export { Led } from "./components/Led";
export {
  MotorDriver,
  type MotorDriverOptions,
  type MotorDriverValue,
} from "./components/MotorDriver";
export { LedDimmable } from "./components/LedDimmable";
export { LCD, type LCDOptions, type LCDValue } from "./components/LCD";
export {
  LEDStrip,
  type LEDStripOptions,
  type LEDStripValue,
} from "./components/LEDStrip";
export {
  LEDMatrix,
  type LEDMatrixOptions,
  type LEDMatrixValue,
} from "./components/LEDMatrix";
export { OLED, type OLEDOptions, type OLEDValue } from "./components/OLED";
export { Potentiometer } from "./components/Potentiometer";
export {
  ServoMotor,
  type ServoMotorOptions,
  type SweepOptions,
} from "./components/ServoMotor";
export {
  StepperMotor,
  type StepperMotorOptions,
} from "./components/StepperMotor";
export {
  SunlightSensor,
  type SunlightSensorOptions,
  type SunlightSensorValue,
} from "./components/SunlightSensor";

export { default as utils } from "./common/utils";
export * from "./common/utils";
export { default as Board } from "./Board";
export { autoDetectPort } from "./Board/autoDetectPort";

export {
  ComponentBase,
  type ComponentBaseOptions,
  DigitalActor,
  AnalogActor,
  AnalogSensor,
  I2cComponentBase,
  type I2cComponentBaseOptions,
} from "./componentBases";

export * from "./common/constants";
