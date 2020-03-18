<template>
  <div id="app">
    <default-btn></default-btn>
    <default-btn :msg="messageText"></default-btn>
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
                messageText: '文字を変えてみた'
            }
        }

    }
</script>
