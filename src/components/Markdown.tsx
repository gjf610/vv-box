import { h, defineComponent, shallowRef, onMounted } from 'vue'
export default defineComponent({
  props: {
    path: {
      type: String,
      required: true
    },
  },
  setup(props) {
    const content = shallowRef(null)
    onMounted(() => {
      import(props.path).then(result => {
        content.value = result.default
      }).catch(err => {
        console.error(err)
      })
    })
    return () => (<article class="markdown-body">
      {
        content.value && h(content.value)
      }
    </article>)
  }

})