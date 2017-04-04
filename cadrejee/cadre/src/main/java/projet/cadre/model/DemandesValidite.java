package projet.cadre.model;

import java.sql.Date;

public class DemandesValidite {
	
	private String validites_idValidite;
	private String employes_idEmploye;
	private String etat;
	private Date dateDebut;
	private Date dateFin;
	
	public DemandesValidite(String validites_idValidite, String employes_idEmploye, String etat, Date dateDebut, Date dateFin){
		this.validites_idValidite = validites_idValidite;
		this.employes_idEmploye = employes_idEmploye;
		this.etat = etat;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
	}

	public String getValidites_idValidite() {
		return validites_idValidite;
	}

	public void setValidites_idValidite(String validites_idValidite) {
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
