<script lang="ts">
  import { onMount } from "svelte";

  import db, { obj_db, ready } from "../store";
  var { candidate_url, candidate_name, candidate_tags, candidate_notes } = db;
  let new_tag: string;
  onMount(() => {
    ready.then(() => {
      console.log($candidate_tags);
    });
  });
</script>

<div class="card-box">
  <input
    class="card-input"
    type="text"
    id="name"
    placeholder="Card title (e.g. Candidate name)"
    bind:value={$candidate_name}
  />
  <label for="url">URL</label>
  <input
    class="card-input"
    type="text"
    id="url"
    placeholder="Source URL"
    bind:value={$candidate_url}
  />
  <label for="tags">Tags</label>
  <div>
    <input
      class="card-input"
      type="text"
      id="tags"
      placeholder="Add card tag e.g. DevOps"
      bind:value={new_tag}
    />
    {#each $candidate_tags as tag}
      <ul>
        <li>{tag}</li>
      </ul>
    {/each}
  </div>
  <label for="other-notes">Other notes</label>
  <textarea id="other-notes" type="text" bind:value={$candidate_notes} />
</div>

<style lang="postcss">
  .card-box {
    @apply bg-yellow-100 rounded-box flex flex-col col-span-2 m-2;
  }

  .card-input {
    @apply input input-bordered input-sm w-full max-w-xs;
  }
</style>
