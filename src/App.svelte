<script lang="ts">
  import { studentsData } from "./lib/data";
  import { calculateAge, calculateAverageScore } from "./utils";

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
</script>

<main>
  {#each students as student}
    <div>
      <div>{student.name.toUpperCase()}</div>

      <p>
        {#if student.age > 25}
          Mature Student - {student.age} years old
        {:else}
          Young Student - {student.age} years old
        {/if}
      </p>

      Avg score: {student.averageScore}
      Active: {student.activeLabel}
    </div>
  {/each}
</main>

<style>
  main {
    padding: 30px;
  }
</style>
