<template>
  <Container id="header" width="80%" max-width="900px" center>
    <div class="heading">
      <div class="header-top" :class="{ hidden: !hasBackButton }" @click="goBack">
        <img :src="backIcon" class="back-button transition" />
        <img :src="logo" class="logo transition" alt="Logo" />
      </div>
      <h1>
        <b>{{ titleBold }}</b>
        <span>{{ titleThin }}</span>
      </h1>
      <a
        class="version"
        @click="$router.push({ name: 'changelog' })"
        v-if="$route.name === 'home' || $route.name === 'login'"
        >Version: {{ version }}</a
      >
    </div>
    <div id="right">
      <CodeIcon
        class="icon"
        @click="$router.push({ name: 'docs' })"
        v-if="$route.name === 'home' || $route.name === 'login'"
      ></CodeIcon>
      <InfoIcon
        class="icon"
        @click="$router.push({ name: 'info' })"
        v-if="$route.name === 'home' || $route.name === 'login'"
      />
      <a class="user" href="https://kuhlti.me">
        Developed by
        <p>André Kuhlmann</p>
      </a>
    </div>
  </Container>
</template>

<script>
import Container from './Container'
import { InfoIcon, CodeIcon } from 'vue-feather-icons' // Icons: https://vue-feather-icons.netlify.com/
import icons from '@/assets/icons'

export default {
  name: 'navigation-header',
  components: { Container, InfoIcon, CodeIcon },
  props: {
    logo: String,
    version: String,
    titleBold: String,
    titleThin: String,
    backName: String
  },
  data: () => {
    return {
      backIcon: icons.back
    }
  },
  computed: {
    hasBackButton() {
      return this.$route.meta.back !== undefined
    }
  },
  methods: {
    goBack() {
      if (typeof this.$route.meta.back === undefined) return
      this.$router.push({ name: this.$route.meta.back })
    }
  }
}
</script>

<style lang="postcss" scoped>
#header {
  /* Position */
  position: relative;
  margin-top: 60px;

  /* Display */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  //border: 1px dashed red;
}

@media only screen and (max-width: 500px) {
  .user {
    display: none !important;
  }
}

/*-------------*/
/* BACK-BUTTON */
/*-------------*/

.back-button {
  /* Position */
  padding: 2px;
  margin-right: 8px;

  /* Display */
  height: 20px;
  width: 20px;
  opaicity: 1;
  border-radius: 50%;

  /* Style */
  background-color: #fff;

  /* Interactive */
  cursor: pointer;

  /* Transistion */
  transition: background-color ease-in-out 160ms, all ease-in-out 300ms;
}

.header-top:hover .back-button {
  /* Style */
  background-color: rgba(255, 255, 255, 0.6);
}

.transition {
  transition: all ease-in-out 300ms;
}

.header-top {
  transition: all ease-in-out 300ms;
}

.hidden {
  transform: translateX(-26px);
}

.hidden .back-button {
  opacity: 0;
}

/*-------------*/

.version {
  /* Position */
  margin: 0;
  margin-top: 4px;

  /* Text */
  font-size: 12px;

  /* Style */
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);

  /* Interactive */
  cursor: pointer;

  /* Animation */
  transition: all ease-in-out 160ms;
}

.version:hover {
  /* Style */
  color: #fff;
}

.heading {
  /* Text */
  text-align: left;
}

h1 {
  /* Position */
  margin: 0;

  /* Text */
  font-weight: 200;
  font-size: 24px;
}

h1 b {
  /* Text */
  font-weight: 600;
}

#right {
  /* Display */
  height: 45px;
}

.logo {
  /* Display */
  display: inline-block;
  height: 20px;

  /* Interactive */
  user-select: none;
  cursor: pointer;
}

.icon {
  /* Position */
  margin-right: 24px;

  /* Animation */
  transition: all ease-in-out 160ms;

  /* Interactive */
  cursor: pointer;
}

.icon:hover {
  /* Style */
  color: rgba(255, 255, 255, 0.7);
}

.user {
  /* Position */
  padding: 4px 16px;
  padding-top: 6px;
  padding-left: 12px;
  margin-bottom: auto;

  /* Display */
  display: inline-block;
  box-sizing: border-box;

  /* Text */
  font-size: 12px;
  text-align: left;

  /* Style */
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  /* Interaction */
  text-decoration: none;

  /* Animation */
  transition: all ease-in-out 160ms;
}

.user:hover {
  /* Style */
  background-color: #fff;
  color: #000;
}

.user:hover p {
  /* Style */
  color: #000;
}

.user p {
  /* Position */
  margin: 0;
  margin-top: 2px;

  /* Style */
  color: #fff;

  /* Text */
  font-size: 18px;
  font-weight: 600;

  /* Animation */
  transistion: all ease-in-out 160ms;
}
</style>
