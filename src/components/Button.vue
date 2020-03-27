<template>
 <div class="">
  <button class="default-btn" @click="add" :style="styles">{{ msg }}</button>
 </div>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default: '基本のボタン',
            },
            color: {}
        },
        methods: {
            add(){
                this.$emit('add');
            }
        },
        computed: {
            // バインドするスタイルを生成
            styles () {
                return {
                    '--color': this.color
                }
            }
        }
    };

</script>

<style>
 .default-btn {
  /*デフォルトの値*/
  --color: #3760ff;
  /* CSS変数を背景と幅に割り当て */
  background-color: var(--color);
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
 }
</style>
