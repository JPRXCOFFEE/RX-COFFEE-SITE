
function updateSummary() {
  const inputs = document.querySelectorAll('fieldset.item-grid input[type="number"]');
  let total = 0;
  const lines = [];
  inputs.forEach(inp => {
    const qty = parseInt(inp.value, 10) || 0;
    const name = inp.dataset.item;
    const price = parseFloat(inp.dataset.price);
    if (qty > 0) {
      const lineTotal = qty * price;
      total += lineTotal;
      lines.push(`${qty} x ${name} (R${price}) = R${lineTotal}`);
    }
  });

  const summaryText = document.getElementById('summary-text');
  const grandTotal = document.getElementById('grand-total');
  const hidden = document.getElementById('order-summary-hidden');

  if (lines.length === 0) {
    summaryText.textContent = 'No items selected yet.';
    hidden.value = '';
  } else {
    summaryText.innerHTML = lines.join('<br>');
    hidden.value = lines.join('
') + `
TOTAL: R${total}`;
  }
  grandTotal.textContent = total.toString();
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('fieldset.item-grid input[type="number"]');
  inputs.forEach(inp => inp.addEventListener('input', updateSummary));
  updateSummary();

  const form = document.getElementById('order-form');
  form.addEventListener('submit', (e) => {
    updateSummary();
    const hidden = document.getElementById('order-summary-hidden');
    const name = document.getElementById('name');
    if (!hidden.value) {
      // Require at least one item or a note
      const notes = document.getElementById('notes').value.trim();
      if (!notes) {
        e.preventDefault();
        alert('Please add at least one item to your order or include a note.');
      }
    }
    if (!form.action || form.action.includes('YOUR_FORM_ID')) {
      alert('Reminder: Replace YOUR_FORM_ID in the form action with your Formspree ID.');
    }
  });
});
