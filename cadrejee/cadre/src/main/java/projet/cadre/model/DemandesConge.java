package projet.cadre.model;


public class DemandesConge {
	
	private int id;
	private int conges_idConge;
	private String employes_idEmploye;
	private String dateDebut;
	private String dateFin;
	private String etat;
	
	public DemandesConge( int id, int conges_idConge, String employes_idEmploye, String dateDebut, String dateFin, String etat){
		this.id = id;
		this.conges_idConge=conges_idConge;
		this.employes_idEmploye=employes_idEmploye;
		this.dateDebut=dateDebut;
		this.dateFin=dateFin;
		this.etat=etat;
	}

	public int getConges_idConge() {
		return conges_idConge;
	}

	public void setConges_idConge(int conges_idConge) {
		this.conges_idConge = conges_idConge;
	}

	public String getEmployes_idEmploye() {
		return employes_idEmploye;
	}

	public void setEmployes_idEmploye(String employes_idEmploye) {
		this.employes_idEmploye = employes_idEmploye;
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

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}
	
	public int getId() {
		return id;
	}
	
}
