<template>
  <transition name="modal">
    <div class="modal-overlay" @click="close"></div>
  </transition>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default: 'これはモーダル画面です',
            }
        },
        methods: {
            close(){
                this.$emit('close');
            }
        }
    };
</script>

<style>
 .modal-overlay {
   z-index:1;
   position:fixed;
   top:0;
   left:0;
   width:100%;
   height:100%;
   background-color:rgba(0,0,0,0.5);
 }
</style>
