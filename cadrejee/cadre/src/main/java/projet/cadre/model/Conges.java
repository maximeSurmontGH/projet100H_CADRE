package projet.cadre.model;

public class Conges {
	
	private int idConge;
	private String typeConge;
	
	public Conges(int id,String type){
		this.idConge=id;
		this.typeConge = type;
	}

	public int getId() {
		return idConge;
	}

	public void setId(int id) {
		this.idConge = id;
	}

	public String getTypeDeConges() {
		return typeConge;
	}

	public void setTypeDeConges(String typeDeConges) {
		this.typeConge = typeDeConges;
	}
	
}
