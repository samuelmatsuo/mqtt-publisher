import { connectionBroker } from "../connections/broker";

const client = connectionBroker();

export function publishRain(mm: number) {
  client.publish(
    "iot.rain",
    `Chovendo, ${mm}mm [${new Date().toLocaleTimeString()}] `
  );
}
