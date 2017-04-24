package projet.cadre.model;

public class Validites {
	
	private String typeValidite;
	private int idValidite;
	
	public Validites( int idValidite, String typeValidite){
		this.typeValidite = typeValidite;
		this.idValidite=idValidite;
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
