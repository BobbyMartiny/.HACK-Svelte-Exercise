<script>
  let { profName, subject, rating, comment } = $props();
</script>

<div class="card">
  <div class="header">
    <h3>{profName}</h3>
    <span class="subject">{subject}</span>
  </div>

  <div class="rating-row">
    <strong>Rating: {rating} / 5</strong>
    
    {#if rating > 4}
      <span class="badge gold">Top Tier</span>
    {/if}

    {#if rating < 3}
      <span class="badge red">Avoid!</span>
    {/if}
  </div>

  <p class="comment">"{comment}"</p>
</div>



<!-- Ignore the styling -->
<style>
  .card { border: 1px solid #ddd; padding: 15px; border-radius: 8px; margin-bottom: 15px; background: white; }
  .header { display: flex; justify-content: space-between; align-items: center; }
  .subject { background: #eee; padding: 4px 10px; border-radius: 12px; font-size: 0.85rem; }
  .rating-row { display: flex; align-items: center; gap: 10px; margin: 10px 0; }
  .badge { padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; }
  .gold { background: #fff3cd; color: #856404; border: 1px solid #ffeeba; }
  .red { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
  .comment { font-style: italic; color: #555; }
</style>