<script>
import axios from 'axios';

export default {
    name: 'Project',
    data() {
        return {
            project: '',
            loading: true,
            base_api_url: 'http://127.0.0.1:8000',
            base_posts_url: '/api/projects/',
        }
    },
    methods: {
        
    },
    mounted() {
        console.log(this.$route.params.id, this.base_api_url, this.base_posts_url)
        const url= this.base_api_url + this.base_posts_url +`${this.$route.params.id}`
        axios.get(url).then(response => {
            console.log(response)
            if (response.data.success) {
                console.log('success')
                this.project = response.data.response;
                this.loading = false;
            } else {
                router.push({ name: 'NotFound' })
            }
        }).catch(err => {
            console.error(err)
            }
        ) 
    }
}
    
</script>
<template>
    <div>
        <router-link :to="{ name: 'project', params: { id: project.id } }">
            Project with id : {{ $route.params.id }}
            <h1>{{ project.title }}</h1><br>
            <h3>{{ project.slug }}</h3><br>
            <img v-if="project.cover_image" :src="project.cover_image" alt="IMAGE N/A">
            <p>{{ project.content }}</p>
        </router-link>
    </div>
</template>


<style scoped>
div{
    border: 1px solid white;
    width:50%;
    margin: auto;
}
</style>