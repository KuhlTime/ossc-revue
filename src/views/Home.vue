<template>
  <Container id="home" class="content" width="95%" max-width="900px" center full-height>
    <Box>
      <template v-slot:header>
        <div class="toolbar">
          <div class="left">
            <p class="toolbar-title">{{ tableTitleString }}</p>
          </div>
          <div class="right">
            <MyInput
              v-model="search"
              type="search"
              name="search"
              :placeholder="searchPlaceholder"
            />
          </div>
        </div>
      </template>
      <DataTable></DataTable>
    </Box>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import Box from '@/components/Box'
import DataTable from '@/components/DataTable'
import MyInput from '@/components/MyInput'

import emptyIcon from '@/assets/icons/empty.svg'

// import exampleData from '@/tmp/sampleData.json'

export default {
  name: 'home',
  components: {
    Container,
    Box,
    DataTable,
    MyInput
  },
  data: () => {
    return {
      exams: [],
      search: '',
      emptyIcon: emptyIcon,
      emptyText: 'Noch keine Favoriten'
    }
  },
  created() {},
  computed: {
    tableTitleString() {
      return this.$t('gradesTable')
    },
    searchPlaceholder() {
      return this.$t('search') + ' ...'
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  /* Display */
  height: 100%;
}

.toolbar {
  padding: 0 16px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}

.toolbar-title {
  font-weight: 500;
  font-size: 17px;
}
</style>
