package projet.cadre.webservices;

import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import projet.cadre.services.CadreServices;

@Path("/devis")
public class Devis {
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();
	
	@GET
	@Path("/listDevis")
	public Response listConges(){
		CadreServices cadreservices = CadreServices.getInstance();
		System.out.println(cadreservices.getDemandesDeConge());
		return Response.status(200).entity(gson.toJson(cadreservices.listDevis())).build();
	}
	
	@DELETE
	@Path("/delete/{idDevis}")
	public Response deleteVehicule(@PathParam("idDevis") int id){
		CadreServices cadreServices = CadreServices.getInstance();
		try {
			cadreServices.deleteDevis(id);;
			return Response.status(200).entity("").build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
