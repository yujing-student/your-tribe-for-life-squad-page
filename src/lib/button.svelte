<script>
    export let style;
    export let href;
</script>

<style>
    .buttoncomponent {
          position: absolute;
          bottom: 0;
          right: 0;
          border: none;
          font-size: 1rem;
          padding: .75rem 2rem;
          background-color:#140a3d;
          border-radius: 14px 0 6px;
          color: white;
          width: max-content;
          cursor: pointer;
          transition: .5s ease-out;
          text-decoration: none;
      }
  
      .buttoncomponent:hover {
          background-color: rgb(220, 35, 35);
      }
  </style>

<a class="buttoncomponent" href={`/person/${href}`} {style}>Bericht</a>