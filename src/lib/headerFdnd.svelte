<script>
  export let backHref = null;

  import backButtonIcon from "$lib/images/chevronRight.svg";
</script>

<header>
  {#if backHref}
    <a href="{backHref}" aria-label="Go to previous page">
      <img alt="Previous page icon" src={backButtonIcon} />
    </a>
  {/if}

  <h2>Fdnd</h2>
</header>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    background-color: var(--mainColor);
    width: 100%;
    padding: 2rem;
  }
  header a {
    width: 3rem;
    height: 3rem;
    background-color: #fff;
    color: var(--secondColor);
    text-decoration: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    grid-column: 1;
  }
  header h2 {
    font-size: 3rem;
    text-transform: uppercase;
    font-family: var(--mainFont);
    letter-spacing: 2px;
    font-weight: 800;
    justify-self: center;
    color: white;
    grid-column: 2;
  }
</style>
