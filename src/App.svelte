<script lang="ts">
  import { StudentCard } from "./lib/components";
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
  <h1>Students</h1>
  <div class="grid">
    {#each students as student}
      <StudentCard
        name={student.name}
        age={student.age}
        averageScore={student.averageScore}
        activeLabel={student.activeLabel}
        id={student.id}
      />
    {/each}
  </div>
</main>

<style>
  main {
    padding: 4rem 10rem;
    background-color: #f5f0ea;
    font-family: system-ui, sans-serif;
    color: #352f3b;
  }

  @media (max-width: 767px) {
    main {
      padding: 3rem 7rem;
    }
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    max-width: 1024px;
  }
</style>
