<script>
  import PackageIcon from './PackageIcon.svelte';
  export let title;
  export let href;
  export let colors;
  export let rotation;
  export let size;
</script>

<a href={href}>
  <PackageIcon colors={colors} rotation={rotation} size={size}/>
  <h2>{title}</h2>
</a>

<style>
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    margin: 1rem;
    height: 24rem;
    width: 100%;
  }

  h2 {
    font-size: 2rem;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    letter-spacing: 2px;
    font-weight: 600;
    color: white;
  }
</style>