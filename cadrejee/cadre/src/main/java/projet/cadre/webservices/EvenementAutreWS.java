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

import projet.cadre.model.EvenementAutre;
import projet.cadre.services.CadreServices;

@Path("/evenementautre")
public class EvenementAutreWS {
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();
	
	@GET
	@Path("/getEvenementById/{id}")
	public Response getEvenementById(@PathParam("id") int id){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getevenementById(id))).build();
	}
	
	@POST
	@Path("")
	public Response addEvenementAutre(@FormParam("idEvenement") Integer idEvenement, @FormParam("dateEvenement") String dateEvenement, @FormParam("messageEvenement") String messageEvenement, @FormParam("employes_idEmploye") String employes_idEmploye){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.saveEvenementAutre(new EvenementAutre(idEvenement, dateEvenement, messageEvenement, employes_idEmploye));
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@DELETE
	@Path("")
	public Response deleteEvenementAutre(@FormParam("idEvenement") Integer idEvenement, @FormParam("dateEvenement") String dateEvenement, @FormParam("messageEvenement") String messageEvenement, @FormParam("employes_idEmploye") String employes_idEmploye){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.deleteEvenement(new EvenementAutre(idEvenement, dateEvenement, messageEvenement, employes_idEmploye));
			return Response.status(200).entity("").build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
