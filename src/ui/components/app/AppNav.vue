<template>
  <nav>
    <RouterLink to="/">HOME</RouterLink>
    <RouterLink to="/season">SEASONS</RouterLink>
    <RouterLink to="/">GAMES</RouterLink>
    <RouterLink to="/franchise">FRANCHISES</RouterLink>
    <RouterLink to="/">PEOPLE</RouterLink>
    <RouterLink to="/">ACHIEVEMENTS</RouterLink>
    <RouterLink to="/venue">VENUES</RouterLink>
  </nav>
</template>

<script setup lang="ts" />

<style scoped>
  nav {
    container-type: inline-size;
  }

  @container (min-width: 700px) {
    h1 {
      display: none;
    }
  }

  @container (max-width: 700px) {
    nav {
      display: none;
    }
  }

  a {
    margin: 0.5rem;
  }
</style>
