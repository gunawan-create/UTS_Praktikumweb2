const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');

// HTTP server untuk serve file HTML
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
  }
});

// WebSocket server menempel di HTTP server
const wss = new WebSocket.Server({ server });

let clients = new Map(); // Simpan client beserta username

wss.on('connection', (ws) => {
  console.log('Client baru terhubung');

  ws.on('message', (data) => {
    const msg = JSON.parse(data);

    // Jika pesan adalah register username
    if (msg.type === 'join') {
      clients.set(ws, msg.username);
      broadcast({ type: 'system', text: `${msg.username} bergabung ke chat 👋` });

    // Jika pesan chat biasa
    } else if (msg.type === 'chat') {
      const username = clients.get(ws) || 'Anonymous';
      broadcast({ type: 'chat', username, text: msg.text, time: new Date().toLocaleTimeString() });
    }
  });

  ws.on('close', () => {
    const username = clients.get(ws);
    clients.delete(ws);
    if (username) {
      broadcast({ type: 'system', text: `${username} keluar dari chat 👋` });
    }
  });
});

// Kirim pesan ke SEMUA client yang terhubung
function broadcast(data) {
  const json = JSON.stringify(data);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(json);
    }
  });
}

server.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
