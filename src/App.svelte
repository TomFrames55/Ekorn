<script lang="ts">
  import { StudentCard } from "./lib/components";
  import { studentsData } from "./lib/data";
  import "./styles/index.css";
  import { calculateAge, calculateAverageScore, hasPassed } from "./utils";

  type Student = {
    id: string;
    name: string;
    age: number;
    averageScore: number;
    activeLabel: "Yes" | "No";
  };

  const students: Student[] = studentsData.map((student) => ({
    id: student.id.toString(),
    name: `${student.firstName} ${student.lastName}`,
    age: calculateAge(student.birthdate),
    averageScore: calculateAverageScore(student.scores),
    activeLabel: student.isActive ? "Yes" : "No",
  }));

  let sortKey: keyof Student = "id";
  let filterActiveOnly = false;
  let filterPassedOnly = false;

  $: filteredStudents = students
    .filter((s) => !filterActiveOnly || s.activeLabel === "Yes")
    .filter((s) => !filterPassedOnly || hasPassed(s.averageScore) === "Yes")
    .sort((a, b) => {
      if (sortKey === "name") {
        return a.name.localeCompare(b.name);
      }

      if (sortKey === "id") {
        return Number(a.id) - Number(b.id);
      }

      if (sortKey === "age" || sortKey === "averageScore") {
        return (a[sortKey] as number) - (b[sortKey] as number);
      }

      return 0;
    });
</script>

<main>
  <div class="container">
    <div class="header">
      <h1>Students</h1>
      <div style="display: flex; flex-direction: row; gap: 1rem;">
        <label>
          Sort by:
          <select bind:value={sortKey}>
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="averageScore">Average Score</option>
          </select>
        </label>
        <label>
          <input type="checkbox" bind:checked={filterActiveOnly} />
          Active
        </label>
        <label>
          <input type="checkbox" bind:checked={filterPassedOnly} />
          Passed
        </label>
      </div>
    </div>
    <div class="grid">
      {#each filteredStudents as student}
        <StudentCard
          name={student.name}
          age={student.age}
          averageScore={student.averageScore}
          activeLabel={student.activeLabel}
          id={student.id}
        />
      {/each}
    </div>
  </div>
</main>

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
</style>
