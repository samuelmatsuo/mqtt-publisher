interface TemperatureData {
  grau: number;
}

export function itsTemperature(): TemperatureData {
  let graus = Math.floor(Math.random() * 41);
  return {
    grau: graus,
  };
}
