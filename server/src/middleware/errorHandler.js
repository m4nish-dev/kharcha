/**
 * Centralized error-handling middleware.
 * Any error thrown or passed via next(err) in route handlers
 * will be caught here and returned as a consistent JSON response.
 */

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message =
    process.env.NODE_ENV === 'production' && statusCode === 500
      ? 'Internal server error'
      : err.message || 'Internal server error';

  console.error(`[Error] ${statusCode} — ${err.message}`);
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

export default errorHandler;
