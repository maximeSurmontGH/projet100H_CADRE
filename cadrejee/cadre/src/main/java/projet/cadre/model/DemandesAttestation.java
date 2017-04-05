package projet.cadre.model;

import java.sql.Date;

public class DemandesAttestation {
	
	private int id;
	private int attestations_idAttestation;
	private String employes_idEmploye;
	private String etat;
	private String date;
	
	public DemandesAttestation(int id, int attestations_idAttestation, String employes_idEmploye, String etat, String date) {
		this.id = id;
		this.attestations_idAttestation = attestations_idAttestation;
		this.employes_idEmploye = employes_idEmploye;
		this.etat = etat;
		this.date = date;
	}

	public int getAttestations_idAttestation() {
		return attestations_idAttestation;
	}

	public void setAttestations_idAttestation(int attestations_idAttestation) {
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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	public int getId() {
		return id;
	}

}
