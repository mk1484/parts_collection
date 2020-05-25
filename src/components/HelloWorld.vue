<template>
  <div id="app">
    <default-btn></default-btn>
    <default-btn></default-btn>
    <default-btn :msg="messageText"></default-btn>
    <default-btn @add="addProduct"></default-btn>
    <default-btn :color="color"></default-btn>

    <modal-btn @open="OpenModal"></modal-btn>
    <modal-window v-if="ShowModal"></modal-window>
    <modal-overlay v-if="ShowOverlay" @close="CloseModal"></modal-overlay>

    <default-card></default-card>
  </div>
</template>

<script>
    import DefaultBtn from '@/components/Button.vue'
    import ModalBtn from '@/components/ModalButton.vue'
    import ModalWindow from '@/components/ModalWindow.vue'
    import ModalOverlay from '@/components/ModalOverlay.vue'
    import DefaultCard from '@/components/Card.vue'


    export default {
        components: {
            'default-btn': DefaultBtn,
            'modal-btn': ModalBtn,
            'modal-window': ModalWindow,
            'modal-overlay': ModalOverlay,
            'default-card': DefaultCard

        },
        data: function() {
            return {
                messageText: '文字を変えてみた',
                color: 'pink',
                ShowModal: false,//モーダルウインドウを最初は非表示にする
                ShowOverlay: false//モーダルオーバーレイを最初は非表示にする
            }
        },
        methods: {
            addProduct(){
                console.log("クリックしました")
            },

            //モーダルの表示
            OpenModal(){
                this.ShowModal = true
                this.ShowOverlay = true
            },
            //モーダルの非表示
            CloseModal() {
                this.ShowModal = false
                this.ShowOverlay = false
            }
        }
    }
</script>

<style>

</style>
