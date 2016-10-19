/**
 * @author ry6d3
 *
 */
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONException;
import org.json.JSONObject;
 
@Path("/QuizMarksService")
public class FtoCService {
 
	  @GET
	  @Produces("application/json")
	  public Response convertFtoC() throws JSONException {
 
		JSONObject jsonObject = new JSONObject();
		JSONObject jsonTotmarks = new JSONObject();
		boolean answers[] = {true,false,true,false,true,true,true,true,false,true,};
		int marks = 0;
		
		for(int i=0;i<10;i++){
			if(answers[i]){
				marks = marks + 1;
				}
			jsonObject.put("Quiz naswer" + (i + 1) + "::" , answers[i] );
		}
		
		jsonTotmarks.put("Total Quiz Marks::" , marks);
		//celsius = (fahrenheit - 32)*5/9; 
		//jsonObject.put("F Value", fahrenheit); 
		//jsonObject.put("C Value", celsius);
 
		String result = "@Produces(\"application/json\") Output: \n\n Quiz results Output:: \n\n" + jsonObject +" \n\nOutput: \n\n Quiz Total marks:: \n\n"+ jsonTotmarks;
		return Response.status(200).entity(result).build();
		
	  }
 
	 // @Path("{f}")
	 // @GET
	 // @Produces("application/json")
	 // public Response convertFtoCfromInput(@PathParam("f") float f) throws JSONException {
 
	  //	JSONObject jsonObject = new JSONObject();
	  //float celsius;
	  //celsius =  (f - 32)*5/9; 
	  //jsonObject.put("F Value", f); 
	  //jsonObject.put("C Value", celsius);
 
	  //String result = "@Produces(\"application/json\") Output: \n\nF to C Converter Output: \n\n" + jsonObject;
	  //return Response.status(200).entity(result).build();
	  //}
}