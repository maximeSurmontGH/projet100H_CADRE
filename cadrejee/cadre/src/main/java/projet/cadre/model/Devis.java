package projet.cadre.model;

public class Devis {
	
	private int idDevis;
	private String nomSociete ;
	private String nomDemandeur ;
	private String mail ;
	private String telephone ;
	private String adresse ;
	private String codePostal ;
	private String ville ;
	private String service ;
	private String message;
	
	
	public Devis(){
		
	}
	
	public Devis (String nomSociete, String nomDemandeur, String mail, String telephone, String adresse, String codePostal, String ville, String service, String message){
		super();
		this.nomSociete=nomSociete;
		this.nomDemandeur=nomDemandeur;
		this.mail=mail;
		this.telephone=telephone;
		this.adresse=adresse;
		this.codePostal=codePostal;
		this.ville=ville;
		this.service=service;
		this.message=message;
	}
	
	public Devis (int devis, String nomSociete, String nomDemandeur, String mail, String telephone, String adresse, String codePostal, String ville, String service, String message){
		super();
		this.idDevis = devis;
		this.nomSociete=nomSociete;
		this.nomDemandeur=nomDemandeur;
		this.mail=mail;
		this.telephone=telephone;
		this.adresse=adresse;
		this.codePostal=codePostal;
		this.ville=ville;
		this.service=service;
		this.message=message;
	}

	public String getNomSociete() {
		return nomSociete;
	}

	public void setNomSociete(String nomSociete) {
		this.nomSociete = nomSociete;
	}

	public String getNomDemandeur() {
		return nomDemandeur;
	}

	public void setNomDemandeur(String nomDemandeur) {
		this.nomDemandeur = nomDemandeur;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getCodePostal() {
		return codePostal;
	}

	public void setCodePostal(String codePostal) {
		this.codePostal = codePostal;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getIdDevis() {
		return idDevis;
	}

	public void setIdDevis(int idDevis) {
		this.idDevis = idDevis;
	}
	
	
		

}
