<script lang="ts">
  import { StudentCard } from "./lib/components";
  import { studentsData } from "./lib/data";
  import "./styles/index.css";
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
