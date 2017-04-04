package projet.cadre.model;


public class DemandesValidite {
	
	private int id;
	private int validites_idValidite;
	private int employes_idEmploye;
	private String etat;
	private String dateDebut;
	private String dateFin;
	
	public DemandesValidite(int validites_idValidite, int employes_idEmploye, String etat, String dateDebut, String dateFin){
		this.validites_idValidite = validites_idValidite;
		this.employes_idEmploye = employes_idEmploye;
		this.etat = etat;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
	}

	public int getValidites_idValidite() {
		return validites_idValidite;
	}

	public void setValidites_idValidite(int validites_idValidite) {
		this.validites_idValidite = validites_idValidite;
	}

	public int getEmployes_idEmploye() {
		return employes_idEmploye;
	}

	public void setEmployes_idEmploye(int employes_idEmploye) {
		this.employes_idEmploye = employes_idEmploye;
	}

	public String getEtat() {
		return etat;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	public String getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(String dateDebut) {
		this.dateDebut = dateDebut;
	}

	public String getDateFin() {
		return dateFin;
	}

	public void setDateFin(String dateFin) {
		this.dateFin = dateFin;
	}
}
