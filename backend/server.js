// backend/server.js
require('dotenv').config();           // Charge .env
const express = require('express');
const db = require('./db');           // Ta connexion MySQL
const app = express();

// Route racine
app.get('/', (req, res) => {
  res.send('🚀 LudiAdvisor backend opérationnel');
});

// Route de test de la BDD
app.get('/api/test-db', (req, res) => {
  db.query('SELECT 1 AS result', (err, results) => {
    if (err) {
      console.error('Erreur en testant la BDD :', err);
      return res.status(500).json({ success: false, error: err.message });
    }
    res.json({ success: true, results });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
