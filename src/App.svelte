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
  <div class="container">
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
  </div>
</main>

<style>
  main {
    align-items: center;
    background-color: #f5f0ea;
    color: #352f3b;
    display: flex;
    flex-direction: column;
    font-family: system-ui, sans-serif;
    min-height: 100vh;
    padding: 4rem 8rem;
  }

  @media (max-width: 767px) {
    main {
      padding: 3rem 6rem;
    }
  }

  .container {
    max-width: 1024px;
    width: 100%;
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
