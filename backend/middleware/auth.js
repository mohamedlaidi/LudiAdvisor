// backend/middleware/auth.js
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'changeme'
module.exports = (req, res, next) => {
  const header = req.headers.authorization
  if (!header) return res.status(401).json({ error: 'Token manquant' })
  const token = header.split(' ')[1]
  try {
    const payload = jwt.verify(token, JWT_SECRET)
    req.user = payload
    next()
  } catch {
    res.status(401).json({ error: 'Token invalide' })
  }
}
