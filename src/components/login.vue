<template>
  <div class="login">
      <Input class="input" prefix="ios-contact" placeholder="Enter name" v-model="loginForm.username" />
      <Input class="input" type="password" prefix="ios-key" placeholder="Enter password"  v-model="loginForm.password"/>
      <Button class="button" type="success" v-on:click="login">登录</Button>
  </div>
</template>

<script>

  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        responseResult: []
      }
    },
    methods: {
      login () {
        this.$axios
          .post('/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.$router.replace({path: '/index'})
            } else if (successResponse.data.code !== 200){
               this.$router.replace({path: '/login'})
            }
          })
          .catch(failResponse => {
          })
      }
    }
  }
</script>
<style>
.login{
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -200px;
  width: 400px;
  height: 300px;

}
.input{
  margin:20px;
}
.button{
  position: absolute;
  top: 50%;
  left: 50%;

}

</style>


