import { calculateMetrics } from './dataProcessor.js';
import { renderChart } from './chartManager.js';
import { generatePDF } from './pdfGenerator.js';

const fileInput = document.getElementById('fileInput');
const sumEl = document.getElementById('sum');
const averageEl = document.getElementById('average');
const countEl = document.getElementById('count');
const exportBtn = document.getElementById('exportPdf');

const showSum = document.getElementById('showSum');
const showAverage = document.getElementById('showAverage');
const showCount = document.getElementById('showCount');

let currentMetrics = null;

fileInput.addEventListener('change', handleFileUpload);
exportBtn.addEventListener('click', handleExportPDF);
showSum.addEventListener('change', updateDisplayedMetrics);
showAverage.addEventListener('change', updateDisplayedMetrics);
showCount.addEventListener('change', updateDisplayedMetrics);

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const jsonData = JSON.parse(e.target.result);

    // Assumindo que o campo numérico se chama "value"
    const field = 'value';

    const metrics = calculateMetrics(jsonData, field);
    currentMetrics = metrics;

    updateDisplayedMetrics();

    const labels = jsonData.map((_, index) => `Item ${index + 1}`);
    renderChart(labels, metrics.values);
  };

  reader.readAsText(file);
}

function updateDisplayedMetrics() {
  if (!currentMetrics) return;

  sumEl.textContent = showSum.checked ? currentMetrics.sum : '-';
  averageEl.textContent = showAverage.checked ? currentMetrics.average.toFixed(2) : '-';
  countEl.textContent = showCount.checked ? currentMetrics.count : '-';
}

function handleExportPDF() {
  if (!currentMetrics) {
    alert('Importe um arquivo JSON primeiro!');
    return;
  }

  const options = {
    showSum: showSum.checked,
    showAverage: showAverage.checked,
    showCount: showCount.checked
  };

  generatePDF(currentMetrics, options);
}
