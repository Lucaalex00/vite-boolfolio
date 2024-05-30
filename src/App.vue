<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue'
export default {
  name: 'App',
  data() {
    return {
      projects: [],
      loading:true,
      base_api_url: 'http://127.0.0.1:8000',
      base_posts_url: '/api/projects',
    }
  },
  methods: {
    callApi(url) {
      axios.get(url).then(response => {
        /*  console.log(response); */
        this.projects = response.data.projects
        console.log(this.projects);
        this.loading = false;
      }).catch(err => {
        console.error(err);
      })
  }
  },
  components: {
    ProjectCard
  },
  mounted() {
  this.callApi(`${this.base_api_url}` + `${this.base_posts_url}`)
  }
}
</script>



<template>
  <header>Header</header>

  <main>
    <ProjectCard/>

    <div class="container">
      <div class="row">
        <div class="col" v-for="project in projects">
          <div class="card">
            <div class="card-title">
              <div class="card_id">{{ project.id }}.</div>
              <h3 class="title"> Title : {{ project.title }}</h3>
              <h6 class="title">Slug : {{ project.slug }}</h6>
              <div class="link"><a :href="project.link"> >>LINK<<</a></div>

            </div>
            <!-- /.card-title -->
            <div class="card-body">
              <img v-if=(project.cover_image) :src="project.cover_image" alt="IMAGE N/A">
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

  </main>

  <footer>Footer</footer>
</template>

<style scoped>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
header,footer{
  color: blueviolet
}
.row{
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  >.col{
  width: calc(100% / 4 - 8px);
  border: 1px solid black;
  border-radius: 10px;
    >.card{
      min-height: 400px;
      display: flex;
      flex-wrap: wrap;
      padding: 0;
        box-shadow: 2px 2px 2px 2px black;
        border-radius: 10px;
      >.card-title{
        background-color: #cecece;
        padding: 0.5rem;
        height: 200px;
        width: 100%;
        border-radius: 10px 10px 0 0;
        box-shadow: 1px 1px 1px 1px black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        >.link>a{
          color: black;
          transition: 1s;
          &:hover{
            color: red;
          }
        }
        >.card_id{
          color: black;
          text-align: start;
        }
      }
      >.card-body{
        background-color: black;
        width: 100%;
        height: 200px;
        border-radius: 0 0 10px 10px ;
        box-shadow: 1px 1px 1px 1px white;
        display: flex;
        justify-content: center;
        align-items: center
      }
    }
  }
}
.title{
  color: black;
}
</style>
