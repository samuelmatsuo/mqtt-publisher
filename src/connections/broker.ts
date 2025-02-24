import { IClientOptions, QoS } from "mqtt";
const mqtt = require("mqtt");
const dotenv = require("dotenv");
dotenv.config();

export function connectionBroker() {
  const options: IClientOptions = {
    host: process.env.MQTT_BROKER_URL,
    port: 8883,
    protocol: "mqtts",
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
    will: {
      topic: "iot.rain",
      payload: "iot.rain caiu",
      qos: 2,
      retain: true,
    },
  };
  const client = mqtt.connect(options);

  client.on("connect", () => {
    console.log("Connectado ao broker MQTT");
  });

  client.on("error", (error: string) => {
    client.publish("iot.error", error);
  });

  client.on("offline", () => {
    client.publish("iot.off", "Cliente está offline!");
  });

  return client;
}
