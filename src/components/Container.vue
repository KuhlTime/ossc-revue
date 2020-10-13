<template>
  <div
    class="container"
    :style="{ 'max-width': maxWidth, width: calculatedWidth }"
    :class="{ center: center, 'full-height': fullHeight }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'container',
  props: {
    maxWidth: {
      type: String,
      default: '600px'
    },
    width: {
      type: String,
      default: '90%'
    },
    center: Boolean,
    fullHeight: Boolean,
    beakpoint100Percent: {
      type: Number,
      value: undefined
    }
  },
  computed: {
    calculatedWidth: function() {
      if (this.beakpoint100Percent && this.$screen.width < this.beakpoint100Percent) {
        return '100%'
      } else {
        return this.width
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.container {
  /* Position*/
  position: relative;

  /* Display */
  width: 100%;
  box-sizing: border-box;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.full-height {
  height: 100%;
}
</style>
