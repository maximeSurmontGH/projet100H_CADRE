package projet.cadre.model;

import java.sql.Date;

public class demandesConge {
	
	private String conges_idConge;
	private String employes_idEmploye;
	private Date dateDebut;
	private Date dateFin;
	private String etat;
	
	public demandesConge( String conges_idConge, String employes_idEmploye, Date dateDebut, Date dateFin, String etat){
		this.conges_idConge=conges_idConge;
		this.employes_idEmploye=employes_idEmploye;
		this.dateDebut=dateDebut;
		this.dateFin=dateFin;
		this.etat=etat;
	}

	public String getConges_idConge() {
		return conges_idConge;
	}

	public void setConges_idConge(String conges_idConge) {
		this.conges_idConge = conges_idConge;
	}

	public String getEmployes_idEmploye() {
		return employes_idEmploye;
	}

	public void setEmployes_idEmploye(String employes_idEmploye) {
		this.employes_idEmploye = employes_idEmploye;
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

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}
	
	
}
