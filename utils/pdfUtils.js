export async function exportToPDF(title, clauses) {
  if (typeof window === 'undefined') return;

  const html2pdf = (await import('html2pdf.js')).default;

  const container = document.createElement('div');
  container.style.padding = '20px';

  const clauseList = Object.entries(clauses)
    .map(([k, v]) => `<li><strong>${k}</strong> : ${v}</li>`)
    .join('');

  container.innerHTML = `
    <h1 style="text-align:center;">Contrat informatique</h1>
    <h2>${title}</h2>
    <ul style="margin-top: 20px;">
      ${clauseList}
    </ul>
    <p style="margin-top:30px;">Signature du client : _________________________</p>
  `;

  html2pdf()
    .from(container)
    .set({
      margin: 0.5,
      filename: title.replace(/\\s+/g, '_') + '.pdf',
      html2canvas: {},
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    })
    .save();
}