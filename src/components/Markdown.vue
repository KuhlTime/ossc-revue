<template>
  <div id="markdown" v-html="markdown"></div>
</template>

<script>
import snarkdown from 'snarkdown'

export default {
  name: 'markdown',
  props: {
    value: String
  },
  computed: {
    markdown: function() {
      return snarkdown(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
#markdown {
  /* Style */
  color: rgba(255, 255, 255, 0.9);

  /* https://github.com/vuejs/vue-loader/issues/749 */
  ::v-deep a {
    /* Style */
    color: #2c8eff;

    /* Text */
    text-decoration: none;

    /* Animation */
    transition: all ease-in-out 160ms;

    &:hover {
      /* Style */
      color: #fff;
    }
  }

  // TODO: Set Markdown in external SCSS file
  ::v-deep blockquote {
    border-left: 1px solid #fff;
    padding-left: 12px;
    margin-left: 1px;
  }
}
</style>
