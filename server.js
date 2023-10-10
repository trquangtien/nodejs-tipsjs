// only 1 purpose to define port
const app = require('./src/app');

const PORT = 3055;

const server = app.listen(PORT, () => {
  console.log(`Start WebServer eCommerce with port ${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log(`Exit WebServer Express`);
  });
});
