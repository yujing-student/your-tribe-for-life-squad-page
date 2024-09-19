<script>
	export let data;
    // export let tekst;

    // Values that are passed in as props
    // are immediately available
    console.log({ data });
</script>


<article class="brief">
    <form> <!-- on:submit={handleSubmit} -->
        <textarea name="brief" id="brief" placeholder="Schrijf je bericht"></textarea>
    </form>

    <h3>Liefs, {data.person.name}...</h3> 
    
    <button type="submit">Verstuur</button>
</article>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');

    article {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 4fr 1fr;
        gap: 1.5rem;
        padding: 1.5rem;
    }
    article textarea {
        width: -webkit-fill-available;
        /* border: 2px solid 	#d8d0c4; */
        border: none;
        border-radius: 4px;
        height: -webkit-fill-available;
        padding: .75rem;
        font-size: 1rem;
        font-family: "Shantell Sans", system-ui;
        color: #1D1968;
        resize: none;
    }
    article h3 {
        margin: 0;
        padding: 0 0;
        align-self: center;
        font-family: "Shantell Sans", system-ui;
        color: #1D1968;
        font-weight: 500;
    }
    button {
        border: none;
        font-size: 1rem;
        padding: .75rem 2rem;
        background-color:#140a3d;
        border-radius: 4px;
        color: white;
        width: max-content;
        cursor: pointer;
        transition: .5s ease-out;
    }
    button:hover {
        background-color: rgb(220, 35, 35); 
    }
</style>