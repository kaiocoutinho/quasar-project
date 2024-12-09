<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
        <p class="col-12 text-h6 text-center">Register</p>
        <div class="col-md-4 col-sm-6 col-xs-10">
          <q-input v-model="form.name" type="text" label="Name" />
            <q-input v-model="form.email" type="text" label="Email" />
            <q-input v-model="form.password" type="number" label="Password" />
          <div class="full-width q-pt-md">
            <q-btn color="primary" label="Register" outlined rounded class="full-width" type="submit"/>
          </div>
        </div>
      </q-form>
  </q-page>
</template>

<script>

import { defineComponent, ref } from 'vue';
import useAuthUser from 'src/composables/UseAuthUser.js'
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'RegisterPage',

  setup(){
    const router = useRouter()
    const { register } = useAuthUser()

    const form = ref({
      name:'',
      email: '',
      password: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'email-confimartion',
          query: { email: form.value.email}
        })

      } catch (error) {
        alert(error.message)
      }
    }

    return{
      form,
      handleRegister
    }
  }
});
</script>
