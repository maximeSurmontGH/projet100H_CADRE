package projet.cadre.webservices;

import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Path("")
public class RessourceWS {
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();
	
	@GET
	@Path("")
	public Response listPokemon(){
		return Response.status(200).entity(gson.toJson("")).build();
	}
	
	@POST
	@Path("")
	public Response addPokemon(){
		try {
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@DELETE
	@Path("")
	public Response deletePokemon(){
		try {
			return Response.status(200).entity("").build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@PUT
	@Path("")
	public Response updatePokemon(){
		try {
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
