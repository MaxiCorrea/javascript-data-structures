import { StudentGrades } from "./StudentGrades";

test("calculate average of zero grades should be 0", () => {
  expect(new StudentGrades().average()).toBe(0);
});

test("calculate average of 34, 67, 89  grades should be 63.33", () => {
    const studentGrades = new StudentGrades();
    studentGrades.addGrade(34);
    studentGrades.addGrade(67);
    studentGrades.addGrade(89);
    expect(studentGrades.average()).toBeCloseTo(63.33);
  });
  