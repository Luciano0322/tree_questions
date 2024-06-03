export function getUniqueNumber(items) {
  const uniqueValues = new Set(items);
  uniqueValues.forEach((el) => console.log(el));
  return [...uniqueValues];
}