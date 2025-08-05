<script lang="ts">
  export let sortKey: "id" | "name" | "age" | "averageScore";
  export let filterActiveOnly: boolean;
  export let filterPassedOnly: boolean;

  export let onSortKeyChange: (key: typeof sortKey) => void;
  export let onToggleActive: (value: boolean) => void;
  export let onTogglePassed: (value: boolean) => void;
</script>

<div class="header">
  <h1>Students</h1>
  <div class="controls">
    <label>
      Sort by:
      <select
        bind:value={sortKey}
        on:change={(e: Event) =>
          onSortKeyChange(
            (e.target as HTMLSelectElement).value as
              | "id"
              | "name"
              | "age"
              | "averageScore"
          )}
      >
        <option value="id">ID</option>
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="averageScore">Average Score</option>
      </select>
    </label>
    <label>
      <input
        type="checkbox"
        checked={filterActiveOnly}
        on:change={(e: Event) =>
          onToggleActive((e.target as HTMLInputElement).checked)}
      />
      Active
    </label>
    <label>
      <input
        type="checkbox"
        checked={filterPassedOnly}
        on:change={(e: Event) =>
          onTogglePassed((e.target as HTMLInputElement).checked)}
      />
      Passed
    </label>
  </div>
</div>

<style>
  .header {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .controls {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
  }
</style>
