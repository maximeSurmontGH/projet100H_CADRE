package projet.cadre.model;


public class DemandesValidite {
	
	private int id;
	private int validites_idValidite;
	private String employes_idEmploye;
	private String etat;
	private String dateDebut;
	private String dateFin;
	
	public DemandesValidite(int id, int validites_idValidite, String employes_idEmploye, String etat, String dateDebut, String dateFin){
		this.id = id;
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

	public String getEmployes_idEmploye() {
		return employes_idEmploye;
	}

	public void setEmployes_idEmploye(String employes_idEmploye) {
		this.employes_idEmploye = employes_idEmploye;
	}

	public String getEtat() {
		return etat;
	}

	public int getId() {
		return id;
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
