<section id="about">
  <ul>
    <li>
      <h2>Modern Approach to Coding</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto atque consequuntur
        vel est expedita nisi sequi doloremque nemo pariatur accusantium quia hic nulla magni
        cumque, labore veritatis rem blanditiis.
      </p>
    </li>
    <li>
      <h2>Beginner to Advanced courses</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus tenetur veniam
        dolore dolor nihil asperiores, eius accusamus commodi quasi excepturi magni fuga, aliquid
        vero eligendi ipsum blanditiis. Sint, vel?
      </p>
    </li>
    <li>
      <h2>Fun and Engaging Lessons</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, excepturi est. Sapiente
        repudiandae magni, facere, esse explicabo voluptates asperiores dicta dolores, debitis vel
        maxime rem numquam assumenda consequuntur nobis dolorum.
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
