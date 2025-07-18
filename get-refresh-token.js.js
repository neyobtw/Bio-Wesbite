const https = require('https');
const querystring = require('querystring');

// === FILL THESE IN ===
const client_id = '32a0a263031a46c6a130f7056006d27e';
const client_secret = 'c82ca0d8e62d47a6b73800caa6c65e23';
const code = 'AQCQtcXxYenEiLKvVH6Bqftc4_V6rcKeRcglVQr93DAGeggQp0HtMbB_6t5e0iRoZbv8SWo3_TjwpN1RZvUHdwGENlm4EiAuMwwrDzOzzPzH8unih2zruMOpNi7H41EQwY6lQJqMa36irXagQmNNthmYigIcZ6dTEfyeYxxPgkf5trebly2LavqfZ7hO0h78gRGbo_WD4jff_eC1S0CxvfgpogCxtH1e9_B_sAHwYje1jaQ5mEMwOfdhFiYHnMzUFDTKy2Sm55u60-NdILGL0w'; // <-- paste your code here
const redirect_uri = 'https://gleaming-vacherin-b58b1e.netlify.app/callback';
// =====================

const data = querystring.stringify({
  grant_type: 'authorization_code',
  code,
  redirect_uri,
});

const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const options = {
  hostname: 'accounts.spotify.com',
  path: '/api/token',
  method: 'POST',
  headers: {
    'Authorization': `Basic ${auth}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': data.length,
  },
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(body);
      if (json.refresh_token) {
        console.log('Your refresh token:', json.refresh_token);
      } else {
        console.error('Error:', json);
      }
    } catch (e) {
      console.error('Failed to parse response:', body);
    }
  });
});

req.on('error', (e) => {
  console.error('Request error:', e);
});

req.write(data);
req.end();