// backend/routes/profil.js
const express = require('express');
const db      = require('../db');
const router  = express.Router();
const auth    = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  const userId = req.user.id_utilisateur;           // <— ici !
  try {
    const [ rows ] = await db.promise().query(`
      SELECT 
        U.prenom       AS prenom,
        P.year_published,
        P.min_players,
        P.max_players,
        P.min_playtime,
        P.max_playtime,
        P.min_age,
        P.category
      FROM ProfilLudique P
      JOIN Utilisateur U
        ON P.id_utilisateur = U.id_utilisateur
      WHERE P.id_utilisateur = ?
    `, [ userId ]);

    if (!rows.length) {
      return res.status(404).json({ error: 'Profil non trouvé' });
    }
    res.json({ profile: rows[0] });
  } catch (err) {
    console.error('Erreur GET /api/profil:', err);
    res.status(500).json({ error: 'Erreur interne' });
  }
});

module.exports = router;
