const copyButton = document.getElementById('copy-citation');
const copyText = copyButton.querySelector('.copy-text');

copyButton.addEventListener('click', async () => {
  const bibtex = document.getElementById('bibtex-code');
  try {
    await navigator.clipboard.writeText(bibtex.textContent.trim());
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(bibtex);
    selection.removeAllRanges();
    selection.addRange(range);
    const copied = document.execCommand('copy');
    selection.removeAllRanges();
    if (!copied) {
      copyText.textContent = 'Select text to copy';
      return;
    }
  }
  copyText.textContent = 'Copied!';
  window.setTimeout(() => { copyText.textContent = 'Copy'; }, 2000);
});
