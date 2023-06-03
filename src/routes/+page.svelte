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

<svelte:head>
  <title>Modern Comp Tutoring</title>
  <meta
    name="description"
    content="Unlock your potential with our comprehensive coding courses. Whether you're a beginner looking to explore the basics or an advanced learner seeking to master web development, blockchain or DeFi, we offer tailored learning experiences to meet your goals. Dive into our fun, engaging lessons and start your coding journey today."
  />
</svelte:head>

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
