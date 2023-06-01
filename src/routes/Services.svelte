<section id="services">
  <h2>Services</h2>
  <p>Our services include:</p>
  <ul class="services">
    <li class="service tutoring">
      <h3>Tutoring and Mentoring</h3>
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
    <li class="service packages">
      <h3>Packages</h3>
      <p>We offer packages for people who want to learn a general subject like web development</p>
      <ul>
        <li>
          <h4>Basic Web Development</h4>
          <p>
            This package will teach you all you need to know to get started with web development.
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </li>
        <li>
          <h4>Intermediate Web Development</h4>
          <p>
            This package is for people who already know the basics of web development and want to
            create advanced websites with api endpoints and database connections.
          </p>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </li>
        <li>
          <h4>Advanced Web Development</h4>
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
    </li>
  </ul>
</section>

<style lang="scss">
  #services {
    background: rgba(0, 0, 0, 0.95);
  }
  h2 {
    font-weight: 700;
    font-size: 2rem;
  }
  p {
    width: 70ch;
  }
  .services {
    display: grid;
    flex-direction: row;
    gap: 1rem;
  }

  .service {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  }

  .services > li > h3 {
    margin: 0;
  }

  .services > li > p {
    margin: 0;
  }

  .services > li > ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .services > li > ul > li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .services > li > ul > li > ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .services > li > ul > li > ul > li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
