<script lang="ts">
  import Hero from './Hero.svelte'
  import Matrix from '$lib/components/Matrix.svelte'
  import Navbar from '$lib/components/Navbar.svelte'
  import About from './About.svelte'
  import Services from './Services.svelte'
  import Footer from '$lib/components/Footer.svelte'

  let navHeight: number
</script>

<svelte:head>
  <title>Modern Comp Tutoring</title>
  <meta
    name="description"
    content="Modern Comp Tutoring is a tutoring service for computer science students specializing in nearly all major programming languages."
  />
</svelte:head>

<Navbar bind:navHeight />
<main style:margin-top="{navHeight}px">
  <Hero />
  <About />
  <Services />
  <Footer />
</main>
<Matrix />

<style lang="scss">
</style>
