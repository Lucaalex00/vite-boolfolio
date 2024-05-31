<script>
export default {
  name: 'App',
}
</script>



<template>
  <header>
    <RouterLink class="link" :to="{name:'home'}">Home</RouterLink>
    <RouterLink class="link" :to="{ name: 'about' }">About</RouterLink>
    <RouterLink class="link" :to="{name: 'projects'}">Projects</RouterLink>
    <RouterLink class="link" :to="{name:'contacts'}">Contacts</RouterLink>
  </header>

  <main>
    <RouterView>

    </RouterView>


  </main>

  <footer>
    <ul>
      <li>
        <RouterLink class="link" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="link" to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink class="link" to="/projects">Projects</RouterLink>
      </li>
      <li>
        <RouterLink class="link" to="/contacts">Contacts</RouterLink>
      </li>
    </ul>
  </footer>
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
footer>ul{
  display: flex;
  gap: 1rem;
  justify-content: center;
  >li{
    list-style-type: none;
    >.link{
      color: white;
      transition: 1s;
      &:hover{
        background-color: darkgray;
      }
    }
  }
}
</style>
