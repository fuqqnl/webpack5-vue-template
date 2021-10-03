<template>
  <div class="hello">
    <p>"{{ msg }}"</p>
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
h1, h2 {
  font-weight: normal;
}

</style>
