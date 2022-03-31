<script lang="ts">
  import CandidateSVG from "./svg/Candidate.svelte";
  import db from "../store";
  import { gunUser } from "../initGun";
  var { username } = db;

  function Logout(e: Event) {
    gunUser.leave();
    db.pair.set("");
    db.username.set("");
  }
</script>

<div class="navbar">
  <div class="logo">
    <a class="text-center" href="http://huntbahn.tk" target="_blank">
      Huntbahn:
      <span class="flex ml-2 text-xl">
        <CandidateSVG />
        Profile Importer
      </span>
    </a>
  </div>
  <button
    on:click={Logout}
    class:hidden={!$username}
    class="btn btn-outline btn-xs"
  >
    Log-out: {$username}
  </button>
</div>

<style lang="postcss">
  .navbar {
    @apply flex items-center justify-around w-full mx-auto min-h-12 bg-neutral-focus;
  }
  .logo {
    @apply flex flex-col mt-2 font-medium text-base-content;
  }
</style>
