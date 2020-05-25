<template>
 <div class="default-card">
  <div class="card-img">img</div>
  <div class="card-body">
   <h2>タイトル</h2>
   <p>テキストテキストテキストテキストテキストテキストテキスト</p>
   <default-btn></default-btn>
  </div>
 </div>
</template>

<script>
    import DefaultBtn from '@/components/Button.vue'

    export default {
        components: {
            'default-btn': DefaultBtn,
        },
    }
</script>

<style>
 .default-card {
  width: 300px;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  border-radius: 5px;
 }
 .card-img {
  height: 150px;
  border-radius: 5px 5px 0 0;
  background: #bcbcbc;
  vertical-align: middle;
 }
 .card-body {
  padding: 10px;
 }
 h2 {
  text-align: left;
  margin: 0px;
 }
 p {
  text-align: left;
  margin: 0 0 15px 0;
 }
</style>
