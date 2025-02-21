import { connectionBroker } from "../connections/broker";

const client = connectionBroker();

export function publishTemperature(graus: number) {
  client.publish(
    "iot.temperature",
    `está ${graus}°C [${new Date().toLocaleTimeString()}] `,
    { qos: 1 }
  );
}
