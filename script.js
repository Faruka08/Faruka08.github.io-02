
let csvData = {};



fetch('data.csv')
  .then(response => response.text())
  .then(text => {
    const lines = text.trim().split('\n');
    const dropdown = document.getElementById('dropdown');
    let items = [];
    for (let i = 1; i < lines.length; i++) {
      const [key, value] = lines[i].split(',');
      csvData[key] = value;
      items.push(key);
    }
    // 昇順ソート
    items.sort((a, b) => a.localeCompare(b, 'ja'));
    if (dropdown) {
      // 既存のoption（先頭以外）をクリア
      while (dropdown.options.length > 1) {
        dropdown.remove(1);
      }
      for (const key of items) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key;
        dropdown.appendChild(option);
      }
    }
  });



function searchCSV() {
  // ドロップダウンの値を使って検索
  const dropdown = document.getElementById('dropdown');
  const input = dropdown ? dropdown.value : '';
  const result = csvData[input] || '圏外';
  document.getElementById('result').textContent = `${input}のランキングは：${result}`;
}

// ドロップダウン選択時は何もしません（検索ボタンでのみ検索）
function onDropdownChange() {
  // 何もしません
}
