<script>
    export let data;
    import ButtonComponent from './button.svelte';
    import Brief from '$lib/briefForm.svelte';

    function checkAvatarImage(avatar) {
        if (avatar.includes('https')) {
            return true
        }

        return false
    }

    console.log({data});
</script>

<header>squadpage</header>
<body>


<main>


<ul>
    {#each data.squadD as person}
        <li>
            {#if person.avatar}
                <img alt="Foto van {person.name}" src="{person.avatar}">
            {:else}
                <img alt="standard icon"
                     src="../../static/images/profile-icon.png"/>
            {/if}
            <div>
                <a href="/{person.id}">


                    {person.name}
                </a>
                <span>klas : {person.squad_id}</span>
                <ButtonComponent>

                </ButtonComponent>

            </div>

        </li>
    {/each}
</ul>

<p>dit is de F klas </p>
<ul>
    {#each data.squadF as person}
        <li>
            {#if person.avatar}
                <img alt="Foto van {person.name}" src="{person.avatar}">
            {:else}
                <img alt="standard icon"
                     src="../../static/images/profile-icon.png"/>
            {/if}
            <div>
                <a href="/{person.id}">


                    {person.name}
                </a>
                <span>klas : {person.squad_id}</span>
                <ButtonComponent>

                </ButtonComponent>

            </div>

        </li>
    {/each}
</ul>
<p>dit is de E klas </p>

<ul>
    {#each data.squadE as person}
        <li>
            {#if person.avatar}
                <img alt="Foto van {person.name}" src="{person.avatar}">
            {:else}
                <img alt="standard icon"
                     src="../../static/images/profile-icon.png"/>
            {/if}
            <div>
                <a href="/{person.id}">


                    {person.name}
                </a>
                <span>klas : {person.squad_id}</span>
                <ButtonComponent>

                </ButtonComponent>

            </div>

        </li>
    {/each}
</ul>
<ButtonComponent/>
</main>
</body>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');


    body{
        background-color: #33293A;

    }
    header{
        font-size: 80px;
        display: flex;
        background-color: #33293A;
        color: white;
        font-family: "Italianno", sans-serif;
        margin-left: 0.5em;
    }

    main {
        line-height: 1.5;
        font-family: "Italianno", sans-serif;
        font-size: 16px;
        background-color: #33293A;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

        gap: 2em;
        /*max-width: 1400px;*/

    }

    li {
        border-radius: 2px;
        border: 1px solid #7C7535;
        background: #CDCDBF;
        box-shadow: 6px 8px 12px 0px rgba(0, 0, 0, 0.35);
        width: 350px;
        height: 225px;
        flex-shrink: 0;
        display: grid;
        /*grid-template-columns: 200px 1fr;*/
        /*grid-template-rows: auto auto auto;*/


    }
    img{
        width: 128px;
        grid-column: 1;
        display: grid;
        align-items: center;
        stroke-width: 1px;
        stroke: rgba(30, 30, 30, 0.50);
        filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.25));
        align-self: center;
        padding-left: 2em;
    }
    div{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        grid-column: 2;
        align-items: center;
        justify-content: center;
        border-left: #140A3D 2px solid;
        padding-left: 1em;
        font-size: 25px;
      margin: 1em 0 1em 0
    }
    a{
        grid-column: 1;
        font-size: 40px;
        color: black;


    }
    span{

        /*grid-column: 2;*/
        grid-column: 1;

    }

    .button-component{

        grid-column: 1;
    }


</style>

<Brief/>