<template>
  <div class="hello">
    <p id="msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 's-hello-world',
  setup(props) {
      const msg = 'Welcome to Your new Project';
      return {
          msg
      }
  }
}
</script>
<style scoped>
#msg {
  background: rgba(0, 255, 0, .6);
}

</style>
