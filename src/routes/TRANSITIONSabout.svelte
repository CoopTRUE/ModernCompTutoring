<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer'

  const mobileWidth = 1200
  let innerWidth: number
  $: isMobile = innerWidth < mobileWidth

  function getDelay(offset: number, isMobile: boolean) {
    // I pass in isMobile as a parameter so svelte knows recall this function when isMobile changes
    return isMobile ? 0 : offset
  }

  let nodes: HTMLLIElement[] = []
</script>

<svelte:window bind:innerWidth />
<section>
  <ul class="about">
    <IntersectionObserver element={nodes[0]} let:intersecting threshold={0.6}>
      <li
        class="item"
        bind:this={nodes[0]}
        class:intersecting
        class:isMobile
        style="--delay: {getDelay(0, isMobile)}s"
      >
        <h2 class="title">Modern Approach to Coding</h2>
        <p class="description">
          Explore the forefront of technology with our up-to-date and innovative curriculum. Dive
          into Python, JavaScript, CSS, and HTML, and apply your learning to real-world scenarios.
          We're not just teaching you how to code; we're preparing you for a future powered by tech.
        </p>
      </li>
    </IntersectionObserver>
    <IntersectionObserver element={nodes[1]} let:intersecting threshold={0.6}>
      <li
        class="item"
        bind:this={nodes[1]}
        class:intersecting
        class:isMobile
        style="--delay: {getDelay(0.15, isMobile)}s"
      >
        <h2 class="title">Beginner to Advanced courses</h2>
        <p class="description">
          No matter your coding proficiency, we've got you covered. Our courses range from Basic Web
          Development for beginners to advanced Cryptocurrency and DeFi. We provide comprehensive
          learning tailored to your skill level, ensuring an enriching experience for all.
        </p>
      </li>
    </IntersectionObserver>
    <IntersectionObserver element={nodes[2]} let:intersecting threshold={0.6}>
      <li
        class="item"
        bind:this={nodes[2]}
        class:intersecting
        class:isMobile
        style="--delay: {getDelay(0.3, isMobile)}s"
      >
        <h2 class="title">Fun and Engaging Lessons</h2>
        <p class="description">
          Our lessons are interactive, enjoyable, and designed to fuel your passion for technology.
          Through hands-on projects and collaborative sessions, we offer a learning experience
          that's as exciting as it is informative. With us, learning code is not just educational,
          it's engaging and fun.
        </p>
      </li>
    </IntersectionObserver>
  </ul>
</section>

<style lang="scss">
  // *:has(:not(.intersecting)) {
  //   overflow: hidden;
  // }
  section {
    margin-bottom: 7rem;
  }
  ul.about {
    margin-inline: auto;
    width: 85rem;
    max-width: 85%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    list-style: none;
    padding: min(2rem, 6vw);
    border-radius: 1rem;
    @media (max-width: 1200px) {
      grid-template: repeat(3, 1fr) / 1fr;
      gap: 1rem;
      max-width: 75%;
      .title {
        text-align: center;
      }
    }
    @media (max-width: 520px) {
      max-width: 100%;
    }
  }
  .item {
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.25);
    padding: 2rem;
    border-radius: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease-in-out;
    &:hover {
      // transform: scale(1.05);
    }
    .title {
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 1rem;
      // cool shade of green
      color: #00ff00;
    }
    .description {
      line-height: 1.5;
    }
    opacity: 0;
    &.isMobile {
      transform: translateX(-200px);
      &:nth-child(2) {
        transform: translateX(200px);
      }
      transition: all 1.1s var(--delay);
    }
    &:not(.isMobile) {
      transform: translateY(-200px);
      transition: all 0.8s var(--delay);
    }
    &.intersecting {
      &.isMobile {
        transform: translateX(0);
      }
      &:not(.isMobile) {
        transform: translateY(0);
      }
      opacity: 1;
    }
  }
</style>
