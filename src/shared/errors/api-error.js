const { StatusCodes } = require('http-status-codes');

class APIError extends Error {
    constructor(description, httpCode = StatusCodes.INTERNAL_SERVER_ERROR) {
        super(description);
        this.httpCode = httpCode;
    }
    getHttpCode() {
        return this.httpCode;
    }
}

module.exports = APIError;