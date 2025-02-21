export function randomArray(array: string[]): string {
  return array[Math.floor(Math.random() * array.length)];
}
