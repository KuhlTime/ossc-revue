<template>
  <input
    :type="type"
    v-model="value"
    :placeholder="placeholder"
    :required="required"
    :name="name"
    :disabled="disabled"
    :style="{ 'border-color': color }"
    @change="updateValue($event.target.value)"
    @focus="focusEvent"
    @blur="blurEvent"
  />
</template>

<script>
// https://paulund.co.uk/use-v-model-on-custom-vue-component

export default {
  name: 'my-input',
  props: {
    type: String,
    value: String,
    name: String,
    placeholder: String,
    required: Boolean,
    disabled: Boolean,
    focusColor: {
      type: String,
      default: '#fff'
    }
  },
  data: () => {
    return {
      isFocused: false
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
    focusEvent() {
      this.isFocused = true
      this.$emit('focus')
    },
    blurEvent() {
      this.isFocused = false
      this.$emit('blur')
    }
  },
  computed: {
    color() {
      return this.isFocused ? this.focusColor : 'transparent'
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  display: block;
  border-radius: 4px;
  width: 100%;
  border: 1px solid transparent;
  color: #fff;
  font-size: 15px;
  padding: 6px 12px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 160ms;
}

input:focus {
  outline: none;
  border: 1px solid;
}

input:disabled {
  color: rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
