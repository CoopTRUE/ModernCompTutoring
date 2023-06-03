<script lang="ts">
  import headshot from '$lib/images/headshot.jpg'
  import IntersectionObserver from 'svelte-intersection-observer'

  let imageContainer: HTMLElement
</script>

<section id="about">
  <div class="content">
    <h2 class="title">About Me</h2>
    <p class="description">
      Hello, I'm Cooper,a 17-year-old high school student with a passion for coding and technology.
      My journey began with basic program development and has since expanded into more advanced
      areas like blockchain and DeFi. I believe in making coding accessible and enjoyable for
      everyone, and that's why I've created Modern Comp Tutoring. I'm excited to share my knowledge
      and help others discover the limitless opportunities in the world of coding.
    </p>
  </div>
  <IntersectionObserver element={imageContainer} let:intersecting threshold={0.5}>
    <img
      class="profile-pic"
      class:intersecting
      src={headshot}
      alt="Cooper"
      bind:this={imageContainer}
    />
  </IntersectionObserver>
</section>

<style lang="scss">
  section {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 2rem;
    padding-bottom: 5rem;
    gap: 2rem;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(6px);
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1rem;
      place-items: center;
      .content {
        text-align: center;
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: -90px;
      left: 0;
      width: 100%;
      height: 90px;
      background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
      pointer-events: none;
    }
  }
  .content {
    text-align: right;
    .title {
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 1rem;
    }
    .description {
      font-size: 1.2rem;
      line-height: 1.6;
      color: #ddd;
    }
  }
  .profile-pic {
    height: 400px;
    border-radius: 10px;
    border: 0px solid #fff;
    transition: all 0.5s ease-in-out;
    &.intersecting {
      border: 10px solid #fff;
      box-shadow: 0 0 10px white;
    }
  }
</style>
