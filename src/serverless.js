'use strict'

const app = require('./app');
const serverless = require('./index');

serverless.configure([app]);
exports.handler = serverless.handler;