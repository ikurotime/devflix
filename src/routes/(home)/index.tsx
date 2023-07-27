import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class='flex m-auto p-5'>
      <div class='flex flex-col text-center gap-3 items-center'>
        <h1 class='text-6xl'>Unlimited tutorials, courses, and more</h1>
        <h2 class='text-4xl'>Watch anywhere. Cancel anytime.</h2>
        <h3 class='text-3xl'>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <button class='btn btn-primary max-w-md'>Get Started</button>
      </div>
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
