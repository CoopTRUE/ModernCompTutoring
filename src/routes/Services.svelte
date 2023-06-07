<script lang="ts">
  /* const defaultDelay = 0.1
  function itemFly(element: HTMLLIElement, parameters: { index: number; visible: boolean }) {
    const { index } = parameters
    const delay = index * defaultDelay
    const animations = [
      'fly-in-right 0.5s ease forwards',
      'fly-in-left 0.5s ease forwards',
      'fly-in-top 0.5s ease forwards',
      'fly-in-bottom 0.5s ease forwards'
    ]
    const animation = animations[Math.floor(Math.random() * animations.length)]
    element.style.setProperty('animation', `${animation}`)
    return {
      destroy() {
        element.style.removeProperty('animation')
      }
    }
  } */
</script>

<section id="services">
  <div class="info">
    <h2 class="title">Services</h2>
    <p class="description">Our services include:</p>
  </div>
  <ul class="services">
    <li class="service basic-web-dev">
      <h3 class="title">Basic Web Development</h3>
      <h4 class="subtitle">Introduction to Web Development</h4>
      <p class="description">
        Discover the fundamentals of creating a website with our comprehensive package. You'll dive
        into the basics of CSS, HTML, and JavaScript, and embark on your coding journey with no
        prior knowledge required.
      </p>
      <a
        href="mailto:contact@moderncomptutoring.com?subject=Interested in the Basic Web Development Package"
      >
        Contact Us
      </a>
    </li>
    <li class="service intermediate-web-dev">
      <h3 class="title">Intermediate Web Development Package</h3>
      <h4 class="subtitle">Advanced Web Development</h4>
      <p class="description">
        Expand your web development skills with our advanced course. You'll master the intricacies
        of Node.js, Express.js, and MongoDB, and learn how to create complex websites complete with
        API endpoints and database connections.
      </p>
      <a
        href="mailto:contact@moderncomptutoring.com?subject=Interested in the Intermediate Web Development Package"
      >
        Contact Us
      </a>
    </li>
    <li class="service advanced-web-dev">
      <h3 class="title">Advanced Web Development Package</h3>
      <h4 class="subtitle">Full Stack Mastery</h4>
      <p class="description">
        Take your web application skills to the next level with our Full Stack Mastery package.
        You'll get hands-on experience with modern frontend and backend frameworks like Svelte,
        Sveltekit, TypeScript, MySQL, and Prisma.
      </p>
      <a
        href="mailto:contact@moderncomptutoring.com?subject=Interested in the Advanced Web Development Package"
      >
        Contact Us
      </a>
    </li>
    <li class="service crypto-defi">
      <h3 class="title">Crypto DeFi Package</h3>
      <h4 class="subtitle">Cryptocurrency and DeFi Basics</h4>
      <p class="description">
        Demystify the world of decentralized finance with our Crypto DeFi Basics package. Learn how
        tokens and liquidity work, safely interact with smart contracts, and explore ways to earn
        self-controlled yield.
      </p>
      <a href="mailto:contact@moderncomptutoring.com?subject=Interested in the Crypto DeFi Package">
        Contact Us
      </a>
    </li>
    <li class="service crypto-development">
      <h3 class="title">Crypto Development Package</h3>
      <h4 class="subtitle">Blockchain Development Essentials</h4>
      <p class="description">
        Our Blockchain Development Essentials package offers an in-depth understanding of how to
        code on the blockchain. Develop your own decentralized app and learn how to interact with
        the blockchain using code. A basic understanding of DeFi and cryptocurrency is required.
      </p>
      <a
        href="mailto:contact@moderncomptutoring.com?subject=Interested in the Crypto Development Package"
      >
        Contact Us
      </a>
    </li>
    <li class="service individual-tutoring">
      <h3 class="title">Individual Tutoring Package</h3>
      <h4 class="subtitle">Personalized Learning Experience</h4>
      <p class="description">
        Embrace a tailor-made journey in coding with our Individual Tutoring Package. You'll receive
        one-on-one attention, personalized lesson plans, and the flexibility to learn at your own
        pace. This package caters to all levels, from beginners exploring the basics to advanced
        learners looking to refine their skills. Learn, grow, and excel with guidance tailored to
        your unique coding goals.
      </p>
      <a
        href="mailto:contact@moderncomptutoring.com?subject=Interested in the Individual Tutoring Package"
      >
        Contact Us
      </a>
    </li>
  </ul>
</section>

<style lang="scss">
  $colors: (
    'basic-web-dev': #ff6f69,
    'intermediate-web-dev': #ffcc5c,
    'advanced-web-dev': #88d8b0,
    'crypto-defi': #34eb9b,
    'crypto-development': #8458b3,
    'individual-tutoring': #fa7921
  );
  @each $class, $color in $colors {
    .#{$class} {
      border: 2px solid $color;
      .title {
        color: $color;
      }
    }
  }
  section#services {
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(6px);
    .info {
      margin-bottom: 1.5rem;
      text-align: center;

      .title {
        font-weight: 700;
        font-size: 2rem;
      }
      .description {
        font-size: 1.2rem;
      }
    }
    position: relative;
    width: min(100%, 1500px);
    margin-inline: auto;
  }
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    list-style: none;
  }
  .service {
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    transition: transform 0.3s ease-in-out;
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 0.5rem;

    &:hover {
      // transform: scale(1.05);
    }
    .title {
      font-size: 1.5rem;
      font-weight: 700;
    }
    .subtitle {
      font-size: 1.2rem;
      color: #aaa;
    }
    .description {
      font-size: 1rem;
      line-height: 1.6;
    }
    a {
      display: inline-block;
      margin-inline: auto;
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background-color: #fff;
      color: #000;
      font-weight: 700;
      text-decoration: none;
      &::after {
        display: inline-block;
        // move block to the left
        margin-left: -1ch;
        content: '→';
        opacity: 0;
        transition: all 0.3s ease;
      }
      &:hover::after,
      &:focus::after {
        opacity: 1;
        padding-left: 1.5ch;
      }
    }
  }
  @keyframes fly-in-right {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fly-in-left {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fly-in-bottom {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fly-in-top {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
