<script>
export default {
  name: 'App',
}
</script>



<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/projects">Projects</RouterLink>
  </header>

  <main>
    <RouterView>

    </RouterView>
 

  </main>

  <footer>Footer</footer>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

header,
footer {
  color: blueviolet;
}
header{
  
  display: flex;
  justify-content: center;
  gap:1rem
}
main{
  height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  border: 1px solid black;
  color: black;
  padding: 1rem;
}
</style>
