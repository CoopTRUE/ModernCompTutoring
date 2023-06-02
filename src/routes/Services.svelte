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
    </li>
    <li class="service intermediate-web-dev">
      <h3 class="title">Intermediate Web Development Package</h3>
      <h4 class="subtitle">Advanced Web Development</h4>
      <p class="description">
        Expand your web development skills with our advanced course. You'll master the intricacies
        of Node.js, Express.js, and MongoDB, and learn how to create complex websites complete with
        API endpoints and database connections.
      </p>
    </li>
    <li class="service advanced-web-dev">
      <h3 class="title">Advanced Web Development Package</h3>
      <h4 class="subtitle">Full Stack Mastery</h4>
      <p class="description">
        Take your web application skills to the next level with our Full Stack Mastery package.
        You'll get hands-on experience with modern frontend and backend frameworks like Svelte,
        Sveltekit, TypeScript, MySQL, and Prisma.
      </p>
    </li>
    <li class="service crypto-defi">
      <h3 class="title">Crypto DeFi Package</h3>
      <h4 class="subtitle">Cryptocurrency and DeFi Basics</h4>
      <p class="description">
        Demystify the world of decentralized finance with our Crypto DeFi Basics package. Learn how
        tokens and liquidity work, safely interact with smart contracts, and explore ways to earn
        self-controlled yield.
      </p>
    </li>
    <li class="service crypto-development">
      <h3 class="title">Crypto Development Package</h3>
      <h4 class="subtitle">Blockchain Development Essentials</h4>
      <p class="description">
        Our Blockchain Development Essentials package offers an in-depth understanding of how to
        code on the blockchain. Develop your own decentralized app and learn how to interact with
        the blockchain using code. A basic understanding of DeFi and cryptocurrency is required.
      </p>
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
    border-radius: 1rem;
    backdrop-filter: blur(6px);
    .info {
      margin-bottom: 1.5rem;
      text-align: center;

      .title {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
      .description {
        font-size: 1.2rem;
      }
    }
    position: relative;
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

    &:hover {
      transform: scale(1.05);
    }
    .title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .subtitle {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #aaa;
    }
    .description {
      font-size: 1rem;
      line-height: 1.6;
    }
  }
</style>
