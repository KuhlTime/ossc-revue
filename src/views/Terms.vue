<template>
  <div id="terms">
    <Container class="container" width="95%" max-width="600px" center full-height>
      <Markdown :value="markdown" />
    </Container>
  </div>
</template>

<script>
import Container from '@/components/Container'
import Markdown from '@/components/Markdown'

export default {
  name: 'terms',
  components: { Container, Markdown },
  data: () => {
    return {
      markdown:
        '### Vorweg es handelt sich hier nicht um die offizielle Seite des HSD Prüfungsamt.<br><br>Dies ist lediglich ein Hobbyprojekt mit welchem die Noten eines Studenten in schöner Form aufgelistet werden sollen. Ich übernehme keinerlei Verantwortung beim Verlust Ihrer Anmeldedaten oder sonst welcher Probleme die durch das verwenden dieser Software auftretenden können. Bitte achten Sie darauf, dass Sie stehts auf einer gesicherten Verbindung mit dem Server kommunizieren.<br><br>Wenn Sie sich unsicher sind empfehle ich Ihnen auf die offizielle Webseite der HSD unter [https://ossc.hs-duesseldorf.de](https://ossc.hs-duesseldorf.de) Ihre Noten abzufragen.<br><br>Das abfragen Ihrer Noten setzt das übermitteln Ihrer Zugangsdaten vorraus. Diese sowie Benutzerbezogene Daten werden zu keinem Zeitpunkt auf dem Server gespeichert oder hinterlegt.'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 60px;
}
</style>
