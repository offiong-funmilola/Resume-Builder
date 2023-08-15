const bufferToJSONMiddleware = (req, res, next) => {
    if (req.body instanceof Buffer && req.method !== 'GET') {
      try {
        req.body = JSON.parse(req.body.toString());
      } catch (err) {
        return res.status(400).json({ error: 'Invalid JSON data' });
      }
    }
  
    next();
};

module.exports = bufferToJSONMiddleware