// backend/server.js
require('dotenv').config();           // 1. Charge le .env
const express       = require('express');
const cors          = require('cors');
const db            = require('./db');    // vérifie que tu as bien un db.js qui exporte ta connexion
const authRouter    = require('./routes/auth');
const profilRouter  = require('./routes/profil');
// const recRouter     = require('./routes/recommendations'); // plus tard
const auth          = require('./middleware/auth');

const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());

// Routes publiques
app.get('/', (req, res) => res.send('🚀 LudiAdvisor backend opérationnel'));
app.get('/api/test-db', (req, res) => {
  db.query('SELECT 1 AS result', (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true, results });
  });
});
app.use('/api', authRouter);  // ← monte register & login ici

// Routes protégées (après token JWT)
app.use('/api/profil', auth, profilRouter);
const categoriesRouter = require('./routes/categories');
// après app.use(express.json());
app.use('/api/categories', categoriesRouter);
// app.use('/api/recommendations', auth, recRouter);

// Démarrage du serveur (DERNIÈRE chose)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
