package projet.cadre.model;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

import projet.cadre.util.MotDePasseUtils;

public class Employe {
	private String idEmploye ;
	private String nomEmploye ;
	private String prenomEmploye ;
	private String motDePasse ;
	private String telephone;
	private String poste ;
	private String email ;
	
	
	public Employe(){
	}
	
	//employe
	public Employe(String idEmploye, String nomEmploye, String prenomEmploye, String motDePasse, String telephone,
			String poste, String email) {
		super();
		this.idEmploye = idEmploye;
		this.nomEmploye = nomEmploye;
		this.prenomEmploye = prenomEmploye;
		this.motDePasse = motDePasse;
		this.telephone = telephone;
		this.poste = poste;
		this.email = email;
	}


	//Creer un nouvel employé 
	public Employe(String nomEmploye, String prenomEmploye, String telephone, 
			String poste, String email) {
		super();
		this.idEmploye = prenomEmploye+"."+nomEmploye;
		this.nomEmploye = nomEmploye;
		this.prenomEmploye = prenomEmploye;
		try {
			this.motDePasse = MotDePasseUtils.genererMotDePasse(prenomEmploye+"."+nomEmploye);
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvalidKeySpecException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		this.telephone = telephone;
		this.poste = poste;
		this.email = email;
	}


	public String getIdEmploye() {
		return idEmploye;
	}


	public void setIdEmploye(String idEmploye) {
		this.idEmploye = idEmploye;
	}


	public String getNomEmploye() {
		return nomEmploye;
	}


	public void setNomEmploye(String nomEmploye) {
		this.nomEmploye = nomEmploye;
	}


	public String getPrenomEmploye() {
		return prenomEmploye;
	}


	public void setPrenomEmploye(String prenomEmploye) {
		this.prenomEmploye = prenomEmploye;
	}


	public String getMotDePasse() {
		return motDePasse;
	}


	public void setMotDePasse(String motDePasse) {
		this.motDePasse = motDePasse;
	}


	public String getTelephone() {
		return telephone;
	}


	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}


	public String getPoste() {
		return poste;
	}


	public void setPoste(String poste) {
		this.poste = poste;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}
	
	

}
