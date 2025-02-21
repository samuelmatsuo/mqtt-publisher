import { connectionBroker } from "../connections/broker";

const client = connectionBroker();

export function publishHumidityHigh(umidade: number) {
  client.publish(
    "iot.humidity",
    `umidade do solo está alta: ${umidade}% [${new Date().toLocaleTimeString()}] `
  );
}

export function publishHumidityMedium(umidade: number) {
  client.publish(
    "iot.humidity",
    `umidade do solo está baixa: ${umidade}% [${new Date().toLocaleTimeString()}] `
  );
}

export function publishHumidityLow(umidade: number) {
  client.publish(
    "iot.humidity",
    `umidade do solo: ${umidade}% [${new Date().toLocaleTimeString()}] `,
    { qos: 2 }
  );
}
