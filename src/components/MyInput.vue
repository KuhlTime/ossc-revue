<template>
  <input
    type="text"
    v-model="value"
    :placeholder="placeholder"
    :required="required"
    :name="name"
    @change="updateValue($event.target.value)"
    @focus="this.$emit('focus')"
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
    required: Boolean
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
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
