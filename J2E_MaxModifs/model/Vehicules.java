package projet.cadre.model;

public class Vehicules {
	
	private String immatriculation;
	private String typeDeVehicule;
	private String disponibilite;
	
	public Vehicules (String imma, String type){
		this.immatriculation=imma;
		this.typeDeVehicule=type;
		this.disponibilite="T";
	}

	public String getImmatriculation() {
		return immatriculation;
	}

	public void setImmatriculation(String immatriculation) {
		this.immatriculation = immatriculation;
	}

	public String getTypeDeVehicule() {
		return typeDeVehicule;
	}

	public void setTypeDeVehicule(String typeDeVehicule) {
		this.typeDeVehicule = typeDeVehicule;
	}
	
	public void setDispoTrue(){
		this.disponibilite="T";
	}
	
	public void setDispoFalse(){
		this.disponibilite="F";
	}
}
