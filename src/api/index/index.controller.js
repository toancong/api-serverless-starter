'use strict';

/**
 * Health Check API methods
 */
module.exports = {

    /**
     * Returns health check information by replying with the input request
     */
    index: function (request, reply) {
        return reply({
            status: 'ok',
            time: Date.now(),
            env: process.env.NODE_ENV,
        });
    }

};
