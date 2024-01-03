const validationMiddleware = (req, res, next) => {
    const { title, content } = req.body;
  
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required fields' });
    }
  
    if (title.length > 100 || content.length > 1000) {
      return res.status(400).json({ error: 'Title or content exceeds maximum length' });
    }
  
    next();
  };
  
  module.exports = validationMiddleware;
  