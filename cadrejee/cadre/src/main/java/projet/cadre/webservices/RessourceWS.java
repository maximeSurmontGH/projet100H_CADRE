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

import projet.cadre.model.Employe;
import projet.cadre.model.Ressource;
import projet.cadre.services.CadreServices;

@Path("/ressources")
public class RessourceWS {
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();
	
	@GET
	@Path("/listRessource")
	public Response lstRessource(@PathParam("id") int id){
		CadreServices cadreservices = CadreServices.getInstance();
		System.out.println(cadreservices.getRessourceById(id));
		return Response.status(200).entity(gson.toJson(cadreservices.getRessource())).build();
	}
	
	@GET
	@Path("/ressourceById/{id}")
	public Response employeById(@PathParam("id") int id){
		CadreServices cadreservices = CadreServices.getInstance();
		System.out.println(cadreservices.getRessourceById(id));
		return Response.status(200).entity(gson.toJson(cadreservices.getRessourceById(id))).build();
	}
	
	@GET
	@Path("/ressourceByPosteNom/{champs}")
	public Response ressourceByPosteNom(@PathParam("champs") String champs){
		CadreServices cadreservices = CadreServices.getInstance();
		System.out.println(cadreservices.listRessourceByPosteNom(champs));
		return Response.status(200).entity(gson.toJson(cadreservices.listRessourceByPosteNom(champs))).build();
	}
	
	@POST
	@Path("")
	public Response addRessource(@FormParam("idRessource") int idRessource,@FormParam("contenuRessource") String contenuRessource,@FormParam("corpsDeMetier") String corpsDeMetier,@FormParam("cheminRessource") String cheminRessource){
		CadreServices cadreServices = CadreServices.getInstance();
		Ressource ressource = new Ressource(idRessource,contenuRessource,corpsDeMetier,cheminRessource);
		try {
			cadreServices.saveRessource(ressource);
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@DELETE
	@Path("{id}")
	public Response deleteEmploye(@PathParam("id") int id){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.deleteRessource(id);;
			return Response.status(200).entity("").build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}	
}
