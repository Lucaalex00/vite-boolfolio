<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      projects:[]
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/projects').then(response => {
     /*  console.log(response); */
      let projects = response.data.projects
      console.log(projects);
    })
  }
}

</script>



<template>
  <header>Header</header>
  <h1>hello world</h1>
  
<footer>Footer</footer>
</template>

<style scoped>
template{
  background-color: black;
}
h1,h6,header,footer{
  color: red;
}
</style>
