import { IPubcompPacket, IPubrecPacket } from "mqtt";
import { connectionBroker } from "../connections/broker";

const client = connectionBroker();
let contador = 0;

export function publishRain(mm: number) {
  const message = `Chovendo, ${mm}mm [${new Date().toLocaleTimeString()}]`;

  console.log(`Publicando: ${message}`);

  client.publish("iot.rain", message, { qos: 2 }, (error: Error) => {
    if (error) {
      console.error("Erro ao publicar mensagem:", error);
      client.publish("iot.error", error.message);
    } else {
      console.log("publisher/PUBLISH -> BROKER ");
    }
  });

  client.removeAllListeners("packetreceive");

  client.on("packetreceive", (packet: IPubrecPacket | IPubcompPacket) => {
    if (packet.cmd === "pubrec" && packet.messageId) {
      console.log(
        "broker/PUBREC -> PUBLISHER | (Broker confirmou a mensagem) " +
          packet.cmd
      );

      console.log(
        "publisher/PUBREL -> BROKER | (Respondendo que confirmou a mensagem)"
      );
    }

    if (packet.cmd === "pubcomp") {
      console.log(
        "subscriber/PUBCOMP -> PUBLISHER | (Publicação QoS 2 concluída) " +
          packet.cmd
      );
    }
  });
}
