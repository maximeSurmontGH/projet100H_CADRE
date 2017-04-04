package projet.cadre.model;

public class Attestations {
	
	private String idAttestation;
	private String typeAttestation;
	
	public Attestations(String idAttestation, String typeAttestation) {
		super();
		this.idAttestation = idAttestation;
		this.typeAttestation = typeAttestation;
	}
	
	public String getIdAttestation() {
		return idAttestation;
	}
	
	public void setIdAttestation(String idAttestation) {
		this.idAttestation = idAttestation;
	}
	
	public String getTypeAttestation() {
		return typeAttestation;
	}
	
	public void setTypeAttestation(String typeAttestation) {
		this.typeAttestation = typeAttestation;
	}
	
}
