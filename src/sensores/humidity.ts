interface HumidityData {
  umidade: number;
}

export function itsHumidity(): HumidityData {
  let RandonUmidade = Math.floor(Math.random() * 100);
  return {
    umidade: RandonUmidade,
  };
}
