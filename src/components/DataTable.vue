<template>
  <div class="my-table no-scrollbar" ref="table">
    <table>
      <thead :class="{ shadow: scrolled }">
        <tr>
          <th v-for="h in headers" :key="h">{{ h }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in rows" :key="r">
          <td v-for="h in headers" :key="h">{{ r }}.{{ h }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'data-table',
  props: {
    headers: {
      type: Array,
      default: () => {
        return Array(50)
          .fill()
          .map((_, h) => {
            return String(h + 1)
          })
      }
    },
    rows: {
      type: Array,
      default: () => {
        return Array(100)
          .fill()
          .map((_, h) => {
            return String(h + 1)
          })
      }
    }
  },
  data: () => {
    return {
      search: '',
      searching: false,
      scrollY: 0
    }
  },
  methods: {},
  computed: {
    scrolled() {
      return this.scrollY !== 0
    }
  },
  mounted() {
    const $table = this.$refs.table

    $table.addEventListener('scroll', () => {
      this.scrollY = $table.scrollTop
    })
  }
}
</script>

<style lang="scss" scoped>
.my-table {
  overflow: scroll;
  height: 100%;
  width: 100%;
  position: relative;
}

/* https://stackoverflow.com/a/51312747/4179020 */
table tr td:last-of-type {
  width: 100%;
}

table tr th:last-of-type {
  width: 100%;
}

table {
  position: relative;
  border-collapse: collapse;

  /* Text */
  font-family: 'Roboto', 'Avenir', sans-serif;
  text-align: left;
  font-size: 15px;
  font-weight: 400;
}

thead {
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: #2d8eff;
  color: rgba(255, 255, 255, 0.9);
  border-bottom: rgba(0, 0, 0, 0.2) 1px solid;
  transition: all ease-in-out 160ms;
}

thead.shadow {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
}

tbody {
  color: #000;
  background-color: #fff;
  scrollbar-width: 0;
  -ms-overflow-style: none;
}

tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.04);
}

th,
td {
  padding: 10px 14px;
}

th {
  white-space: nowrap;
  padding-top: 12px;
  padding-bottom: 12px;
}

td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

/* Padding to the left of the table */
th:first-child,
td:first-child {
  padding-left: 20px;
}

/* Padding to the right of the table */
th:last-child,
td:last-child {
  padding-right: 20px;
}

.no-scrollbar {
  overflow: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
}
</style>
