package projet.cadre.model;


public class Rappel {
	
	private int idRappel; 
	private String dateRappel; 
	private String messageRappel;
	private String employes_idEmploye;
	
	public Rappel(String dateRappel, String messageRappel, String employes_idEmploye) {
		super();
		this.dateRappel = dateRappel;
		this.messageRappel = messageRappel;
		this.employes_idEmploye = employes_idEmploye;
	}

	public int getIdRappel() {
		return idRappel;
	}

	public void setIdRappel(int idRappel) {
		this.idRappel = idRappel;
	}

	public String getDateRappel() {
		return dateRappel;
	}

	public void setDateRappel(String dateRappel) {
		this.dateRappel = dateRappel;
	}

	public String getMessageRappel() {
		return messageRappel;
	}

	public void setMessageRappel(String messageRappel) {
		this.messageRappel = messageRappel;
	}

	public String getEmployes_idEmploye() {
		return employes_idEmploye;
	}

	public void setEmployes_idEmploye(String employes_idEmploye) {
		this.employes_idEmploye = employes_idEmploye;
	}	

}