module.exports = async (fastify) => {
    fastify.addHook('preHandler', function (request, reply, done) {
        if (request.body) {
            request.log.info(
                { 'request.body': request.body }, 'incoming request.body'
            )
        }
        done()
    })
}