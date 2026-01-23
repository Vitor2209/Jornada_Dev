export async function generatePDF(metrics, options) {
  const { PDFDocument, StandardFonts, rgb } = PDFLib;

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const { width, height } = page.getSize();
  const fontSize = 18;

  page.drawText('Relatório de Métricas', {
    x: 50,
    y: height - 50,
    size: 24,
    font,
    color: rgb(0, 0, 0)
  });

  let yPosition = height - 100;

  if (options.showSum) {
    page.drawText(`Soma: ${metrics.sum}`, { x: 50, y: yPosition, size: fontSize, font });
    yPosition -= 30;
  }

  if (options.showAverage) {
    page.drawText(`Média: ${metrics.average.toFixed(2)}`, { x: 50, y: yPosition, size: fontSize, font });
    yPosition -= 30;
  }

  if (options.showCount) {
    page.drawText(`Contagem: ${metrics.count}`, { x: 50, y: yPosition, size: fontSize, font });
    yPosition -= 30;
  }

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}
