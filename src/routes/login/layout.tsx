import { component$, Slot } from '@builder.io/qwik'
import type { RequestHandler } from '@builder.io/qwik-city'

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5
  })
}

export default component$(() => {
  return (
    <div class='bg-coal h-screen w-screen text-white flex flex-col'>
      <div class='flex justify-between px-5 py-3 w-full '>
        <span class='text-primary text-5xl font-bold'>DEVFLIX</span>
        <button class='btn btn-primary'>Login</button>
      </div>
      <Slot />
      <div class='flex w-full h-16'>
        <div class='flex w-full flex-col justify-center items-center '>
          <h2>Made with love by David Huertas</h2>
        </div>
      </div>
    </div>
  )
})
