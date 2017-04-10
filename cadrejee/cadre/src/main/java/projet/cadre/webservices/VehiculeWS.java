package projet.cadre.webservices;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Path("/vehicule")
public class VehiculeWS {
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();

}
