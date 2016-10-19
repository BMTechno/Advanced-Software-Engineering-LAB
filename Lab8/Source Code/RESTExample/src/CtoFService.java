/**
 * @author ry6d3
 *
 */
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
 
@Path("/QuizAnserService")
public class CtoFService {
	@GET
	@Produces("application/xml")
	public String convertCtoF() {
		String Question="Which of the following operator can be used to access value at address stored in a pointer variable?";
		String Answer="*- value operator gives value stored at particular address";
		//Double fahrenheit;
		//Double celsius = 36.8;
		//fahrenheit = ((celsius * 9) / 5) + 32;
 
		
 
		String result = "@Produces(\"application/xml\") Output: \n\nQuiz Answer: \n\n" + Answer;
		return "<QuizAnswerService>" + "<Question>" + Question + "</Question>" + "<Answer>" + result + "</Answer>" + "</QuizAnswerService>";
	}
 
	@Path("{c}")
	@GET
	@Produces("application/xml")
	public String convertCtoFfromInput(@PathParam("c") Double c) {
		Double fahrenheit;
		Double celsius = c;
		fahrenheit = ((celsius * 9) / 5) + 32;
 
		String result = "@Produces(\"application/xml\") Output: \n\nC to F Converter Output: \n\n" + fahrenheit;
		return "<ctofservice>" + "<celsius>" + celsius + "</celsius>" + "<ctofoutput>" + result + "</ctofoutput>" + "</ctofservice>";
	}
}