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

@Path("/attestation")
public class AttestationsWS {
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();
	
	@GET
	@Path("/listDemandesAttestation")
	public Response listDemandesAttestation(){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getDemandesAttestation())).build();
	}
	
	@GET
	@Path("/listDemandesAttestationeByidEmploye/{id}")
	public Response listDemandesAttestationeByidEmploye(@PathParam("id") String id){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getDemandesAttestationeByidEmploye(id))).build();
	}
	
	@GET
	@Path("/listDemandesAttestationeByEtat/{etat}")
	public Response listDemandesAttestationeByEtat(@PathParam("etat") String etat){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getDemandesAttestationeByidEmploye(etat))).build();
	}
	
	@POST
	@Path("")
	public Response addDemandeAttestation(@FormParam("idAttestation") String idAttestation, @FormParam("idEmploye") String idEmploye, @FormParam("date") String date){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.setDemandeAttestation(idAttestation, idEmploye, date);
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@PUT
	@Path("")
	public Response updateStateAttestation(@FormParam("idDemandeAttestation") Integer idDemandeAttestation, @FormParam("nb") Integer nb){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.setStateAttestation(idDemandeAttestation, nb);
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
