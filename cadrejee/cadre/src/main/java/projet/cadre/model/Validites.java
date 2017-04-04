package projet.cadre.model;

public class Validites {
	
	private String typeValidite;
	private int idValidite;
	
	public Validites(String typeValidite){
		this.typeValidite = typeValidite;
	}

	public String getTypeValidite() {
		return typeValidite;
	}

	public void setTypeValidite(String typeValidite) {
		this.typeValidite = typeValidite;
	}

	public int getIdValidite() {
		return idValidite;
	}

	public void setIdValidite(int idValidite) {
		this.idValidite = idValidite;
	}
}
