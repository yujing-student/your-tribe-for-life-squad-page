<script>
  import Package from "$lib/package/Package.svelte";
  import Header from "$lib/headerFdnd.svelte";
</script>

<svelte:head>
    <title>FDND Squads</title> 
</svelte:head>

<Header />

<main>
  <Package
    colors={{
      topLeft: "#f2bd80",
      topRight: "#f2bd80",
      left: "#ad8455",
      right: "#f5bf82",
      front: "#e3b178",
      back: "#ad8455",
      border: "#c9a574",
    }}
    size={8}
    rotation={{ x: "-10", y: "-15" }}
    title={"Squad C"}
    href={"/squad/3"}
  />

  <Package
  colors={{
    topLeft: "#f2bd80",
    topRight: "#f2bd80",
    left: "#f5bf82",
    right: "#ad8455",
    front: "#e3b178",
    back: "#ad8455",
    border: "#c9a574",
  }}
  size={8}
    rotation={{ x: "-10", y: "15" }}
    title={"Squad D"}
    href={"/squad/4"}
  />
</main>

<style>
  h1 {
    width: 100%;
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    letter-spacing: 2px;
    font-weight: 800;
    color: white;
    margin-top: 2rem;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
    height: 100%;
  }
</style>
