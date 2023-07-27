import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class='flex m-auto p-5'>
      <form class='flex flex-col text-center gap-3 items-center'>
        <input
          type='text'
          placeholder='Email'
          class='input input-bordered w-full max-w-xs'
        />
        <input
          type='text'
          placeholder='Password'
          class='input input-bordered w-full max-w-xs'
        />
        <button class='btn btn-primary max-w-md'>Sign in</button>
      </form>
    </div>
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
