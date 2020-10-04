<template>
  <Container id="home" class="content" width="95%" max-width="900px" center full-height>
    <Box>
      <template v-slot:header>
        <div class="toolbar">
          <div class="left">
            <p class="toolbar-title">{{ tableTitleString }}</p>
          </div>
          <div class="right">
            <input v-model="search" type="search" name="search" :placeholder="searchPlaceholder" />
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

import emptyIcon from '@/assets/icons/empty.svg'

export default {
  name: 'home',
  components: {
    Container,
    Box,
    DataTable
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

input {
  border-radius: 4px;
  border: 1px solid transparent;
  color: #fff;
  font-size: 15px;
  padding: 6px 12px;
  background-color: rgba(0, 0, 0, 0.15);
  transition: all ease-in-out 160ms;
}

input:focus {
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.9);
}
</style>
