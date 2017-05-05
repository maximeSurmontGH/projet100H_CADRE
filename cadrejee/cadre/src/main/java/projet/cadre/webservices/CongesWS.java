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

@Path("/conges")
public class CongesWS {
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();
	
	@GET
	@Path("/listIdConge")
	public Response listIdVehicule(){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getIdConge())).build();
	}
	
	@GET
	@Path("/listConges")
	public Response listConges(){
		CadreServices cadreservices = CadreServices.getInstance();
		System.out.println(cadreservices.getDemandesDeConge());
		return Response.status(200).entity(gson.toJson(cadreservices.getDemandesDeConge())).build();
	}

	@GET
	@Path("/compteurConges/{idConge}/{idEmploye}")
	public Response compteurConges(@PathParam("idConge") int idConge,@PathParam("idEmploye") String idEmploye){
		CadreServices cadreservices = CadreServices.getInstance();
		System.out.println(cadreservices.compteurDeConges(idConge, idEmploye));
		return Response.status(200).entity(gson.toJson(cadreservices.compteurDeConges(idConge, idEmploye))).build();
	}
	
	@GET
	@Path("/listCongesById/{id}")
	public Response listCongesById(@PathParam("id") String id){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getDemandesDeCongeByIdEmploye(id))).build();
	}
	
	@GET
	@Path("/listCongesByType/{type}")
	public Response listCongesByType(@PathParam("type") String type){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getDemandesDeCongeByType(type))).build();
	}
		
	@POST
	@Path("")
	public Response addConge(@FormParam("idConge") int idConge, @FormParam("idEmploye") String idEmploye, @FormParam("dateDebut") String dateDebut, @FormParam("dateFin") String dateFin){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.setDemandeDeConge(idConge, idEmploye, dateDebut, dateFin);
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@PUT
	@Path("/update")
	public Response updateStateConge(@FormParam("id") Integer id, @FormParam("nb") Integer nb){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.setStateConge(id, nb);
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
			cadreServices.deleteDemandeConge(idEmploye);
			return Response.status(200).entity("").build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
