import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <h1>Index</h1>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Devflix',
  meta: [
    {
      name: 'description',
      content: 'Devflix - A Netflix clone for developers'
    }
  ]
}
