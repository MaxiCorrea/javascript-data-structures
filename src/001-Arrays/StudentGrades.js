/**
 * Implementation of StudentGrades Class
 */
export class StudentGrades {
  #grades;

  constructor() {
    this.#grades = [];
  }

  /**
   *  Add new Student grade
   * @param {*} value
   */
  addGrade = (value) => {
    this.#grades.push(value);
  };

  /**
   *  Calculate Average Of Student Grades
   * @returns average result
   */
  average = () => {
    let sum = 0;
    this.#grades.forEach((each) => {
      sum += each;
    });
    if (sum === 0) return 0;
    return sum / this.#grades.length;
  };
}
