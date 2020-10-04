<template>
  <container id="info" max-width="600px" width="80%" center>
    <img src="https://gravatar.com/avatar/fafb63d72d420a56e98d8941f39d87b7?s=200" alt="Avatar" class="avatar" />
    <markdown :value="markdown" />
    <div id="feedback">
      <p class="item">👍</p>
      <p class="item">👎</p>
    </div>
  </container>
</template>

<script>
import Markdown from '@/components/Markdown'
import Container from '@/components/Container'

export default {
  name: 'docs',
  components: { Container, Markdown },
  data: () => {
    return {
      markdown:
        'With ❤️and 👨‍💻by **[@KuhlTime](https://twitter.com/KuhlTime)<br><br>Ich habe diesen interaktiven Prüfungsplan bereits 2018 begonnen, da ich es ein wenig mühselig fand die ganze Zeit nach neuen Terminen in dem als PDF bereitgestellten Terminplan herum zu suchen.<br><br>Der Code zu dieser Web Anwendung ist [**Open Source**](https://github.com/KuhlTime/HSDPr-fungsplanner) 👨‍💻und kann gerne weiter verbessert werden.'
    }
  }
}
</script>

<style lang="scss" scoped>
#info {
  margin-top: 60px;
}

.avatar {
  border-radius: 50%;
  height: 120px;
  width: 120px;
  margin-bottom: 24px;
  border: 6px solid rgba(255, 255, 255, 0.1);
}

#feedback {
  display: flex;
  margin-top: 42px;
  font-size: 32px;
  justify-content: center;
  width: 100%;
  user-select: none;
}

#feedback .item {
  margin: 0 12px;
  transition: all ease-in-out 160ms;
  cursor: pointer;
}

#feedback .item:hover {
  opacity: 0.7;
}
</style>
