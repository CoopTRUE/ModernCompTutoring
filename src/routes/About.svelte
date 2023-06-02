<section id="about">
  <ul>
    <li>
      <h2>Modern Approach to Coding</h2>
      <p>
        Explore the forefront of technology with our up-to-date and innovative curriculum. Dive into
        Python, JavaScript, CSS, and HTML, and apply your learning to real-world scenarios. We're
        not just teaching you how to code; we're preparing you for a future powered by tech.
      </p>
    </li>
    <li>
      <h2>Beginner to Advanced courses</h2>
      <p>
        No matter your coding proficiency, we've got you covered. Our courses range from Basic Web
        Development for beginners to advanced Cryptocurrency and DeFi. We provide comprehensive
        learning tailored to your skill level, ensuring an enriching experience for all.
      </p>
    </li>
    <li>
      <h2>Fun and Engaging Lessons</h2>
      <p>
        Our lessons are interactive, enjoyable, and designed to fuel your passion for technology.
        Through hands-on projects and collaborative sessions, we offer a learning experience that's
        as exciting as it is informative. With us, learning code is not just educational, it's
        engaging and fun.
      </p>
    </li>
  </ul>
</section>

<style lang="scss">
  #about {
    margin-bottom: 7rem;
  }
  ul {
    margin-inline: auto;
    width: 85rem;
    max-width: 85%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    list-style: none;
    @media (max-width: 1200px) {
      grid-template: repeat(3, 1fr) / 1fr;
      gap: 1rem;
      max-width: 75%;
      h2 {
        text-align: center;
      }
    }
  }
  li {
    background: rgba(0, 0, 0, 0.9);
    padding: 1rem;
    border-radius: 0.5rem;
    border: 2px solid rgba(255, 255, 255, 0.5);
    h2 {
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
</style>
