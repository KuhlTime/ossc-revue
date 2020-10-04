<template>
  <label class="checkbox" :class="{ active: value }">
    <input type="checkbox" v-model="value" v-on:input="$emit('input', $event.target.checked)" />
    <img :src="checkmark" class="checkmark" v-if="value" />
  </label>
</template>

<script>
import icons from '@/assets/icons'

// How to use v-model:
// https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components

export default {
  name: 'checkbox',
  props: {
    value: {
      type: Boolean
    }
  },
  data: () => {
    return {
      checkmark: icons.checkmark
    }
  }
}
</script>

<style lang="scss" scoped>
input[type='checkbox'] {
  display: none;
}

.checkbox {
  /* Position */
  position: relative;

  /* Display */
  display: inline-block;
  width: 15px;
  height: 15px;

  /* Style */
  background-color: #e8eaee;
  border-radius: 4px;

  /* Animation */
  transition: all ease-in-out 120ms;

  /* Interactive */
  user-select: none;
  cursor: pointer;
}

.active {
  /* Style */
  background-color: #2c8eff;
}

.checkmark {
  /* Position */
  position: absolute;
  top: 50%;
  left: 50%;

  /* Display */
  width: 9px;
  height: 9px;

  /* Transform */
  transform: translate(-50%, -50%);
}
</style>
