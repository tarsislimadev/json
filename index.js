document.getElementById('textarea').addEventListener('input', (event) => {
  const value = event.target.value;
  try {
    const json = JSON.parse(value);
    document.getElementById('pre').textContent = JSON.stringify(json, null, 2);
  } catch (error) {
    document.getElementById('pre').textContent = '';
  }
});
