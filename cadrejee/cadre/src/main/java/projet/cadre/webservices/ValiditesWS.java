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

@Path("/validites")
public class ValiditesWS {
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();
	
	@GET
	@Path("/listIdValidite")
	public Response listIdValidite(){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getIdValidite())).build();
	}
	
	@GET
	@Path("/listDemandesValidite")
	public Response listDemandesValidite(){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getDemandesValidite())).build();
	}
	
	@GET
	@Path("/listDemandesValiditeByidEmploye/{id}")
	public Response listDemandesValiditeByidEmploye(@PathParam("id") String id){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getDemandesDeValiditeByidEmploye(id))).build();
	}
	
	@GET
	@Path("/listDemandesDeValiditeByType/{type}")
	public Response listDemandesDeValiditeByType(@PathParam("type") String type){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getDemandesDeValiditeByType(type))).build();
	}
	
	@POST
	@Path("")
	public Response addDemandeValidite(@FormParam("idValidite") Integer idValidite, @FormParam("idEmploye") String idEmploye, @FormParam("dateD") String dateDebut, @FormParam("dateF") String dateFin){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.setDemandeDeValidite(idValidite, idEmploye, dateDebut, dateFin);
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@PUT
	@Path("")
	public Response updateStateValidite(@FormParam("idDemandeValidite") Integer idDemandeValidite, @FormParam("nb") Integer nb){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.setStateValidite(idDemandeValidite, nb);
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	@DELETE
	@Path("/delete/{idEmploye}")
	public Response deleteAttestation(@PathParam("idEmploye") String idEmploye){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.deleteDemandeValidite(idEmploye);
			return Response.status(200).entity("").build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
