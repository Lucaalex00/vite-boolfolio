
<script>
    export default {
        name: 'AppContacts',
    }
</script>

<template>
    <h1>CONTACTS</h1>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <strong>Instagram <a href="#">xxxxxx</a></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores deserunt perferendis iure
                        autem! Quis saepe laudantium consequatur qui. Quidem!</p>
                </div>
                <div class="card">
                    <strong>Facebook <a href="#">xxxxxx</a></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores deserunt perferendis iure
                        autem! Quis saepe laudantium consequatur qui. Quidem!</p>
                </div>
                <div class="card">
                    <strong>Linkedin <a href="#">xxxxxx</a></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores deserunt perferendis iure
                        autem! Quis saepe laudantium consequatur qui. Quidem!</p>
                </div>
                <!-- /.cards -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</template>


<style scoped>
h1 {
    margin: 1rem 0;
    text-align: center;
}

.col{
    display: flex;
    justify-content: space-between;
    >.card{
        border: 1px dashed white;
        min-height: 300px;
        display: flex;
        flex-direction:column ;
        justify-content: space-around;
    }
}


</style>