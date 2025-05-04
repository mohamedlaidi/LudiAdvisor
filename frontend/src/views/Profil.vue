<template>
  <div class="profil-page">
    <Header/>

    <main class="profil-card fade-in">
      <h1>
        Bienvenue {{ profile.prenom }} <span class="wave">👋</span>
      </h1>
      <section class="details">
        <p><strong>Votre profil ludique :</strong></p>
        <ul>
          <li>Année de publication favorite : {{ profile.year_published }}</li>
          <li>Nombre minimum de joueurs : {{ profile.min_players }}</li>
          <li>
            Durée de jeu préférée :
            {{ profile.min_playtime }}-{{ profile.max_playtime }} min
          </li>
          <li>Âge minimum : {{ profile.min_age }}</li>
          <li>Catégorie préférée : {{ profile.category }}</li>
        </ul>
      </section>

      <button @click="goRecommendations" class="cta-button">
        Voir mes jeux recommandés 🎯
      </button>
    </main>

    <Footer/>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter }      from 'vue-router'
import axios               from 'axios'
import Header              from '../components/Header.vue'
import Footer              from '../components/Footer.vue'

const router = useRouter()

// --- Bien cibler `profile`, pas `form` ---
const profile = reactive({
  prenom:         '',
  year_published: null,
  min_players:    null,
  max_players:    null,
  min_playtime:   null,
  max_playtime:   null,
  min_age:        null,
  category:       ''
})

onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:5000/api/profil')
    // ← Ici on met à jour le bon objet
    Object.assign(profile, data.profile)
  } catch (err) {
    console.error('Impossible de charger le profil', err)
    if (err.response?.status === 401) {
      router.push('/login')
    }
  }
})

function goRecommendations() {
  router.push('/recommendation')
}
</script>

<style scoped>
.profil-card {
  max-width: 600px;
  margin: 60px auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
  color: white;
}

.profil-card h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.profil-card .wave {
  display: inline-block;
  animation: wave 1.5s ease-in-out infinite;
}

@keyframes wave {
  0%, 60%, 100% { transform: translateY(0); }
  30%           { transform: translateY(-8px); }
}

.profil-card .details {
  text-align: left;
  margin: 20px 0;
}
.profil-card .details p {
  font-weight: bold;
  margin-bottom: 10px;
}
.profil-card .details ul {
  list-style: none;
  padding: 0;
}
.profil-card .details li {
  margin: 6px 0;
  font-size: 1.1rem;
}

.cta-button {
  margin-top: 30px;
  padding: 15px 30px;
  background-color: #ffcc00;
  color: #3b0a58;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}
.cta-button:hover {
  background-color: #ffaa00;
  transform: scale(1.03);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}

/* Fade-in */
.fade-in {
  animation: fadeIn 1s ease forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
