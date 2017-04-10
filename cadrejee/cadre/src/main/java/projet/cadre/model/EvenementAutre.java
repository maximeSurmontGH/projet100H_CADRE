package projet.cadre.model;

public class EvenementAutre {
	private int idEvenement;
	private String dateEvenement;
	private String messageEvenement;
	private String employes_idEmploye;
	
	
	public EvenementAutre(int idEvenement, String dateEvenement, String messageEvenement, String employes_idEmploye) {
		super();
		this.idEvenement = idEvenement;
		this.dateEvenement = dateEvenement;
		this.messageEvenement = messageEvenement;
		this.employes_idEmploye = employes_idEmploye;
	}


	public int getIdEvenement() {
		return idEvenement;
	}


	public void setIdEvenement(int idEvenement) {
		this.idEvenement = idEvenement;
	}


	public String getDateEvenement() {
		return dateEvenement;
	}


	public void setDateEvenement(String dateEvenement) {
		this.dateEvenement = dateEvenement;
	}


	public String getMessageEvenement() {
		return messageEvenement;
	}


	public void setMessageEvenement(String messageEvenement) {
		this.messageEvenement = messageEvenement;
	}


	public String getEmployes_idEmploye() {
		return employes_idEmploye;
	}


	public void setEmployes_idEmploye(String employes_idEmploye) {
		this.employes_idEmploye = employes_idEmploye;
	}
	
	
		

}
