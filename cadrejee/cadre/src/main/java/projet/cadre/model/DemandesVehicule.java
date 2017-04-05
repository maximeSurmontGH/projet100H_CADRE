package projet.cadre.model;



public class DemandesVehicule {
	
	private int id;
	private String vehicules_immatriculation;
	private String employes_idEmploye;
	private String etat;
	private String dateDebut;
	private String dateFin;
	
	public DemandesVehicule(int id, String imma, String idEmpl, String etat, String dateDebut, String dateFin){
		this.id = id;
		this.vehicules_immatriculation=imma;
		this.employes_idEmploye=idEmpl;
		this.etat=etat;
		this.dateDebut=dateDebut;
		this.dateFin=dateFin;
	}

	
	public int getId() {
		return id;
	}

	public void setVehicules_immatriculation(String vehicules_immatriculation) {
		this.vehicules_immatriculation = vehicules_immatriculation;
	}


	public void setEmployes_idEmploye(String employes_idEmploye) {
		this.employes_idEmploye = employes_idEmploye;
	}


	public String getVehicules_immatriculation() {
		return vehicules_immatriculation;
	}


	public String getEmployes_idEmploye() {
		return employes_idEmploye;
	}


	public String getEtat() {
		return etat;
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
