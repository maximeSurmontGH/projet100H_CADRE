package projet.cadre.model;

public class Ressource {


  private int idRessource; 
  private String contenuRessource;
  private String corpsDeMetier;
  private String cheminRessource;
  
  public Ressource(int idRessource,String contenuRessource, String corpsDeMetier, String cheminRessource) {
	super();
	this.idRessource = idRessource;
	this.contenuRessource = contenuRessource;
	this.corpsDeMetier = corpsDeMetier;
	this.cheminRessource = cheminRessource;
  }
  
  public Ressource(String contenuRessource, String corpsDeMetier, String cheminRessource) {
	this.contenuRessource = contenuRessource;
	this.corpsDeMetier = corpsDeMetier;
	this.cheminRessource = cheminRessource;
  }

  public int getIdRessource() {
	return idRessource;
  }

  public void setIdRessource(int idRessource) {
	this.idRessource = idRessource;
  }

  public String getContenuRessource() {
	return contenuRessource;
  }

  public void setContenuRessource(String contenuRessource) {
	this.contenuRessource = contenuRessource;
  }

  public String getCorpsDeMetier() {
	return corpsDeMetier;
  }

  public void setCorpsDeMetier(String corpsDeMetier) {
	this.corpsDeMetier = corpsDeMetier;
  }

  public String getCheminRessource() {
	return cheminRessource;
  }

  public void setCheminRessource(String cheminRessource) {
	this.cheminRessource = cheminRessource;
  }   
  
}
