
<script>
    export default {
    name: 'AppContacts',
        data(){
            return {
                name: '',
                email: '',
                message: '',
                loading: true,
                base_api_url: 'http://127.0.0.1:8000',
                base_posts_url: '/api/contacts',
            }
    },
    methods: {
        sendMessage() {
            const data = {
                name: this.name,
                email: this.email,
                message:this.message,
            }
                const apiUrl=`${this.base_api_url}${this.base_posts_url}`
            axios.post(apiUrl,data).then(response => {
                    console.log(response)
            }).catch(err =>{
                  console.log(err)  
                })
            },
        }
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
    <br>
    <h2>Send an email</h2>
    <br>
    <form action="#" @submit.prevent=sendMessage()>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input type="text" class="form-control" name="name" id="name" aria-describedby="nameHelpId"
                placeholder="name" v-model="name" />
        </div>
        <br>
        <div class="mb-3">
            <label for="" class="form-label">Email</label>
            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                placeholder="Random@mail.com" v-model="email" />
        </div>
        <br>
        <div class="mb-3">
            <label for="" class="form-label">Message</label>
            <input type="text" class="form-control" name="message" id="message" aria-describedby="messageHelpId"
                placeholder="message" v-model="message" />
        </div>
            <br>
        <button type="submit">CONFIRM</button>
    </form>

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