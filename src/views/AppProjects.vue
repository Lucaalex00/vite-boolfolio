<script>
import ProjectCard from '../components/ProjectCard.vue';


import axios from 'axios';

    export default {
    name: 'AppProjects',

    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            loading: true,
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
    mounted() {
        this.callApi(`${this.base_api_url}` + `${this.base_posts_url}`)
    }
}
</script>

<template>
    <div>
        <h1>Projects</h1>
        <div class="container">
            <div class="row">
                <div class="col" v-for="project in projects">
                    <ProjectCard :project=project />
                    
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </div>
</template>

    
<style scoped>

.row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    >.col {
        width: calc(100% / 4 - 8px);
        border: 1px solid black;
        border-radius: 10px;
    }
}
h1 {
    margin: 1rem 0;
}
</style>