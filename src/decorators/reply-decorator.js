const { format } = require('date-fns');

module.exports = (fastify) => {
    fastify.decorateReply("sendResponse", function (code, message, result) {
        this.code(code).send({
            message,
            result,
            timestamp: format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        });
    });
};