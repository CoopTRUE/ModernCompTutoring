<script lang="ts">
  import { sentenceTyping } from '$lib/effects'
  import headshot from '$lib/images/headshot.jpg'
  import IntersectionObserver from 'svelte-intersection-observer'

  let sectionElem: HTMLElement
  let imageElem: HTMLElement
</script>

<IntersectionObserver once element={sectionElem} let:intersecting>
  <section id="about" bind:this={sectionElem}>
    <div class="content">
      <h2 class="title">About Me</h2>
      <p
        class="description"
        use:sentenceTyping={{
          start: intersecting,
          typingSpeed: 40,
          commaPauseDuration: 200,
          periodPauseDuration: 400
        }}
      >
        Hello, I'm Cooper, a 17-year-old high school student with a passion for coding and
        technology. My journey began with basic program development and has since expanded into more
        advanced areas like blockchain and DeFi. I believe in making coding accessible and enjoyable
        for everyone, and that's why I've created Modern Comp Tutoring. I'm excited to share my
        knowledge and help others discover the limitless opportunities in the world of coding.
      </p>
    </div>
    <IntersectionObserver element={imageElem} let:intersecting threshold={0.5}>
      <img
        class="profile-pic"
        class:intersecting
        src={headshot}
        alt="Cooper"
        bind:this={imageElem}
      />
    </IntersectionObserver>
  </section>
</IntersectionObserver>

<style lang="scss">
  section {
    width: min(100%, 1200px);
    // add glow
    // box-shadow: 0 0 50px rgba(100, 100, 100, 0.5);
    border-radius: 10px 10px 0 0;
    margin-inline: auto;
    display: grid;
    grid-template-columns: auto 400px;
    align-items: center;
    padding: 4rem;
    padding-bottom: 5rem;
    gap: 2rem;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    @media (max-width: 890px) {
      grid-template-columns: 1fr;
      gap: 1rem;
      place-items: center;
      .content {
        text-align: center;
      }
      .profile-pic {
        width: 80%;
      }
    }
    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: -90px;
    //   left: 0;
    //   width: 100%;
    //   height: 90px;
    //   background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    //   pointer-events: none;
    // }
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
      text-align: justify;
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
  }
  .profile-pic {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    border: 0px solid #fff;
    transition: border 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
    &.intersecting {
      border: 10px solid #fff;
      box-shadow: 0 0 10px white;
    }
  }
</style>
