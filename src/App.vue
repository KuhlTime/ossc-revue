<template>
  <div id="app" class="vbox">
    <NavigationHeader
      :logo="logo"
      :version="version"
      :title-bold="$route.meta.title.bold"
      :title-thin="$route.meta.title.thin"
    />
    <router-view />
  </div>
</template>

<script>
import NavigationHeader from '@/components/NavigationHeader'
import logo from '@/assets/logo.svg'

export default {
  name: 'App',
  components: { NavigationHeader },
  data: () => {
    return {
      version: '2.0',
      logo: logo
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  background-color: #232d42;
}

#app {
  /* Position */
  position: absolute;
  top: 0;

  /* Display */
  height: 100%;
  width: 100%;
  overflow: hidden; /* Prevents the website from slideing arround. In case there is some unwanted overflow */

  /* Text */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  /* Style */
  color: #fff;
  background: linear-gradient(180deg, #232d42 0%, #0b1324 100%);
}

.vbox {
  display: flex;
  flex-direction: column;
}

.hbox {
  /* Display */
  display: flex;
  flex-direction: row;
}

.uppercase {
  /* Text */
  text-transform: uppercase;
}

.lowercase {
  /* Text */
  text-transform: lowercase;
}

.content {
  /* Position */
  margin-top: 60px;

  /* Display */
  overflow: scroll;
}
</style>
