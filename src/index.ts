import { publishGas } from "./publish/mqttGas";
import {
  publishHumidityHigh,
  publishHumidityLow,
  publishHumidityMedium,
} from "./publish/mqttHumidity";
import { publishRain } from "./publish/mqttRain";
import { publishTemperature } from "./publish/mqttTemperature";
import { itsGas } from "./sensores/gas";
import { itsHumidity } from "./sensores/humidity";
import { itsRaining } from "./sensores/rain";
import { itsTemperature } from "./sensores/temperature";
import { connectionBroker } from "./connections/broker";

const client = connectionBroker();
setInterval(() => {
  try {
    const rain = itsRaining();
    const temperature = itsTemperature().grau;
    const gas = itsGas();
    const umidade = itsHumidity().umidade;

    if (umidade >= 60) {
      publishHumidityHigh(umidade);
    } else if (umidade <= 20) {
      publishHumidityLow(umidade);
    } else {
      publishHumidityMedium(umidade);
    }

    if (rain.rain) {
      publishRain(rain.mm);
    }

    publishTemperature(temperature);
    publishGas(gas.name, gas.ppm);
  } catch (error) {
    client.publish("iot.error", error);
  }
}, 3 * 1000);
