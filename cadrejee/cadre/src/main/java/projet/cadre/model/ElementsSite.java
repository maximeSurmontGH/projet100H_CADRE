package projet.cadre.model;

public class ElementsSite {
	private String idElement;
	private String contenuElement;
	private String cheminElement;
	
	// Constructeur pour un contenu txt
	public ElementsSite(String idElement, String contenuElement) {
		super();
		this.idElement = idElement;
		this.contenuElement = contenuElement;
	}
	
	//Constructeur pour un contenu image + texte alternatif
	public ElementsSite(String idElement, String contenuElement, String cheminElement) {
		super();
		this.idElement = idElement;
		this.contenuElement = contenuElement;
		this.cheminElement = cheminElement;
	}

	public String getIdElement() {
		return idElement;
	}

	public void setIdElement(String idElement) {
		this.idElement = idElement;
	}

	public String getContenuElement() {
		return contenuElement;
	}

	public void setContenuElement(String contenuElement) {
		this.contenuElement = contenuElement;
	}

	public String getCheminElement() {
		return cheminElement;
	}

	public void setCheminElement(String cheminElement) {
		this.cheminElement = cheminElement;
	}
	
	

	

}
