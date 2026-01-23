import { calculateMetrics, getNumericFields } from './dataProcessor.js';
import { renderChart } from './chartManager.js';
import { generatePDF } from './pdfGenerator.js';

const fileInput = document.getElementById('fileInput');
const sumEl = document.getElementById('sum');
const averageEl = document.getElementById('average');
const countEl = document.getElementById('count');
const exportBtn = document.getElementById('exportPdf');
const exportCsvBtn = document.getElementById('exportCsv');
const fieldSelector = document.getElementById('fieldSelector');
const chartTypeSelector = document.getElementById('chartType');
const tableContainer = document.getElementById('tableContainer');

const showSum = document.getElementById('showSum');
const showAverage = document.getElementById('showAverage');
const showCount = document.getElementById('showCount');

let currentMetrics = null;
let currentData = [];
let currentField = null;

fileInput.addEventListener('change', handleFileUpload);
exportBtn.addEventListener('click', handleExportPDF);
exportCsvBtn.addEventListener('click', handleExportCSV);
showSum.addEventListener('change', updateDisplayedMetrics);
showAverage.addEventListener('change', updateDisplayedMetrics);
showCount.addEventListener('change', updateDisplayedMetrics);
fieldSelector.addEventListener('change', handleFieldChange);
chartTypeSelector.addEventListener('change', updateChart);

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const jsonData = JSON.parse(e.target.result);
    currentData = jsonData;

    populateFieldSelector(jsonData);
    renderTable(jsonData);

    currentField = fieldSelector.value;
    updateMetricsAndChart();
  };

  reader.readAsText(file);
}

function populateFieldSelector(data) {
  const numericFields = getNumericFields(data);
  fieldSelector.innerHTML = '';

  numericFields.forEach(field => {
    const option = document.createElement('option');
    option.value = field;
    option.textContent = field;
    fieldSelector.appendChild(option);
  });
}

function handleFieldChange() {
  currentField = fieldSelector.value;
  updateMetricsAndChart();
}

function updateMetricsAndChart() {
  if (!currentData.length || !currentField) return;

  const metrics = calculateMetrics(currentData, currentField);
  currentMetrics = metrics;

  updateDisplayedMetrics();
  updateChart();
}

function updateDisplayedMetrics() {
  if (!currentMetrics) return;

  sumEl.textContent = showSum.checked ? currentMetrics.sum : '-';
  averageEl.textContent = showAverage.checked ? currentMetrics.average.toFixed(2) : '-';
  countEl.textContent = showCount.checked ? currentMetrics.count : '-';
}

function updateChart() {
  if (!currentMetrics || !currentData.length) return;

  const labels = currentData.map((item, index) => item.name || `Item ${index + 1}`);
  const chartType = chartTypeSelector.value;
  renderChart(labels, currentMetrics.values, chartType);
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

  generatePDF(currentMetrics, options, currentField);
}

function handleExportCSV() {
  if (!currentData.length) {
    alert('Importe um arquivo JSON primeiro!');
    return;
  }

  const headers = Object.keys(currentData[0]);
  const rows = currentData.map(item => headers.map(h => item[h]));

  let csvContent = headers.join(',') + '\n';
  rows.forEach(row => {
    csvContent += row.join(',') + '\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'dados_exportados.csv';
  link.click();
}

function renderTable(data) {
  if (!data.length) return;

  const headers = Object.keys(data[0]);
  let tableHTML = '<table><thead><tr>';

  headers.forEach(header => {
    tableHTML += `<th>${header}</th>`;
  });

  tableHTML += '</tr></thead><tbody>';

  data.forEach(item => {
    tableHTML += '<tr>';
    headers.forEach(header => {
      tableHTML += `<td>${item[header]}</td>`;
    });
    tableHTML += '</tr>';
  });

  tableHTML += '</tbody></table>';

  tableContainer.innerHTML = tableHTML;
}
