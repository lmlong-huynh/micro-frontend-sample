<template>
  <div>
    <nav>
      <RouterLink to="/app-1">Go to App 1</RouterLink>
      <RouterLink to="/app-2">Go to App 2</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
nav {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}
nav a {
  text-decoration: none;
  color: #646cff;
  font-size: 1.2em;
  font-weight: bold;
}
nav a:hover {
  color: #42b883;
}
</style>
