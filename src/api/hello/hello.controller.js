'use strict';

const Boom = require('boom');

/**
 * Health Check API methods
 */
module.exports = {

    /**
     * Returns health check information by replying with the input request
     */
    index: function (request, reply) {
        const name = request.query.name || '';
        return reply({say: 'Hello ' + name});
    }

};
