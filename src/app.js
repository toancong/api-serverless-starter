'use strict'

const Hapi = require('hapi')           // a very happy server
const config = require('./config')     // application configuration
const monitor = require('./monitor')   // Monitoring, logging
const api = require('./api')           // REST API

// make a happy server
const plugins = [config, monitor, api]

exports.register = function (server, options, next) {
    server.register(plugins, () => {
        return next()
    })
}

exports.register.attributes = {
    pkg: {
        name: 'app',
        version: '1.0.0'
    }
}