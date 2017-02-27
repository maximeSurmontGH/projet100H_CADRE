package projet.cadre.model;

import java.sql.Date;

public class demandesVehicule {
	
	private String vehicules_immatriculation;
	private String employes_idEmploye;
	private String etat;
	private Date dateDebut;
	private Date dateFin;
	
	public demandesVehicule(String imma, String id, String etat, Date dateDebut, Date dateFin){
		this.vehicules_immatriculation=imma;
		this.employes_idEmploye=id;
		this.etat=etat;
		this.dateDebut=dateDebut;
		this.dateFin=dateFin;
	}

	public String getVehicules_immatriculation() {
		return vehicules_immatriculation;
	}

	public void setVehicules_immatriculation(String vehicules_immatriculation) {
		this.vehicules_immatriculation = vehicules_immatriculation;
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

	public void setEtat(String etat) {
		this.etat = etat;
	}

	public Date getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}

	public Date getDateFin() {
		return dateFin;
	}

	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
	}
	
}
