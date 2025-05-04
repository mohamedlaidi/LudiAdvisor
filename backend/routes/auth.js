// backend/routes/auth.js
const express  = require('express')
const bcrypt   = require('bcrypt')
const jwt      = require('jsonwebtoken')
const db       = require('../db')
const router   = express.Router()

// Secret pour JWT (mettez-le dans votre .env)
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

// POST /api/register
// backend/routes/auth.js
router.post('/register', async (req, res) => {
    // 1) Affiche ce qu'on reçoit
    console.log('✔️ body reçu:', req.body);
  
    // 2) Déstructure TOUTES les valeurs, y compris max_players
    const {
      nom,
      prenom,
      email,
      password,
      year_published,
      min_players,
      max_players,     // <— on l'ajoute !
      min_playtime,
      max_playtime,
      min_age,
      category
    } = req.body;
  
    try {
      const hash = await bcrypt.hash(password, 10);
  
      // 3) Insert Utilisateur
      const [userResult] = await db.promise().execute(
        `INSERT INTO Utilisateur (nom, prenom, email, mot_de_passe)
         VALUES (?, ?, ?, ?)`,
        [nom, prenom, email, hash]
      );
      const userId = userResult.insertId;
  
      // 4) Insert ProfilLudique
      await db.promise().execute(
        `INSERT INTO ProfilLudique
           (year_published, min_players, max_players,
            min_playtime, max_playtime, min_age,
            category, id_utilisateur)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          year_published,
          min_players,
  +       max_players,     // <— ici aussi
          min_playtime,
          max_playtime,
          min_age,
          category,
          userId
        ]
      );
  
      res.json({ success: true });
    } catch (err) {
      console.error('‼️ Erreur complète /api/register:', err);
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'Cet e-mail est déjà utilisé.' });
      }
      res.status(500).json({ error: err.message });
    }
  });  

// POST /api/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    // 1) Récupérer l’utilisateur
    const [rows] = await db.promise()
      .execute(`SELECT * FROM Utilisateur WHERE email = ?`, [email])
    if (!rows.length) return res.status(401).json({ error: 'Utilisateur non trouvé' })

    const user = rows[0]
    // 2) Vérifier le mot de passe
    const valid = await bcrypt.compare(password, user.mot_de_passe)
    if (!valid) return res.status(401).json({ error: 'Mot de passe invalide' })

    // 3) Générer le token
    const token = jwt.sign({ id_utilisateur: user.id_utilisateur }, JWT_SECRET, {
      expiresIn: '24h'
    })

    res.json({ token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erreur interne.' })
  }
})

module.exports = router
