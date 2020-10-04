<template>
  <Container id="home" class="content" width="95%" max-width="900px" center full-height>
    <Box>
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
      emptyIcon: emptyIcon,
      emptyText: 'Noch keine Favoriten'
    }
  },
  created() {}
}
</script>

<style lang="postcss" scoped>
#home {
  /* Display */
  height: 100%;
}
</style>
