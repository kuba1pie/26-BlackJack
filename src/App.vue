<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      KubaPietruszewski.pl
    </footer>
  </div>
</template>
