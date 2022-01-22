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
        <div className="box">
          <p>项目1</p>
          <p>项目2</p>
          <p>项目3</p>
        </div>
      </article>
    )
  }
})