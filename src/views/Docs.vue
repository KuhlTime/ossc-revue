<template>
  <container id="docs" width="80%" max-width="600px" center full-height>
    <markdown :value="text" />
  </container>
</template>

<script>
import Container from '@/components/Container'
import Markdown from '@/components/Markdown'

export default {
  name: 'docs',
  components: { Container, Markdown },
  data: () => {
    return {
      text:
        'Die API welche ich für diese Webseite entwickelt habe ist öffentlich nutzbar. Wenn ihr also gerne eure eigene Anwendung erstellen möchtet könnt ihr gerne auf diese API zurückgreifen. Wie ihr diese API nutzen könnt ist auf dieser Seite beschreiben.<br><br>\n' +
        '## Prüfungsliste\n' +
        '`http://server-addresse/exams`\n' +
        '<br><br>Dies gibt einen JSON Array mit allen verfügbaren Prüfungen zurück.'
    }
  }
}
</script>

<style>
#docs {
  /* Position */
  margin-top: 60px;

  /* Text */
  text-align: left;
}
</style>
