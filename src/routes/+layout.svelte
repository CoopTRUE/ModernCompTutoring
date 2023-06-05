<script lang="ts">
  import { browser } from '$app/environment'
  // import 'normalize.css'
  import '../global.scss'

  function startRotate() {
    console.log('startRotate')
    return setInterval(() => {
      const title = document.title
      document.title = title.slice(1) + title[0]
    }, 300)
  }

  if (browser) {
    const title = document.title
    let interval = startRotate()

    /* blink cursor
      const title = document.title
      let cursor = true
      setInterval(() => {
        // block cursor
        if (cursor) document.title = title + '█'
        else document.title = title
        cursor = !cursor
      }, 500)
    */
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        document.title = title
        interval = startRotate()
      } else {
        clearInterval(interval)
        document.title = 'Miss you!'
      }
    })
  }
</script>

<slot />
