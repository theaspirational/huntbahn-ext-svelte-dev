<script lang="ts">
  // import  { IGunUserInstance } from "gun/types";
  import { gunUser } from "../initGun";

  let username: string, password: string, message: string;

  import db from "../store";

  function Login(e: Event) {
    console.log(username + " " + password);
    gunUser.auth(username, password, (r) => {
      console.log(r);
      if ("err" in r) {
        message = r.err;
      } else {
        db.pair.set(r.sea);
        db.username.set(r.put.alias);
      }
    });
  }

  function Register(e: Event) {
    console.log(username + " " + password);
    gunUser.create(username, password, (r) => {
      console.log(r);
      if ("err" in r) {
        message = r.err;
      } else {
        message = `Successfully registered. You can now log-in as ${username}`;
      }
    });
  }
</script>

<div class="flex items-center justify-center ">
  <div
    class="flex-shrink-0 w-full max-w-sm shadow-2xl text-base-content card bg-base-100"
  >
    <div class="px-6 py-4">
      <p class="m-1 text-xl text-center">Login or create account</p>
      <form class="space-y-1" action="#" on:submit|preventDefault={Login}>
        <input
          class="w-full max-w-xs input input-bordered input-primary"
          type="text"
          placeholder="Username"
          aria-label="Username"
          bind:value={username}
          required
        />
        <input
          class="w-full max-w-xs input input-bordered input-primary"
          auto-complete="current-password"
          type="password"
          placeholder="Password"
          aria-label="Password"
          bind:value={password}
          required
        />
        <div class="flex items-center justify-center mt-4 space-x-2">
          <button class="btn btn-primary" type="submit"> Login </button>
          <button on:click={Register} class="btn btn-secondary" type="button">
            Register
          </button>
        </div>
      </form>
      {#if message}
        <p class="p-3 text-warning">{message}</p>
      {/if}
    </div>
  </div>
</div>
