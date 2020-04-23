<template>
 <transition name="modal">
  <div class="modal-window">
   {{ msg }}
   <div>{{ text }}</div>
  </div>
 </transition>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default: 'これはモーダル画面です',
            },
            text: {
                type: String,
                default: '文章です',

            }
        }
    };
</script>

<style>
 .modal-window {
  width: 300px;
  margin: 0 auto;
  background: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 50px 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  transition: opacity 0.4s;
 }
 span {
  display: block;
  padding: 10px;
 }
 /*  */
 .modal-enter-active, .modal-leave-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.5s;
 .modal-content{
  transform: scale(1.2);
  transition: 0.5s;
 }
 }
 .modal-enter, .modal-leave-to {
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.5s, transform 0s 0.5s;
 .modal-content{
  transform: scale(1);
 }
 }
</style>
