<script lang="ts">
  import { typing } from '$lib/effects'

  const texts = [
    'Modern Python Tutoring',
    'Modern HTML Tutoring',
    'Modern JavaScript Tutoring',
    'Modern CSS Tutoring',
    'Modern Svelte Tutoring',
    'Modern TypeScript Tutoring'
  ]
</script>

<section id="hero">
  <p use:typing={{ texts: texts, typingSpeed: 40, pauseDuration: 3000 }} class="typing" />
</section>

<style lang="scss">
  #hero {
    height: clamp(8rem, 70vw, 22rem);
    display: grid;
    place-items: center;
  }
  p {
    font-family: 'Close and Open';
    font-size: clamp(3rem, 10vw, 5rem);
    text-align: center;
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
  }
</style>
