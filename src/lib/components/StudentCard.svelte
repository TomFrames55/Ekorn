<script lang="ts">
  export let name: string;
  export let age: number;
  export let averageScore: number;
  export let activeLabel: "Yes" | "No";
  export let id: string;

  const hasPassed = (score: number) => (score >= 70 ? "Yes" : "No");
</script>

<div class="card">
  <h2>{name}</h2>
  <p><span>Age:</span><strong>{age}</strong></p>
  <p><span>Average score:</span><strong>{averageScore}</strong></p>
  <p><span>Active:</span><strong>{activeLabel}</strong></p>
  <p><span>Passed:</span><strong>{hasPassed(averageScore)}</strong></p>
  <p><span>ID:</span> <strong>{id}</strong></p>
</div>

<style>
  .card {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .card p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.3rem 0;
    font-size: 0.95rem;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
    font-weight: 700;
  }

  p {
    margin: 0.3rem 0;
    font-size: 0.95rem;
  }

  span {
    color: #6b646e;
    font-weight: 500;
  }

  strong {
    font-weight: 700;
  }
</style>
