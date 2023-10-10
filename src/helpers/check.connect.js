'use strict';

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

const SECOND = 15000;

const countConnections = () => {
  const numConnections = mongoose.connections.length;
  console.log(`Number of connections::${numConnections}`);
  return numConnections;
};

const checkOverloadConnect = () => {
  setInterval(() => {
    const numConnections = mongoose.connections.length;
    const numCore = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    // Maximum number of connections based on number of core
    const maxConnections = numCore * 5;

    console.log(`Active number of connections::${numConnections}`);
    console.log(`Memory usage::${memoryUsage / 1024 / 1024} MB`);

    if (numConnections > maxConnections) {
      console.log(`Connections overload detected`);
    }
  }, SECOND);
};

module.exports = {
  countConnections: countConnections,
  checkOverloadConnect: checkOverloadConnect
};
