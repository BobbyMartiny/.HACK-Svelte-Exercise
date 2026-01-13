<script>
  import ReviewCard from "$lib/ReviewCard.svelte";

  let showTopTierOnly = $state(false);

  let allReviews = [
    { id: 1, prof: "Dr. Smith", subject: "CompSci", rating: 5, comment: "Changed my life." },
    { id: 2, prof: "Prof. Stone", subject: "Math", rating: 2, comment: "Very confusing lectures." },
    { id: 3, prof: "Dr. Who", subject: "History", rating: 5, comment: "Literally takes you back in time." },
    { id: 4, prof: "Mrs. P", subject: "Physics", rating: 3, comment: "It was okay, lots of homework." }
  ];

  function toggleFilter() {
    showTopTierOnly = !showTopTierOnly;
  }
</script>

<main>
  <h1>SMU Professor Reviews</h1>

  <div class="controls">
    <button onclick={toggleFilter}>
      {showTopTierOnly ? "Show All Reviews" : "Show Top Tier Only"}
    </button>
  </div>

  <section>
    {#each allReviews as review}
      {#if showTopTierOnly === false || review.rating > 4}
        <ReviewCard 
          profName={review.prof} 
          subject={review.subject} 
          rating={review.rating} 
          comment={review.comment} 
        />
      {/if}
    {/each}
  </section>

  <hr />
  <a href="/departments">View Department Directory →</a>
</main>

<!-- Ignore the styling -->
<style>
  main { max-width: 600px; margin: 0 auto; padding: 2rem; font-family: sans-serif; }
  .controls { margin-bottom: 20px; text-align: right; }
  button { padding: 8px 16px; cursor: pointer; background: #007bff; color: white; border: none; border-radius: 4px; }
  button:hover { background: #0056b3; }
</style>