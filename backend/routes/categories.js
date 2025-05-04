// backend/routes/categories.js
const express = require('express');
const db      = require('../db');
const router  = express.Router();

router.get('/', async (req, res) => {
  try {
    // Récupère toutes les catégories distinctes non-nulles
    const [rows] = await db.promise().query(`
      SELECT DISTINCT category
      FROM Jeu
      WHERE category IS NOT NULL AND category <> ''
    `);
    // renvoie un tableau de strings
    res.json(rows.map(r => r.category));
  } catch (err) {
    console.error('Erreur /api/categories:', err);
    res.status(500).json({ error: 'Erreur interne' });
  }
});

module.exports = router;
