<script lang="ts">
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  export let navHeight: number
</script>

<header bind:clientHeight={navHeight}>
  <h1 class="name">Modern Comp Tutoring</h1>
  <nav>
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
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
    padding: min(2rem, 4vw) min(3rem, 8vw);
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    @media (max-width: 830px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .name {
    font-family: 'Close and Open';
    font-size: min(2rem, 8vw);
    white-space: nowrap;
    // add 2px black stroke
  }
  nav {
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      gap: min(2rem, 5vw);
    }
    li {
      display: block;
      transition: margin-top 0.2s;
      &:hover {
        margin-top: -0.2rem;
      }
    }
    a {
      text-decoration: none;
      color: white;
      font-family: 'Close and Open';
      font-size: min(1.5rem, 6vw);
      text-decoration: underline;
    }
  }
</style>
