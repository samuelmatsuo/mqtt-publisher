import { connectionBroker } from "../connections/broker";

const client = connectionBroker();

export function publishGas(name: string, ppm: number) {
  client.publish(
    "iot.gas",
    `${name} detectado, ${ppm}ppm [${new Date().toLocaleTimeString()}] `
  );
}
