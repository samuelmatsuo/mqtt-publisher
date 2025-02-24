import { IPubackPacket } from "mqtt";
import { connectionBroker } from "../connections/broker";

const client = connectionBroker();

export function publishTemperature(graus: number) {
  const message = `Está ${graus}°C [${new Date().toLocaleTimeString()}] `;

  console.log(`Publicando: ${message}`);
  client.publish("iot.temperature", message, { qos: 1 }, (error: Error) => {
    if (error) {
      console.error("Erro ao publicar mensagem:", error);
      client.publish("iot.error", error.message);
    } else {
      console.log("publisher/PUBLISH -> BROKER ");
    }
  });

  client.removeAllListeners("packetreceive");
  client.on("packetreceive", (packet: IPubackPacket) => {
    if (packet.cmd === "puback" && packet.messageId) {
      console.log(
        "broker/PUBACK -> PUBLISHER | (Publicação QoS 1 concluída) " +
          packet.cmd
      );
    }
  });
}
