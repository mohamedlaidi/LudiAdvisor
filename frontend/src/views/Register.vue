<template>
    <div class="register-page">
      <Header />
      <main class="register-form fade-in">
        <h1>Créer votre compte</h1>
  
        <form @submit.prevent="handleSubmit">
          <!-- Partie Compte -->
          <div class="form-group">
            <label for="nom">Nom</label>
            <input type="text" id="nom" v-model="form.nom" required />
          </div>
  
          <div class="form-group">
            <label for="prenom">Prénom</label>
            <input type="text" id="prenom" v-model="form.prenom" required />
          </div>
  
          <div class="form-group">
            <label for="email">Adresse e-mail</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
  
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input type="password" id="password" v-model="form.password" required />
          </div>
  
          <!-- Partie Préférences -->
          <div class="form-group">
            <label for="annee">Année de publication</label>
            <input type="number" id="annee" v-model="form.annee" min="1900" max="2099" required />
          </div>
  
          <div class="form-group">
            <label for="joueurs">Nombre minimum de joueurs</label>
            <input type="number" id="joueurs" v-model="form.joueurs" min="1" required />
          </div>
  
          <div class="form-group">
            <label for="duree">Durée de jeu</label>
            <select id="duree" v-model="form.duree" required>
              <option value="">Sélectionner...</option>
              <option value="15-30 min">15 – 30 min</option>
              <option value="30-60 min">30 – 60 min</option>
              <option value="60-120 min">60 – 120 min</option>
              <option value="120+ min">Plus de 2h</option>
            </select>
          </div>
  
          <div class="form-group">
            <label for="age">Âge minimum</label>
            <input type="number" id="age" v-model="form.age" min="3" required />
          </div>
  
          <div class="form-group">
            <label for="categorie">Catégorie</label>
            <select id="categorie" v-model="form.categorie" required>
              <option value="">Sélectionner...</option>
              <option value="Stratégie">Stratégie</option>
              <option value="Famille">Famille</option>
              <option value="Cartes">Cartes</option>
              <option value="Coopératif">Coopératif</option>
              <option value="Ambiance">Ambiance</option>
            </select>
          </div>
  
          <button type="submit" class="cta-button">Créer mon compte</button>
        </form>
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  
  // Création du modèle du formulaire
  const form = reactive({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    annee: '',
    joueurs: '',
    duree: '',
    age: '',
    categorie: ''
  })
  
  const handleSubmit = () => {
    console.log('Formulaire soumis :', form)
    // Ici tu pourras ajouter la logique pour envoyer les données vers ton backend plus tard
  }
  </script>
  
  <style scoped>
.register-form {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1); /* Fond transparent léger */
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); /* Belle ombre douce */
  backdrop-filter: blur(8px); /* Effet flouté moderne */
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: left;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: white; /* Titre blanc */
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
  color: white; /* Labels blancs */
}

input, select {
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.7); /* Blanc adouci */
  color: #3b0a58;
}

input::placeholder, select::placeholder {
  color: #888; /* Placeholders plus doux */
}

.cta-button {
  display: block;
  width: 100%;
  margin-top: 30px;
  padding: 15px;
  background-color: #ffcc00;
  color: #3b0a58;
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #ffaa00;
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Fade-in animation */
.fade-in {
  animation: fadeIn 1.5s ease forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

  </style>
  