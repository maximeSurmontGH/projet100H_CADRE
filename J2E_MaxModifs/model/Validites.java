package projet.cadre.model;

public class Validites {
	
	private String typeValidite;
	private String idValidite;
	
	public Validites(String typeValidite, String idValidite){
		this.typeValidite = typeValidite;
		this.idValidite = idValidite;
	}

	public String getTypeValidite() {
		return typeValidite;
	}

	public void setTypeValidite(String typeValidite) {
		this.typeValidite = typeValidite;
	}

	public String getIdValidite() {
		return idValidite;
	}

	public void setIdValidite(String idValidite) {
		this.idValidite = idValidite;
	}
}
