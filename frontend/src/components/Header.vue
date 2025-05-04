<template>
    <header class="header">
      <div class="logo">LudiAdvisor</div>
      <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/register">S'inscrire</router-link>
        <router-link to="/login">Se connecter</router-link>
      </nav>
    </header>
  </template>
  
  <script setup>
  // pas besoin de script
  </script>
  
  <style scoped>
.header {
  width: 100%;
  background-color: #3b0a58;
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
}
nav a:hover {
  text-decoration: underline;
}
.logo {
  font-size: 24px;
  font-weight: bold;
}
</style>
