<script>
export default {
  name: 'App',
}
</script>



<template>
  <header>
    <RouterLink class="link" to="/">Home</RouterLink>
    <RouterLink class="link" to="/about">About</RouterLink>
    <RouterLink class="link" to="/projects">Projects</RouterLink>
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
  height: 10vh;
  background-color:rgb(75, 75, 75);
  padding: 1rem;
  border: 1px solid white;
}
header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap:1rem;
  >.link{
    transition: 1s;
    color: white;
    &:hover{
      background-color: gray;
    }
  }
 
}
main{
  height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  border: 1px solid white;
  color: white;
  padding: 1rem;
}
</style>
