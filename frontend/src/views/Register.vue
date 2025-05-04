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

        <!-- Partie Préférences (ProfilLudique) -->
        <div class="form-group">
          <label for="annee">Année de publication souhaitée</label>
          <input
            type="number"
            id="annee"
            v-model.number="form.year_published"
            min="1900"
            max="2099"
            required
          />
        </div>

        <div class="form-group">
          <label for="min-joueurs">Nombre minimum de joueurs</label>
          <input
            type="number"
            id="min-joueurs"
            v-model.number="form.min_players"
            min="1"
            required
          />
        </div>
        <div class="form-group">
          <label for="max-joueurs">Nombre maximum de joueurs</label>
          <input
            type="number"
            id="max-joueurs"
            v-model.number="form.max_players"
            :min="form.min_players"
            required
          />
        </div>

        <div class="form-group">
          <label for="min-duree">Durée minimum de jeu (min)</label>
          <input
            type="number"
            id="min-duree"
            v-model.number="form.min_playtime"
            min="0"
            required
          />
        </div>
        <div class="form-group">
          <label for="max-duree">Durée maximum de jeu (min)</label>
          <input
            type="number"
            id="max-duree"
            v-model.number="form.max_playtime"
            :min="form.min_playtime"
            required
          />
        </div>

        <div class="form-group">
          <label for="age">Âge minimum</label>
          <input
            type="number"
            id="age"
            v-model.number="form.min_age"
            min="3"
            required
          />
        </div>
        <div class="form-group">
    <label for="categorie">Catégorie</label>
    <select id="categorie" v-model="form.category" required>
      <option value="">Sélectionner...</option>
      <option
        v-for="cat in categories"
        :key="cat"
        :value="cat"
      >{{ cat }}</option>
    </select>
  </div>

        <button type="submit" class="cta-button">Créer mon compte</button>
      </form>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const router = useRouter()

// Modèle du formulaire exactement aligné sur ta BDD
const form = reactive({
  // Utilisateur
  nom: '',
  prenom: '',
  email: '',
  password: '',
  // ProfilLudique
  year_published: null,
  min_players: null,
  max_players: null,
  min_playtime: null,
  max_playtime: null,
  min_age: null,
  category: ''
})

// liste des catégories chargée depuis l'API
const categories = ref([])

// au montage, on récupère les catégories en base
onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/categories')
    categories.value = res.data  // ex. ["Famille","Stratégie","Cartes",...]
  } catch (err) {
    console.error('Impossible de charger les catégories :', err)
  }
})

async function handleSubmit() {
  try {
    await axios.post('http://localhost:5000/api/register', {
      nom: form.nom,
      prenom: form.prenom,
      email: form.email,
      password: form.password,
      // Profil ludique
      year_published: form.year_published,
      min_players:  form.min_players,
      max_players:  form.max_players,
      min_playtime: form.min_playtime,
      max_playtime: form.max_playtime,
      min_age:      form.min_age,
      category:     form.category
    })
    router.push('/login')
  } catch (err) {
    alert(err.response?.data?.error || 'Erreur lors de l’inscription')
    console.error(err)
  }
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
  