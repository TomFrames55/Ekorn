## Thought Process

This assessment was approached in two phases: **Data Transformation** and **UI Implementation**.

1. **Data Transformation**

   - The original `studentsData` array was analysed for a better understanding of its internal structure.
   - Entries from `studentsData` were transformed to match the `Student` type using `.map()`:
     - Combined `firstName` and `lastName` into `name`
     - Calculated `age` from `birthdate`
     - Calculated the average score from the entries within the embedded `scores` object
     - Converted `isActive` boolean into `"Yes"` / `"No"` format as `activeLabel`
     - Converted `id` to a string to match the expected type
   - Utility functions for `calculateAge`, `calculateAverageScore`, and `hasPassed` were created to keep the logic clean and reusable.

2. **UI Implementation**

   - A responsive grid of custom cards were built using plain CSS, applying `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` while also limiting the max width of this parental component to `1024px`.
   - Grid and individual cards were styled to closely match the given Figma prototype.
   - Semantic and accessible HTML elements were used wherever possible.

3. **Componentization**
   - Reusable Svelte components were created:
     - `Card.svelte`: for displaying student data
     - `Grid.svelte`: for the responsive layout
     - `Header.svelte`: for controls (sorting/filtering)

## Assumptions

- The passing score was defined as `>= 75`, to demonstrate the functionality of the "Passed" filter control.
- Sorting and filtering controls were interpreted as UI-orientated rather than URL/query param-based.
- The `id` field, though numeric in `studentsData`, was typed as a string in the `Student` model, and thus converted accordingly.
- The sorting keys were limited to `"id" | "name" | "age" | "averageScore"`.

## Additional Features

- **Sorting**: Students can be sorted by `ID`, `Name`, `Age`, or `Average Score`.
- **Filtering**: Two filters were added:
  - "Active"
  - "Passed"
- **Component Architecture**:
  - Student data display and controls were modularized into separate Svelte components for better maintainability.
- **Accessibility**:
  - Form controls use labels for better readability.
- **Responsive Design**:
  - Layout adjusts from 3-column to 1-column as screen width scales down.
- **Utilities**:
  - `calculateAge`, `calculateAverageScore`, and `hasPassed` are type-safe and documented with JSDoc.

## Project Structure

```bash
src/
├── App.svelte
├── main.ts
├── global.d.ts
├── app.css
├── lib/
│   ├── data.ts
│   ├── utils/
│   │   └── index.ts
│   └── components/
│       ├── Card.svelte
│       ├── Grid.svelte
│       └── Header.svelte
├── styles/
│   └── index.css
```
