package projet.cadre.model;

public class Conges {
	
	private int id;
	private String typeDeConges;
	
	public Conges(String type){
		this.typeDeConges = type;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTypeDeConges() {
		return typeDeConges;
	}

	public void setTypeDeConges(String typeDeConges) {
		this.typeDeConges = typeDeConges;
	}
	
}
