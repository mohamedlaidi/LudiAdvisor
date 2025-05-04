// backend/scripts/import-csv.js

const fs    = require('fs');
const path  = require('path');
const csv   = require('csv-parser');
const mysql = require('mysql2/promise');
require('dotenv').config({ path: __dirname + '/../../.env' });


async function main() {
  const conn = await mysql.createConnection({
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  // --- Import Jeu depuis details.csv ---
  await new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '../details.csv'))
      .pipe(csv())
      .on('data', async row => {
        const {
          id, primary: titre, yearpublished,
          minplayers, maxplayers,
          minplaytime, maxplaytime,
          minage, boardgamecategory: category,
          boardgamemechanic: mechanics
        } = row;
        try {
          await conn.execute(
            `INSERT IGNORE INTO Jeu
             (id_jeu, titre, year_published,
              min_players, max_players,
              min_playtime, max_playtime,
              min_age, category, mechanics)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [id, titre, yearpublished,
             minplayers, maxplayers,
             minplaytime, maxplaytime,
             minage, category, mechanics]
          );
        } catch(err) {
          console.error('Erreur Jeu:', err.message);
        }
      })
      .on('end', resolve)
      .on('error', reject);
  });

  console.log('✅ Import de Jeu terminé');

  // --- Import Rating depuis ratings.csv ---
  await new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '../ratings.csv'))
      .pipe(csv())
      .on('data', async row => {
        const { id, users_rated, average, bayes_average } = row;
        try {
          await conn.execute(
            `INSERT IGNORE INTO Rating
             (id_jeu, users_rated, average, bayes_average)
             VALUES (?, ?, ?, ?)`,
            [id, users_rated, average, bayes_average]
          );
        } catch(err) {
          console.error('Erreur Rating:', err.message);
        }
      })
      .on('end', resolve)
      .on('error', reject);
  });

  console.log('✅ Import de Rating terminé');
  await conn.end();
}

main().catch(err => {
  console.error('❌ Import CSV échoué:', err);
  process.exit(1);
});
