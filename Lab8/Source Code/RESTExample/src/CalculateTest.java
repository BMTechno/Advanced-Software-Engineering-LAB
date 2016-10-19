import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class CalculateTest {

	Calculate calculation = new Calculate();
	int marks = calculation.QuizMarks(1, 1, 0);
	int QuizMarks = 2;
	
	char grade = calculation.grade(80);
	char QuizGrade = 'A';
	@Test
	public void testCalculate() {
		System.out.println("Junit Test case 1::");
		System.out.println("@Quiz Toatal Marks(): " + marks + " = " + QuizMarks);
		assertEquals(marks, QuizMarks);
	}
	
	@Test
	public void tetGrades(){
		System.out.println("Junit Test case 2::");
		System.out.println("@Quiz  Grades(): " + grade + " = " + QuizGrade);
		assertEquals(grade, QuizGrade);
	}
	
}