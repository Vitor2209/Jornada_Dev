let chartInstance = null;

export function renderChart(labels, values, type = 'bar') {
  const ctx = document.getElementById('chart').getContext('2d');

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type,
    data: {
      labels,
      datasets: [{
        label: 'Valores',
        data: values
      }]
    },
    options: {
      responsive: true
    }
  });
}

