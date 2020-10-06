<template>
  <button :disabled="disabled"><slot /></button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/main';

button {
  background-color: $red;
  border: none;
  transition: all linear 160ms;
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  outline: none;
}

button:focus,
button:hover {
  border: none;
  outline: none;
  background-color: darken($red, 5%);
}

button:active {
  background-color: darken($red, 10%);
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
