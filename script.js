let csvData = {};

fetch('data.csv')
  .then(response => response.text())
  .then(text => {
    const lines = text.trim().split('\n');
    for (let i = 1; i < lines.length; i++) {
      const [key, value] = lines[i].split(',');
      csvData[key] = value;
    }
  });

function searchCSV() {
  const input = document.getElementById('searchInput').value.trim();
  const result = csvData[input] || '該当なし';
  document.getElementById('result').textContent = `${input}さんの年齢は：${result}`;
}
