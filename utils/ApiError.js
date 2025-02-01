class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Useful for distinguishing between expected and unexpected errors
  }
}
module.exports = ApiError;

