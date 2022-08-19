<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
 <header class="navbar">
    <a class="container" href="/">
        <img src='./assets/images/Logo.PNG' alt='Logo de la Tienda'>
        <h1>Majestic✨ </h1>
    </a>
    <nav>
      <RouterLink class="route" to="/">Nosotros</RouterLink>
      <RouterLink class="route" to="/Productos">Productos</RouterLink>
      <RouterLink class="route" to="/Contacto">Contacto</RouterLink>
    </nav>
 </header>
  <RouterView />
</template>

<style scoped>
</style>
