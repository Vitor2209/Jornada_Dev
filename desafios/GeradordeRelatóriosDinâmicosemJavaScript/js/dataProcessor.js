export function calculateMetrics(data, field) {
  const values = data.map(item => Number(item[field]) || 0);

  const sum = values.reduce((acc, val) => acc + val, 0);
  const count = values.length;
  const average = count > 0 ? sum / count : 0;

  return { sum, average, count, values };
}
