<template>
  <container center max-width="400px" width="80%">
    <form
      class="login-card"
      :class="{ invalid: isInvalid, loading: isLoading }"
      @submit="preventDefault"
    >
      <h2>OSSC<span class="thin">Revue</span></h2>
      <p class="margin-bottom">Loge dich mit deinem HSD Account ein.</p>
      <MyInput
        class="input"
        v-model="username"
        type="text"
        focusColor="#000"
        :placeholder="usernamePlaceholderString"
        :disabled="isLoading"
      />
      <MyInput
        class="input"
        v-model="password"
        type="password"
        focusColor="#000"
        :placeholder="passwordPlaceholderString"
        :disabled="isLoading"
      />
      <div class="terms">
        <Checkbox v-model="acceptTerms" :disabled="isLoading" class="terms-checkbox" />
        <span>
          I agree to the
          <a class="dark" href="#" @click="$router.push({ name: 'terms' })">terms and conditions</a>
        </span>
      </div>
      <MyButton :disabled="isLoading || isFormInalid">Login</MyButton>
    </form>
    <footer>
      <AlertCircleIcon class="icon" />
      <p>
        Dies ist nicht die
        <a href="https://ossc.hs-duesseldorf.de">offizielle OSSC Seite der HSD</a>.
      </p>
    </footer>
  </container>
</template>

<script>
import Container from '@/components/Container'
import MyInput from '@/components/MyInput'
import MyButton from '@/components/MyButton'
import Checkbox from '@/components/Checkbox'
import { AlertCircleIcon } from 'vue-feather-icons'

export default {
  name: 'docs',
  components: { Container, MyInput, MyButton, Checkbox, AlertCircleIcon },
  data: () => {
    return {
      username: '',
      password: '',
      acceptTerms: false,
      isLoading: false
    }
  },
  computed: {
    usernamePlaceholderString() {
      return this.$t('views.login.username')
    },
    passwordPlaceholderString() {
      return this.$t('views.login.password')
    },
    isFormInalid() {
      return this.username == '' || this.password == '' || this.acceptTerms == false
    },
    isInvalid() {
      return false
    }
  },
  methods: {
    login() {
      this.isLoading = true
    },
    preventDefault(event) {
      event.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/main';
@import '@/scss/transitions/fade';

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hcenter {
  margin: 0 auto;
}

.login-card {
  padding: 24px 42px;
  background-color: #fff;
  border-radius: 12px;
  color: #000;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
}

.invalid {
  box-shadow: 0 0 20px 0 rgba($red, 60%);
}

.thin {
  font-weight: 200;
  color: #000;
}

h2 {
  margin: 0;
  color: $red;
}

.margin-bottom {
  margin-bottom: 20px;
}

.input {
  color: #000;
  margin-top: 8px;
}

.terms {
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 12px;
}

.terms-checkbox {
  margin-right: 8px;
}

footer {
  display: flex;
  margin-top: 20px;
  text-align: left;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  color: darken(#fff, 40%);
}

footer > .icon {
  height: 24px;
}
</style>
