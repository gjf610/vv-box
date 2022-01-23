import { defineComponent, h } from "vue";

export default defineComponent({
  props: {
    component: {
      type: Function,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup({ component, title }) {
    return () => (
      <article class="markdown-body">
        <h2>{title}</h2>
        {h(component)}
      </article>
    )
  }
})