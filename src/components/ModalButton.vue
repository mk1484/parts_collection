<template>
 <button class="modal-btn" @click="open">{{ msg }}</button>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default: 'モーダルを開く',
            }
        },
        methods: {
            open(){
                this.$emit('open');
            }
        }
    };

</script>

<style>
 .modal-btn {
  background: #ffa02b;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
 }
</style>
