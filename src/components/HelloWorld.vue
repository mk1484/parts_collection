<template>
  <div>
    <button class="btn-blue">button</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn-blue {
    background: #3760ff;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
  }
</style>
