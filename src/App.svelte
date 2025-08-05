<script lang="ts">
  import { Card, Header } from "./lib/components";
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

  let sortKey: "id" | "name" | "age" | "averageScore" = "id";
  let filterActiveOnly = false;
  let filterPassedOnly = false;

  function handleSortKeyChange(key: typeof sortKey) {
    sortKey = key;
  }

  function toggleActive(value: boolean) {
    filterActiveOnly = value;
  }

  function togglePassed(value: boolean) {
    filterPassedOnly = value;
  }

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
    <Header
      {sortKey}
      {filterActiveOnly}
      {filterPassedOnly}
      onSortKeyChange={handleSortKeyChange}
      onToggleActive={toggleActive}
      onTogglePassed={togglePassed}
    />
    <div class="grid">
      {#each filteredStudents as student}
        <Card
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
