<script>
export default {
    name: "AppProjectCard",
    props: {
        project: Object,
    }
}
</script>

<template>
    <div class="card">
        <div class="card-title">
            <div class="card_id">{{ project.id }}.</div>
            <h3 class="title"> Title : {{ project.title }}</h3>
            <h6 class="title">Slug : {{ project.slug }}</h6>
            <div class="link"><a :href="project.link"> >>LINK<< </a>
            </div>
        </div>
        <!-- /.card-title -->
        <div class="card-body">
            <img v-if=(project.cover_image) :src="'/storage/'+ project.cover_image" alt="IMAGE N/A">
        </div>
           
        <!-- /.card-body -->
    </div>
    <!-- /.card -->
</template>

<style scoped>


.card {
    min-height: 400px;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    box-shadow: 2px 2px 2px 2px black;
    border-radius: 10px;

    >.card-title {
        background-color: #cecece;
        padding: 0.5rem;
        height: 200px;
        width: 100%;
        border-radius: 10px 10px 0 0;
        box-shadow: 1px 1px 1px 1px black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition:2s;

        >.link>a {
            color: black;
            transition: 2s;

            &:hover {
                color: red;
            }
        }

        >.card_id {
            color: black;
            text-align: start;
            transition: 2s;

        }
        >.title{
            transition: 2s
        }
    }

    >.card-body {
        background-color: black;
        width: 100%;
        height: 200px;
        border-radius: 0 0 10px 10px;
        box-shadow: 1px 1px 1px 1px white;
        display: flex;
        justify-content: center;
        align-items: center;
        transition:2s;
        >img{
            border: 1px solid white;
            transition: 2s;
        }
    }
    &:hover>.card-title{
        background-color: black;
        box-shadow: 1px 1px 1px 1px white;
        >.card_id, >.title, >.link>a{
            color: white;
        }
    }
    &:hover>.card-body {
        background-color: lightgray;
        box-shadow: 1px 1px 1px 1px black;
        >img{
            border: 1px solid black;
        }
    }
}
.title {
    color: black;
}


</style>
