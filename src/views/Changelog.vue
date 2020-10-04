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
          date: dayjs(),
          version: '2.0',
          icon: changelogIcons.NewIcon,
          title: 'Neues Design',
          description:
            'Mit diesem Update erhält der PrüfungsPlanner ein komplett übeholtes Design. Zudem kommt ein modernes Web Framework (VueJS) zum Einsatz was es mir ermöglicht hat, die Anwendung deutlich modularer Aufzubauen.'
        },
        {
          date: dayjs('08/02/2019'),
          version: '1.0',
          icon: changelogIcons.NewIcon,
          title: 'Der Anfang',
          description:
            'Ein erster Prototyp des PrüfungsPlanner, geschrieben in Vanilla Javascript auf [JSFiddle](https://jsfiddle.net/KuhlTime/dfnpoy96/).'
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
