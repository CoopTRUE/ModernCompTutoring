<script lang="ts">
  import { onMount } from 'svelte'

  let canvas: HTMLCanvasElement | undefined

  let width: number
  let height: number

  const letters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,./<>?'
  const fontSize = 12
  $: columns = width / fontSize
  $: drops = Array.from({ length: columns }, () => Math.floor(Math.random() * 100))

  function draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)'
    ctx.fillRect(0, 0, width, height)
    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)]
      ctx.fillStyle = '#0f0'
      ctx.fillText(text, i * fontSize, drops[i] * fontSize)
      if (drops[i]++ * fontSize > height && Math.random() > 0.95) {
        drops[i] = 0
      }
    }
  }
  onMount(() => {
    const ctx = canvas?.getContext('2d')
    if (!ctx) return
    const interval = setInterval(() => draw(ctx), 30)
    return () => clearInterval(interval)
  })
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<canvas bind:this={canvas} {width} {height} />

<style lang="scss">
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
