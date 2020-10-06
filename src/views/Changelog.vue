<template>
  <Container id="changelog" class="content" width="80%" max-width="600px" center full-height>
    <Change
      v-for="(change, i) in changes"
      :key="i"
      :change="change"
      :first="i === 0"
      :last="i === changes.length - 1"
    />
  </Container>
</template>

<script>
import dayjs from 'dayjs'
import Change from '@/components/changelog/Change.vue'
import Container from '@/components/Container.vue'
import changelogIcons from '@/assets/icons/changelog'

// Inspiration: https://www.sketch.com/updates/

export default {
  name: 'changelog',
  components: { Change, Container },
  data: () => {
    return {
      changes: [
        {
          date: dayjs('06/10/2020'),
          version: '0.1.0',
          icon: changelogIcons.NewIcon,
          title: 'Hallo Welt 👋',
          description:
            'Der erste Prototype für meinen OSSC Redesign ist fertig. Nutzer können sich einfach einloggen und sehen sofort ihre Noten.<br><br>Neben der graphischen Oberfläche habe ich im Hintergrund auch ein eigenes Backend programmiert.<br><br>Wenn jemand interesse daran hat und gerne selber auf die API zugreifen möchte dann schreibt mich gerne unter meiner Hochschul-Adresse an andre.kuhlmann@study-hs-duesseldorf.de.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#changelog {
  margin-top: 100px;
  padding-left: 18px;
}
</style>
