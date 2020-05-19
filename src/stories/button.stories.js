import DefaultButton from '../components/Button.vue'

export default {
  component: DefaultButton,
  title: 'Button'
}

export const defaultButton = () => ({
  components: { DefaultButton },
  template: '<Default-button></Default-button>',
})
