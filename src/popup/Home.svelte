<script lang="ts">
  import CardBox from "./CardBox.svelte";
  import Modal from "./Modal.svelte";
  let title: string;
  let content: string;
</script>

<Modal {title} {content} />
<div class="home">
  <label for="modal" class="btn modal-button">Boards</label>
  <label for="modal" class="btn modal-button">Column</label>
  <CardBox />
</div>

<style lang="postcss">
  .home {
    @apply flex flex-col space-y-0.5 h-[500px] py-1 mx-1 overflow-x-hidden  overflow-y-scroll justify-start;
  }
</style>
