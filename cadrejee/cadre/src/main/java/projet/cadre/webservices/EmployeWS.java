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
import projet.cadre.services.CadreServices;

@Path("/employes")
public class EmployeWS {
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();
	
	@GET
	@Path("/listIdMdp")
	public Response listIdMdp(){
		CadreServices cadreservices = CadreServices.getInstance();
		System.out.println(cadreservices.hashIdMdp());
		return Response.status(200).entity(gson.toJson(cadreservices.hashIdMdp())).build();
	}
	
	@GET
	@Path("/listIdEmploye")
	public Response listIdEmploye(){
		CadreServices cadreservices = CadreServices.getInstance();
		System.out.println(cadreservices.listEmployes());
		return Response.status(200).entity(gson.toJson(cadreservices.listEmployes())).build();
	}
	
	@GET
	@Path("/employeById/{idEmploye}")
	public Response employeById(@PathParam("idEmploye") String idEmploye){
		CadreServices cadreservices = CadreServices.getInstance();
		System.out.println(cadreservices.getEmployeById(idEmploye));
		return Response.status(200).entity(gson.toJson(cadreservices.getEmployeById(idEmploye))).build();
	}
	
	@GET
	@Path("/employeByPosteNom/{champs}")
	public Response employeByPosteNom(@PathParam("champs") String champs){
		CadreServices cadreservices = CadreServices.getInstance();
		System.out.println(cadreservices.listEmployesPosteNom(champs));
		return Response.status(200).entity(gson.toJson(cadreservices.listEmployesPosteNom(champs))).build();
	}
	
	@POST
	@Path("")
	public Response addEmploye(@FormParam("nomEmploye") String nomEmploye,@FormParam("prenomEmploye") String prenomEmploye,@FormParam("poste") String poste,@FormParam("telephone") String telephone, @FormParam("email") String email){
		CadreServices cadreServices = CadreServices.getInstance();
		cadreServices.saveEmploye(nomEmploye,prenomEmploye,telephone,poste,email);
		return Response.status(200).entity("").build();
	}
	
	@DELETE
	@Path("/delete/{idEmploye}")
	public Response deleteEmploye(@PathParam("idEmploye") String idEmploye){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.deleteEmploye(idEmploye);
			return Response.status(200).entity("").build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}	
	
	@PUT
	@Path("/modif")
	public Response updateMdp(@FormParam("idEmploye") String idEmploye,@FormParam("motDePasse") String motDePasse){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.modifierMDP(idEmploye, motDePasse);
			return Response.status(200).entity(gson.toJson("")).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
