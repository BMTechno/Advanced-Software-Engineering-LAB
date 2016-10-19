public class Calculate {

	public int QuizMarks(int var1, int var2, int var3) {
		System.out.println("Adding Answers Score for interactive quiz: " 
				+ var1 + " + " + var2+" + " + var3);
		return var1 + var2 + var3;
	}
	
	public char grade(int var1){
		System.out.println("Validationg grade for marks: " + var1);
		if (var1 >= 80){
			return 'A';}
		else 
			if (var1 < 80 && var1 >=50){
			return 'B';
		}
		else {
			return 'C';}
	}
}