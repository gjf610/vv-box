import { defineComponent, h, ref, shallowRef, VNode } from "vue";

export default defineComponent({
  props: {
    path: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const content = shallowRef<VNode>(null)
    const title = ref<string>('')
    import(props.path).then(result => {
      content.value = result.default
      const { matter } = content.value.$vd
      title.value = matter.title
    }).catch(err => {
      console.error(err)
    })
    return () => (
      <article class="markdown-body">
        <h1>{title.value}</h1>
        {h(content.value)}
      </article>
    )
  }
})