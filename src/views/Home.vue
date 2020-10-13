<template>
  <Container
    id="home"
    class="content"
    width="95%"
    max-width="1000px"
    beakpoint100Percent="600"
    center
    full-height
  >
    <Box>
      <template v-slot:header>
        <div class="toolbar">
          <div class="left">
            <span class="toolbar-title">{{ tableTitleString }}</span>
            <span>Ø {{ avgGradeString }}</span>
            <span>CP: {{ totalCPString }}</span>
          </div>
          <div class="right">
            <MyInput
              style="display: none"
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

import dayjs from 'dayjs'

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
  methods: {
    replaceZeroWithDash(value) {
      return value === 0 ? '-' : value
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
      return [
        this.$t('views.home.table.id'),
        this.$t('views.home.table.name'),
        this.$t('views.home.table.passed'),
        this.$t('views.home.table.grade'),
        this.$t('views.home.table.creditPoints'),
        this.$t('views.home.table.attempts'),
        this.$t('views.home.table.examinationDate')
      ]
    },
    rows() {
      return this.$store.getters.modules.map(module => {
        const passedExam = module.exams.find(exam => exam.grade)
        const examinationDate = dayjs(passedExam?.examinationDate).format('DD.MM.YYYY')

        const grade = module?.grade ? String(parseFloat(module?.grade).toFixed(1)) : '-'

        return [
          module.id,
          module.name,
          module.passed
            ? this.$t('views.home.table.passedTrue')
            : this.$t('views.home.table.passedFalse'),
          grade,
          module.creditPoints,
          module.attempts.exams.representZeroWithDash(),
          examinationDate
        ]
      })
    },
    avgGradeString() {
      return String(this.$store.getters.averageGrade.toFixed(1))
    },
    totalCPString() {
      return String(this.$store.getters.totalCreditPoints)
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
  font-size: 15px;
}

.left *:not(:first-of-type),
.right *:not(:first-of-type) {
  margin-left: 12px;
}

.toolbar-title {
  font-weight: 600;
  font-size: 17px;
}
</style>
