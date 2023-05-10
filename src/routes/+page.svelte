<script>
  import Hero from './Hero.svelte'
  import Matrix from '$lib/components/Matrix.svelte'
  import Navbar from '$lib/components/Navbar.svelte'
  import About from './About.svelte'
</script>

<svelte:head>
  <title>Modern Comp Tutoring</title>
  <meta
    name="description"
    content="Modern Comp Tutoring is a tutoring service for computer science students specializing in nearly all major programming languages."
  />
</svelte:head>

<Navbar />
<main>
  <Hero />
  <About />
</main>
<Matrix />

<style lang="scss">
</style>
