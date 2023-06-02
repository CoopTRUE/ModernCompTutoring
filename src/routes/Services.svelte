<section id="services">
  <div class="info">
    <h2 class="title">Services</h2>
    <p class="description">Our services include:</p>
  </div>
  <ul class="services">
    <li class="service">
      <h3 class="title">Basic Web Development</h3>
      <h4 class="subtitle">Introduction to Web Development</h4>
      <p class="description">
        Discover the fundamentals of creating a website with our comprehensive package. You'll dive
        into the basics of CSS, HTML, and JavaScript, and embark on your coding journey with no
        prior knowledge required.
      </p>
    </li>
    <li class="service">
      <h3 class="title">Intermediate Web Development Package</h3>
      <h4 class="subtitle">Advanced Web Development</h4>
      <p class="description">
        Expand your web development skills with our advanced course. You'll master the intricacies
        of Node.js, Express.js, and MongoDB, and learn how to create complex websites complete with
        API endpoints and database connections.
      </p>
    </li>
    <li class="service">
      <h3 class="title">Advanced Web Development Package</h3>
      <h4 class="subtitle">Full Stack Mastery</h4>
      <p class="description">
        ake your web application skills to the next level with our Full Stack Mastery package.
        You'll get hands-on experience with modern frontend and backend frameworks like Svelte,
        Sveltekit, TypeScript, MySQL, and Prisma.
      </p>
    </li>
    <li class="service">
      <h3 class="title">Crypto DeFi Package</h3>
      <h4 class="subtitle">Cryptocurrency and DeFi Basics</h4>
      <p class="description">
        Demystify the world of decentralized finance with our Crypto DeFi Basics package. Learn how
        tokens and liquidity work, safely interact with smart contracts, and explore ways to earn
        self-controlled yield.
      </p>
    </li>
    <li class="service">
      <h3 class="title">Crypto Development Package</h3>
      <h4 class="subtitle">Blockchain Development Essentials</h4>
      <p class="description">
        Our Blockchain Development Essentials package offers an in-depth understanding of how to
        code on the blockchain. Develop your own decentralized app and learn how to interact with
        the blockchain using code. A basic understanding of DeFi and cryptocurrency is required.
      </p>
    </li>
    <li class="service">
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
  section#services {
    padding: 20px;
    background-color: #f9f9f9;
    .info {
      margin-bottom: 30px;

      .title {
        font-size: 2em;
        color: #333;
        margin-bottom: 10px;
      }

      .description {
        font-size: 1.2em;
        color: #666;
      }
    }
  }
  ul.services {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .service {
    flex-basis: 45%;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    .title {
      font-size: 1.5em;
      color: #333;
      margin-bottom: 10px;
    }

    .subtitle {
      font-size: 1.2em;
      color: #666;
      margin-bottom: 10px;
    }

    .description {
      font-size: 1em;
      color: #333;
      line-height: 1.6;
    }
  }
</style>
