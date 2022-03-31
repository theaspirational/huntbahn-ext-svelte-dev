<script lang="ts">
  import { onMount } from "svelte";
  import Navbar from "./Navbar.svelte";
  import Auth from "./Auth.svelte";
  import Home from "./Home.svelte";

  import { gunUser } from "../initGun";
  import db, { ready } from "../store";
  var { pair } = db;

  db.pair.subscribe((val) => {
    pair = val;
  });

  onMount(async () => {
    ready.then(() => {
      if (pair) {
        gunUser.auth(pair, async (r) => {
          if ("err" in r) {
            console.log("Authentication failed with err:", r.err);
          } else {
            console.log(`Signed in as ${await gunUser.get("alias")}`);
          }
        });
      }
    });
  });
</script>

<div data-theme="dark" class="popup">
  <Navbar />
  {#if pair}
    <Home />
  {:else}
    <Auth />
  {/if}
</div>

<style lang="postcss">
  .popup {
    @apply grid h-auto grid-cols-1 w-[420px];
  }
</style>
