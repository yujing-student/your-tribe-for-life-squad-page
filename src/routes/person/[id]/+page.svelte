<script>
    export let data

    import Brief from '$lib/briefForm.svelte';
    import backButtonIcon from '$lib/images/chevronRight.svg';
    import postzegelFrame from '$lib/images/postzegelFrame.svg';
    import { onMount } from 'svelte';
    import Header from '$lib/headerFdnd.svelte';
    import { slide } from 'svelte/transition';

    function checkAvatarImage (avatar) {
        if (avatar.includes('https')) {
        return true
        } 
        
        return false
    }

    // Variabele om bij te houden of het artikel open is
    let isOpen = false;

    // Functie om de .open class toe te voegen
    const toggleOpen = () => {
        isOpen = !isOpen;
    };
</script>

<svelte:head>
    <title>Persoonspagina</title> 
</svelte:head>

<Header backHref={`/squad/${data.person.squad_id}`}/>

<main>
        <section>
            <div class="envelop close" class:open={isOpen}>
                <div class="flap"></div>
                <article>
                    <div class="postzegel">
                        {#if data.person.avatar.length > 0 && checkAvatarImage (data.person.avatar)}
                            <img src="{data.person.avatar}" alt="Avatar van {data.person.name}">
                        {:else if data.person.avatar.length > 0 || checkAvatarImage (data.person.avatar)}
                            <h3>{data.person.avatar}</h3>
                        {:else}
                            <img src="https://robohash.org/mail@ashallendesign.co.uk" alt="Avatar van {data.person.name}">
                        {/if}
                        <img id="postZegelFrame" src={postzegelFrame} alt="postzegel frame">
                    </div>
                

                <div>
                    <h1>{data.person.name} {data.person.surname}</h1>
                    <h3>Squad {data.person.squad_id}</h3>
                </div>

            </article>
        </div>

        
        <div class="envelop" class:open={isOpen}>
            <Brief {data} />
        </div>


        <button class="briefOpen" on:click={toggleOpen}>Brief versturen</button>
    </section>
</main>
    

<style>
    main {
        width: 100%;
        height: 100%;
    }
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
        height: 100%;
        padding: 2rem 0rem;
    }
    article {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9;
    }
    .envelop {
        position: relative;
    }
    /* .envelop:nth-of-type(1) {
        order: 2;
    }
    .envelop:nth-of-type(2) {
        order: 1;
    } */
    .envelop:nth-of-type(1) {
        z-index: 1;
    }
    .envelop .flap {
        border-left: 25rem solid transparent;
        border-right: 25rem solid transparent;
        border-bottom: 5rem solid transparent;
        border-top: 12rem solid #f5ead9;
        transform-origin: top;
        pointer-events: none;
        position: absolute;
        top: .22rem;
        border-radius: 5px;
        z-index: -4;

        /* transform: rotateX(180deg);
        transition: transform 0.4s ease, z-index 0.6s;
        z-index: 1; */
    }
    
    article div.postzegel {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    article div.postzegel img {
        position: absolute;
        top: 1rem;
        right: 1rem;
        object-fit: cover;
    }
    article div.postzegel h3 {
        position: absolute;
        top: 3rem;
        right: 2.25rem;
        font-size: 5rem;
        object-fit: cover;
        z-index: 44;
    }
    article div img:nth-child(1) {
        margin: .65rem 0.6rem;
        width: 6.6rem;
        height: 9rem;
        z-index: 44;
    }
    img#postZegelFrame {
        filter: drop-shadow(1px 0px 2px rgb(0 0 0 / 0.25));
    }
    article div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    article h1 {
        font-size: 2rem;
        margin-bottom: .5rem;
    }
    article h3 {
        font-weight: 100;
    }
    button.briefOpen {
        border: none;
        font-size: 1rem;
        padding: .75rem 2rem;
        background-color: rgb(239, 38, 38);        
        border-radius: 4px;
        color: white;
        width: max-content;
        cursor: pointer;
        transition: .5s ease-out;
        margin-top: 1.5rem;
        display: none;
    }
    button.briefOpen:hover {
        background-color: rgb(220, 35, 35); 
    }
    /* doe dit wanneer javascript aan staat */
    /* @media (scripting: enabled) {
        .envelop:nth-child(2) {
            display: none;
        }
        .envelop.open:nth-child(2) {
            display: flex;
        }
        button.briefOpen {
            display: block;
        }
        .envelop:nth-of-type(1),
        .envelop:nth-of-type(2) {
            order: unset;
        }
        .close .flap {
            transform: rotateX(0deg);
            transition: transform 0.4s 0.6s ease, z-index 1s;
            z-index: 5;
        }
        .open .flap {
            transform: rotateX(180deg);
            transition: transform 0.4s ease, z-index 0.6s;
            z-index: 1;
        }
    } */

    @media (max-width: 1000px) {
        .envelop .flap {
            border-left: 40vw solid transparent;
            border-right: 40vw solid transparent;
        }   
    }
    @media (max-width: 768px) {
        .envelop .flap {
            border-left: 45vw solid transparent;
            border-right: 45vw solid transparent;
            border-top: 10rem solid #f5ead9
        }     
    }
    @media (max-width: 480px) {
        .envelop .flap {
            border-left: 45vw solid transparent;
            border-right: 45vw solid transparent;
        }
    }
</style>