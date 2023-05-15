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

<div class="anchor" id="hero" />
<p use:typing={{ texts: texts, typingSpeed: 40, pauseDuration: 2000 }} class="typing" />

<style lang="scss">
  p {
    font-family: 'Close and Open';
    font-size: 4rem;
    padding: 5rem 0 5rem 5rem;
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
