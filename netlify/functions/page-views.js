const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join('/tmp', 'page-views.json');

function getData() {
  if (!fs.existsSync(DATA_FILE)) {
    return { count: 0, ips: {} };
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data));
}

exports.handler = async (event) => {
  const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown';
  let data = getData();

  // Remove IPs older than 24 hours
  const now = Date.now();
  for (const [key, value] of Object.entries(data.ips)) {
    if (now - value > 24 * 60 * 60 * 1000) {
      delete data.ips[key];
    }
  }

  let incremented = false;
  if (!data.ips[ip]) {
    data.count += 1;
    data.ips[ip] = now;
    incremented = true;
    saveData(data);
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({ count: data.count, incremented }),
  };
}; 