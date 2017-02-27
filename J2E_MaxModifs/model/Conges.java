package projet.cadre.model;

public class Conges {
	
	private String id;
	private String typeDeConges;
	
	public Conges(String type){
		this.typeDeConges = type;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTypeDeConges() {
		return typeDeConges;
	}

	public void setTypeDeConges(String typeDeConges) {
		this.typeDeConges = typeDeConges;
	}
	
}
