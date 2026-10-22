/**
 * Catch-all middleware for undefined routes.
 * Returns a 404 JSON response and passes to the error handler.
 */
const notFound = (req, _res, next) => {
  const error = new Error(`Not found — ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

export default notFound;
