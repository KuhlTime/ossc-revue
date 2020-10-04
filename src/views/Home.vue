<template>
  <Container id="home" class="content" width="95%" max-width="900px" center full-height>
    <Box>
      <template v-slot:header>
        <div class="toolbar">
          <div class="left">
            <p class="toolbar-title">{{ title }}</p>
          </div>
          <div class="right"></div>
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
      title: 'Notenspiegel',
      emptyIcon: emptyIcon,
      emptyText: 'Noch keine Favoriten'
    }
  },
  created() {}
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
  font-weight: 600;
}
</style>
