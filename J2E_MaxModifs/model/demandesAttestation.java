package projet.cadre.model;

import java.sql.Date;

public class demandesAttestation {
	
	private String attestations_idAttestation;
	private String employes_idEmploye;
	private String etat;
	private Date date;
	
	public demandesAttestation(String attestations_idAttestation, String employes_idEmploye, String etat, Date date) {
		super();
		this.attestations_idAttestation = attestations_idAttestation;
		this.employes_idEmploye = employes_idEmploye;
		this.etat = etat;
		this.date = date;
	}

	public String getAttestations_idAttestation() {
		return attestations_idAttestation;
	}

	public void setAttestations_idAttestation(String attestations_idAttestation) {
		this.attestations_idAttestation = attestations_idAttestation;
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
