<template>
  <container id="info" max-width="600px" width="80%" center>
    <img
      src="https://gravatar.com/avatar/fafb63d72d420a56e98d8941f39d87b7?s=200"
      alt="Avatar"
      class="avatar"
    />
    <markdown :value="markdown" />
    <div id="feedback" style="display: none">
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
        'With 👨‍💻 by **[@KuhlTime](https://twitter.com/KuhlTime)<br><br> Um mir ein paar klicks zu sparen habe ich mir "kurzerhand" diese Webseite erstellt.<br><br>Sie ermöglicht es dir ohne viele klicks sofort einen Überblick über deine Noten zu erhalten.<br><br>Melde dich ganz einfach mit deinem HSD Account an.<br><br>Auf Anfrage kann ich gerne den Code für die Webseite sowie das Backend auf GitHub hochladen.<br><br>**Viel Spaß beim Zeit sparen.**<br>*André*'
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
