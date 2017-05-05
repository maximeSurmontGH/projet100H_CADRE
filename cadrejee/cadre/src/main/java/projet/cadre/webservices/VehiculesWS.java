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

@Path("/vehicules")
public class VehiculesWS {
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();
	
	@GET
	@Path("/listIdVehicule")
	public Response listIdVehicule(){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getIdVehicule())).build();
	}
	
	@GET
	@Path("/listDemandesDeVehicule")
	public Response listDemandesDeVehicule(){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getDemandesDeVehicule())).build();
	}
	
	@GET
	@Path("/listDemandesDeVehiculeByidEmploye/{id}")
	public Response listDemandesDeVehiculeByidEmploye(@PathParam("id") String id){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getDemandesDeVehiculeByIdEmploye(id))).build();
	}
	
	@GET
	@Path("/listDemandesDeVehiculeByEtat/{etat}")
	public Response listDemandesDeVehiculeByEtat(@PathParam("etat") String etat){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getDemandesVehiculeByEtat(etat))).build();
	}
	
	@GET
	@Path("/listVehiculesFree")
	public Response listVehiculesFree(){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getVehiculesFree())).build();
	}
	
	@GET
	@Path("/getVehiculeByImmatriculation/{imma}")
	public Response getVehiculeByImmatriculation(@PathParam("imma") String imma){
		CadreServices cadreServices = CadreServices.getInstance();
		return Response.status(200).entity(gson.toJson(cadreServices.getVehiculeByImmatriculation(imma))).build();
	}
	
	@POST
	@Path("/addVehicule")
	public Response addVehicule(@FormParam("immatriculation") String immatriculation, @FormParam("typeVehicule") String typeVehicule){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.addVehicule(immatriculation, typeVehicule);
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@POST
	@Path("/addDemandeV")
	public Response addDemandeDeVehicule(@FormParam("immatriculation") String immatriculation, @FormParam("idEmploye") String idEmploye, @FormParam("dateD") String dateDebut, @FormParam("dateF") String dateFin){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.setDemandeDeVehicule(immatriculation, idEmploye, dateDebut, dateFin);
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@DELETE
	@Path("/delete/{immatriculation}")
	public Response deleteVehicule(@PathParam("immatriculation") String immatriculation){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.deleteVehicule(immatriculation);
			return Response.status(200).entity("").build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@PUT
	@Path("/update")
	public Response updateStateVehicule(@FormParam("id") Integer id, @FormParam("nb") Integer nb){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.setStateVehicule(id, nb); 
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	@DELETE
	@Path("/deleteD/{idEmploye}")
	public Response deleteAttestation(@PathParam("idEmploye") String idEmploye){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.deleteDemandeVehicule(idEmploye);
			return Response.status(200).entity("").build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
