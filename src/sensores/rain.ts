interface RainData {
  mm: number;
  rain: boolean;
}

export function itsRaining(): RainData {
  let mm = Math.floor(Math.random() * 500);
  let random_boolean = Math.random() < 0.5;
  return {
    mm: mm,
    rain: random_boolean,
  };
}
