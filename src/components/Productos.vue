<template>
  <nav class="productos-nav">
    <RouterLink class="route" to="/Camisetas">Camisas</RouterLink>
    <RouterLink class="route" to="/Camisetas">Jeans</RouterLink>
    <RouterLink class="route" to="/Camisetas">Gorras</RouterLink>
    <RouterLink class="route" to="/Camisetas">Zapatillas</RouterLink>
    <RouterLink class="route" to="/Camisetas">Sacos</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<style>

</style>

