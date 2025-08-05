<script lang="ts">
  export let className: string = "";
</script>

<div class={`grid ${className}`}>
  <slot />
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    max-width: 1024px;
  }
</style>
