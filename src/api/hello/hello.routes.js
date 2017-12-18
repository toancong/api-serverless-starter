'use strict';

const controller = require('./hello.controller');

/**
 * Route configuration
 */
module.exports = [
    {
        method: 'GET',
        path: '/hello',
        handler: controller.index,
        config: {
            description: 'Say hello',
            notes: 'Hello',
            tags: ['api', 'hello'],
            auth: false
        }
    }
];