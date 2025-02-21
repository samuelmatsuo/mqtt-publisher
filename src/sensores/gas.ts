import { randomArray } from "../functions/randonArrays";

interface GasData {
  name: string;
  ppm: number;
}

export function itsGas(): GasData {
  const gases = [
    "GLP",
    "Metano",
    "Propano",
    "Butano",
    "Hidrogênio",
    "Álcool",
    "Gás Natural",
  ];

  const gasPpm = Math.floor(Math.random() * 10000);

  const randomGas = randomArray(gases);

  return {
    name: randomGas,
    ppm: gasPpm,
  };
}
