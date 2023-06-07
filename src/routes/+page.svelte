<script lang="ts">
  import Hero from './Hero.svelte'
  import Matrix from '$lib/components/Matrix.svelte'
  import Navbar from '$lib/components/Navbar.svelte'
  import About from './About.svelte'
  import Services from './Services.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import AboutMe from './AboutMe.svelte'

  let navHeight: number
</script>

<Navbar bind:navHeight />
<main style:margin-top="{navHeight}px">
  <Hero />
  <About />
  <AboutMe />
  <Services />
  <Footer />
</main>
<Matrix />

<style lang="scss">
</style>
