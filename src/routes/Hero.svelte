<script lang="ts">
  import { onMount } from 'svelte'

  let textElement: HTMLHeadingElement

  const texts = [
    'Modern Comp Tutoring',
    'Modern Python Tutoring',
    'Modern HTML Tutoring',
    'Modern JavaScript Tutoring',
    'Modern CSS Tutoring',
    'Modern Svelte Tutoring',
    'Modern TypeScript Tutoring'
  ]
  const typingSpeed = 60
  let textIndex = 0

  async function typeNextText() {
    const currentText = texts[textIndex % texts.length]
    const newText = texts[++textIndex % texts.length]
    for (let i = currentText.length; i >= 0; i--) {
      setTimeout(() => {
        textElement.textContent = currentText.slice(0, i)
      }, typingSpeed * (currentText.length - i))
    }
    await new Promise((resolve) => setTimeout(resolve, typingSpeed * currentText.length))
    for (let i = 0; i <= newText.length; i++) {
      setTimeout(() => {
        textElement.textContent = newText.slice(0, i)
      }, typingSpeed * i)
    }
    await new Promise((resolve) => setTimeout(resolve, typingSpeed * newText.length))
    await new Promise((resolve) => setTimeout(resolve, 3000))
  }

  onMount(async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    while (true) {
      await typeNextText()
    }
  })
</script>

<div class="anchor" id="hero" />
<h1 bind:this={textElement}>Modern Comp Tutoring</h1>

<style lang="scss">
  h1 {
    font-family: 'Close and Open';
    font-size: 4rem;
    backdrop-filter: blur(3px);
    padding: 5rem;
    // blinking cursor
    &::after {
      content: '_';
      margin-left: 0.2rem;
      animation: blink 1s steps(1) infinite;
    }
    @keyframes blink {
      50% {
        opacity: 0;
      }
    }
    transition: text-shadow 1s;
  }
</style>
