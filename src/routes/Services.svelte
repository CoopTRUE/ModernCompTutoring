<section id="services">
  <div class="info">
    <h2>Services</h2>
    <p>Our services include:</p>
  </div>

  <ul class="services">
    <li class="service">
      <h3>Individual Tutoring</h3>
      <p>
        We offer tutoring and mentoring in a variety of programming languages and other subjects:
      </p>
      <ul>
        <li>Python</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Svelte</li>
      </ul>
    </li>
    <li class="service package">
      <h3>Basic Web Development Package</h3>
      <p>This package will teach you all you need to know to get started with web development.</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </li>
    <li class="service package">
      <h3>Intermediate Web Development Package</h3>
      <p>
        This package is for people who already know the basics of web development and want to create
        advanced websites with api endpoints and database connections.
      </p>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
    </li>
    <li class="service package">
      <h3>Advanced Web Development Package</h3>
      <p>
        This package is for people who want to create full stack web applications with modern
        frontend and backend frameworks.
      </p>
      <ul>
        <li>Svelte</li>
        <li>Sveltekit</li>
        <li>Typescript</li>
        <li>MySQL</li>
        <li>Prisma</li>
      </ul>
    </li>
  </ul>
</section>

<style lang="scss">
  #services {
    background: rgba(0, 0, 0, 0.95);
    padding: 0 3rem;
  }
  .info {
    text-align: center;
    padding: 2rem 0;
    h2 {
      font-weight: 700;
      font-size: 2rem;
    }
  }
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;
    list-style: none;
  }
  .service {
    background: rgba(255, 255, 255, 0.1);
    padding: 1.3rem;
    border-radius: 0.5rem;
    border: 2px solid rgba(255, 255, 255, 0.5);
    h3 {
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    ul {
      list-style: none;
      li {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }
    }
  }
</style>
