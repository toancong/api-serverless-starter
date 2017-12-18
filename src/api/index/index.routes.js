'use strict';

const controller = require('./index.controller');

/**
 * Route configuration
 */
module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: controller.index,
        config: {
            description: 'Index',
            notes: 'Index',
            tags: ['api', 'index'],
            auth: false
        }
    }
];