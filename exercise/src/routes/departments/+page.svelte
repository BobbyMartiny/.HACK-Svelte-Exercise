<script>
    let staffList = $state([]); // ignore the red underline 
    let loading = $state(false);

    async function loadData() {
        loading = true;
        // Input code to load data from '/api/profs'
        staffList = await response.json();
        loading = false;
    }
</script>

<main>
    <h1>Department Directory</h1>
    
    <button onclick={loadData}>Load Staff List</button>

    {#if loading}
        <p>Accessing University Database...</p>
    {/if}

    <ul class="directory-list">
        {#each staffList as person}
            <li>
                <strong>{person.name}</strong> 
                <span class="dept">{person.dept}</span>
                <span class="status">{person.status}</span>
            </li>
        {/each}
    </ul>

    <br/>
    <a href="/">← Back to Feed</a>
</main>

<!-- Ignore the styling -->
<style>
    main { max-width: 600px; margin: 0 auto; padding: 2rem; font-family: sans-serif; }
    button { background: #28a745; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 20px; }
    .directory-list { list-style: none; padding: 0; }
    .directory-list li { border-bottom: 1px solid #eee; padding: 10px 0; display: flex; justify-content: space-between; }
    .dept { color: #666; font-size: 0.9rem; }
    .status { background: #eee; padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; }
</style>