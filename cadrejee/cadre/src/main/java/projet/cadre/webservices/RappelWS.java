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
import projet.cadre.model.Rappel;
import projet.cadre.services.CadreServices;

@Path("/rappels")
public class RappelWS {
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();
	
	@GET
	@Path("/getRappelById/{id}")
	public Response getRappelById(@PathParam("id") Integer id){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getRappelById(id))).build();
	}
	
	@POST
	@Path("")
	public Response addRappel(@FormParam("idRappel") Integer idRappel, @FormParam("dateRappel") String dateRappel, @FormParam("messageRappel") String messageRappel, @FormParam("employes_idEmploye") String employes_idEmploye){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.saveRappel(new Rappel(idRappel, dateRappel,  messageRappel, employes_idEmploye));
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@DELETE
	@Path("")
	public Response deleteRappel(@FormParam("idRappel") Integer idRappel, @FormParam("dateRappel") String dateRappel, @FormParam("messageRappel") String messageRappel, @FormParam("employes_idEmploye") String employes_idEmploye){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.deleteRappel(new Rappel(idRappel, dateRappel,  messageRappel, employes_idEmploye));
			return Response.status(200).entity("").build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}