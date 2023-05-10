<header>
  <p class="name">Modern Comp Tutoring</p>
  <nav>
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 3rem;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
  p {
    font-family: 'Close and Open';
    font-size: 2rem;
    // add 2px black stroke
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
</style>
