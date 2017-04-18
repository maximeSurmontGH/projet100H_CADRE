package projet.cadre.model;


public class Rappel {
	
	private int idRappel; 
	private String dateRappel; 
	private String messageRappel;
	private String employes_idEmploye;
	private int imprt;
	
	public Rappel( int idRappel,String dateRappel, String messageRappel, String employes_idEmploye, int imprt) {
		super();
		this.idRappel= idRappel;
		this.dateRappel = dateRappel;
		this.messageRappel = messageRappel;
		this.employes_idEmploye = employes_idEmploye;
		this.imprt = imprt;
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
