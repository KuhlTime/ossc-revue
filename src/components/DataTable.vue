<template>
  <div class="my-table no-scrollbar" ref="table">
    <table>
      <thead :class="{ shadow: scrolled }">
        <tr>
          <th
            v-for="(h, i) in headers"
            :key="h"
            @click="changeOrder(i)"
            :class="{ 'sort-key': i === sortKey }"
          >
            {{ h }}
            <ChevronDownIcon
              v-if="sortKey === i"
              size="0.8x"
              class="sort-icon"
              :class="{ up: !ascending }"
            />
            <div class="icon-placeholder" v-if="sortKey !== i" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in sortedRows" :key="r">
          <td v-for="(h, i) in headers" :key="h">{{ r[i] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// TODO: Generate UUIDs
import { ChevronDownIcon } from 'vue-feather-icons'

export default {
  name: 'data-table',
  components: { ChevronDownIcon },
  props: {
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    search: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      scrollY: 0,
      sortKey: 0,
      ascending: true // ascending = 1 -> 100 - descending = 100 -> 1
    }
  },
  methods: {
    changeOrder(index) {
      if (this.sortKey == index) {
        this.ascending = !this.ascending
      } else {
        this.sortKey = index
        this.ascending = true
      }
    }
  },
  computed: {
    scrolled() {
      return this.scrollY !== 0
    },
    sortedRows() {
      const i = this.sortKey

      return [...this.rows].sort((a, b) => {
        return this.ascending ? a[i] > b[i] : a[i] < b[i]
      })
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
  font-size: 14px;
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

/* Remove bottom border from last table row */
tr:last-child td {
  border: none;
}

/* Highlight table row */
tr {
  transition: all ease-in-out 120ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08) !important;
  }
}

th,
td {
  padding: 10px 14px;
  white-space: nowrap;
}

th {
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
  user-select: none;
  color: rgba(255, 255, 255, 0.7);
  transition: all ease-in-out 160ms;
  font-weight: 500;
}

th.sort-key {
  color: #fff;
  font-weight: 600;
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

.sort-icon {
  width: 12px;
  height: 12px;
  transition: all ease-in-out 300ms;
  transform: rotate(360deg);
}

.icon-placeholder {
  display: inline-block;
  width: 12px;
  height: 12px;
}

.up {
  transform: rotate(180deg);
}

.no-scrollbar {
  overflow: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
}
</style>
