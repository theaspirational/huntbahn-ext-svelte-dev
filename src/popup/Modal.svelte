<script lang="ts">
  export let title: string = "Congratulations random Interner user!";
  export let content: string =
    "You've been selected for a chance to get one year of subscription to use Wikipedia for free!";
</script>

<input type="checkbox" id="modal" class="modal-toggle" />

<label for="modal" class="cursor-pointer modal">
  <label class="relative modal-box" for="">
    <h3 class="text-lg font-bold">{title}</h3>
    <p class="py-4">
      {content}
    </p>
  </label>
</label>
