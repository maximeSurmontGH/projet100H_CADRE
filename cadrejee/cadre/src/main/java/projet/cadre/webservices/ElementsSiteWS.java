package projet.cadre.webservices;

import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import projet.cadre.services.CadreServices;

@Path("/elementssite")
public class ElementsSiteWS {
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();
	
	@GET
	@Path("/getElementById/{id}")
	public Response getElementById(@PathParam("id") String id){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getElementById(id))).build();
	}
	
	@PUT
	@Path("/updateET")
	public Response updateElementText(@FormParam("idElement") String idElement,@FormParam("contenuElement") String contenuElement){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.modifierElementTexte(idElement, contenuElement);
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@PUT
	@Path("/updateEI")
	public Response updateElementImage(@FormParam("idElement") String idElement, @FormParam("contenuElement") String contenuElement, @FormParam("cheminElement") String cheminElement){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.modifierElementImage(idElement, contenuElement, cheminElement);
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
