import type { Scores } from "../lib/data";

/**
 * Calculates the age based on a birthdate string.
 *
 * @param birthdate - A string representing the birthdate in ISO format (e.g., "2003-08-10").
 * @returns The person's age in years as a number.
 */
export function calculateAge(birthdate: string): number {
  const today = new Date();
  const birth = new Date(birthdate);

  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

/**
 * Calculates the average score from a set of subject scores.
 *
 * @param scores - An object containing numerical scores for different subjects (e.g., math, english, science).
 * @returns The rounded average of the provided scores as a number.
 */
export function calculateAverageScore(scores: Scores): number {
  const values = Object.values(scores);
  const total = values.reduce((sum, val) => sum + val, 0);
  return Math.round(total / values.length);
}

/**
 * Determines whether a student has passed based on their average score.
 *
 * @param score - The student's average score as a number.
 * @returns "Yes" if the score is 50 or higher, otherwise "No".
 */
export function hasPassed(score: number): "Yes" | "No" {
  return score >= 75 ? "Yes" : "No";
}
