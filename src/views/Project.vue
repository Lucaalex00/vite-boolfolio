<script>
import axios from 'axios';

export default {
    name: 'Project',
    data() {
        return {
            project: [],
            loading: true,
            base_api_url: 'http://127.0.0.1:8000',
            base_posts_url: '/api/projects/',
        }
    },
    methods: {
        callApi(url) {
            axios.get(url).then(response => {
                /*  console.log(response); */
                this.projects = response.data.projects;
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
        <h1>ciao</h1>
        <div v-for="project in project">
            User {{ $route.params.id }}
        </div>
    </div>
</template>


<style scoped>

</style>