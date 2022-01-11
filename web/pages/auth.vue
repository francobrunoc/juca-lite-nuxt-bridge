<template>
  <v-container bg fluid fill-height>
    <v-row>
      <v-col align='center'>
        <v-card flat max-width='500' align='center'>
          <v-card-text>
            <img src='~assets/clamed_health_center_logo.png' class='my-5' />
            <v-text-field v-model='username' solo outlined dense placeholder='Usuário'></v-text-field>
            <v-text-field v-model='password' solo outlined dense placeholder='Senha'></v-text-field>
          </v-card-text>
          <v-card-subtitle>
            <v-row justify='center'>
              <v-btn text class='mb-5'>Não possui uma conta?</v-btn>
            </v-row>
            <v-row justify='center' class='mb-5'>
              <v-btn width='300' @click='signIn'>Entrar</v-btn>
            </v-row>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js/
import { Auth } from 'aws-amplify'

export default {
  name: 'AuthPage',
  layout: 'public',
  data: () => {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async signIn() {
      try {
        const user = await Auth.signIn(this.username, this.password)
        console.log(user)
      } catch (error) {
        console.log('error signing in', error)
      }
    },
  }
}
</script>

<style scoped>

</style>
