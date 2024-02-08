const requestLogger =(request ,responce,next) => {
    logger.info('Method:',request.method);
    logger.info("Path:",request.path);
    logger.info("Body:",request.body);
    logger.info("-------------------------");
     next();

}



const unknownEndpoint=(request ,responce,next) => {
    responce.status(404).send({error:'unknown endpoint'})
}

module.exports = {
    requestLogger,
    unknownEndpoint
}