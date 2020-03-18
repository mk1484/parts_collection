<template>
 <div class="">
  <button class="default-btn">{{ msg }}</button>
 </div>
</template>

<style>
 .default-btn {
  background: #3760ff;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
 }
 h1 {
  color: #f00;
 }
</style>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default: '基本のボタン',
            }
        }
    };

</script>
