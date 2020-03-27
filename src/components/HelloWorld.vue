<template>
  <div id="app">
    <default-btn></default-btn>
    <default-btn></default-btn>
    <default-btn :msg="messageText"></default-btn>
    <default-btn @add="addProduct"></default-btn>
    <default-btn :color="color"></default-btn>
  </div>
</template>

<script>
    import DefaultBtn from '@/components/Button.vue'

    export default {
        components: {
            'default-btn': DefaultBtn
        },
        data: function() {
            return {
                messageText: '文字を変えてみた',
                color: 'pink'
            }
        },
        methods: {
            addProduct(){
                console.log("クリックしました");
            }
        }

    }
</script>

<style>

</style>
