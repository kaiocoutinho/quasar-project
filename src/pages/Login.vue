<template>
    <q-page padding>
      <q-form class="row justify-center" @submit.prevent="handleLogin">
        <p class="col-12 text-h6 text-center">Login</p>
        <div class="col-md-4 col-sm-6 col-xs-10">
            <q-input v-model="form.email" type="text" label="Email" />
            <q-input v-model="form.password" type="number" label="Senha" />
          <div class="full-width q-pt-md">
            <q-btn color="primary" label="Login" outlined rounded class="full-width" type="submit"/>
          </div>
          <div class="full-width">
            <q-btn color="primary" label="Register" outlined rounded class="full-width" flat to="/register"/>
          </div>
        </div>
      </q-form>
    </q-page>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import useAuthUser from 'src/composables/UseAuthUser.js'
  import { useRouter } from 'vue-router'
  export default defineComponent({
    name: 'LoginPage',
    setup(){
        const router = useRouter()

        const { login } = useAuthUser()

        const form = ref({
            email: '',
            password: ''
        })

        const handleLogin = async () => {
            try {
                await login(form.value)
                router.push( { name: 'me' } )
            } catch (error) {
                alert(error.message)
            }
        }

        return{
            form,
            handleLogin
        }
    }
  });
  </script>
  