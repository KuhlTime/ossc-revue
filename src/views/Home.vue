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
      <DataTable :headers="headers" :rows="rows" />
    </Box>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import Box from '@/components/Box'
import DataTable from '@/components/DataTable'
import MyInput from '@/components/MyInput'

// import emptyIcon from '@/assets/icons/empty.svg'

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
      search: ''
    }
  },
  created() {},
  computed: {
    tableTitleString() {
      return this.$t('views.home.table.title')
    },
    searchPlaceholder() {
      return this.$t('search') + ' ...'
    },
    headers() {
      return [this.$t('views.home.table.id'), this.$t('views.home.table.name')]
    },
    rows() {
      return [
        ['1', 'Mathe 1'],
        ['2', 'Mathe 2'],
        ['3', 'Mathe 3'],
        ['4', 'Mathe 4'],
        ['5', 'Advanced Machine Learning']
      ]
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
