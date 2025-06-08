const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');
const warning = document.getElementById('warning');
const maxLength = 200;

textarea.addEventListener('input', () => {
  const length = textarea.value.length;
  charCount.textContent = `${length}/${maxLength} characters`;

  if (length >= maxLength) {
    warning.classList.remove('hidden');
    textarea.value = textarea.value.substring(0, maxLength); // Enforce limit
  } else {
    warning.classList.add('hidden');
  }
});
