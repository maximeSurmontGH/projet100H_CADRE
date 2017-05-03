package projet.cadre.dao;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import projet.cadre.model.Employe;
import projet.cadre.util.MotDePasseUtils;

public class EmployeDao {
	
	// HasMap Id + Mdp	
	public HashMap<String,String> hashIdMdp(){
		HashMap<String,String> hashIdMdpOk = new HashMap<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM employes");
			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {
				hashIdMdpOk.put(rs.getString("idEmploye"),rs.getString("motDePasse"));
			}
			rs.close();
			stmt.close();
			connection.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return hashIdMdpOk;
	}
	
	// Récupérer un employé grace à son id 
	public Employe getEmployeById(String idEmploye) {
		Employe employe = null;
		try (
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM employes WHERE idEmploye = ?")){
				stmt.setString(1, idEmploye);
				ResultSet rs = stmt.executeQuery();
			if (rs.next()) {
				 employe = new Employe(rs.getString("idEmploye"), rs.getString("nomEmploye"), rs.getString("prenomEmploye"), rs.getString("motDePasse"), rs.getString("telephone"),
							rs.getString("poste"), rs.getString("email"));
			}
			rs.close();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return employe;
	}
	
	//Obtenir la liste des employes
	public List<Employe> listEmployes() {
		List<Employe> listEmployes = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM employes");

			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {
				listEmployes.add(new Employe(rs.getString("idEmploye"), rs.getString("nomEmploye"), rs.getString("prenomEmploye"), rs.getString("motDePasse"), rs.getString("telephone"),
						rs.getString("poste"), rs.getString("email")));
			}
			
			rs.close();
			stmt.close();
			connection.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return listEmployes;
	}
	
	// Enregistrer un nouvel employe
	public void saveEmploye(String nomEmploye, String prenomEmploye, String telephone, 
			String poste, String email) {
		
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES(?,?,?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1,prenomEmploye+'.'+nomEmploye);
			stmt.setString(2,nomEmploye);
			stmt.setString(3,prenomEmploye);
			String mdp="";
			try {
				mdp = MotDePasseUtils.genererMotDePasse(prenomEmploye+"."+nomEmploye);
			} catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (InvalidKeySpecException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			stmt.setString(4,mdp);
			stmt.setString(5,poste);
			stmt.setString(6,telephone);
			stmt.setString(7,email);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
	// Pour supprimer un employe
	public void deleteEmploye(String idEmploye){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			
			PreparedStatement stmt = connection.prepareStatement("DELETE FROM employes WHERE idEmploye=?");
			stmt.setString(1,idEmploye);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	// Liste des employés à partir d'un champ (ce champ peut etre un Nom de famille, un prenom ou un poste) 
	public List<Employe> listEmployesPosteNom(String champs) {
		List<Employe> listEmployesPN = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM employes WHERE nomEmploye=? OR poste=? OR prenomEmploye=?", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1,champs);
			stmt.setString(2,champs);
			stmt.setString(3,champs);

			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {
				listEmployesPN.add(new Employe(rs.getString("idEmploye"), rs.getString("nomEmploye"), rs.getString("prenomEmploye"), rs.getString("motDePasse"), rs.getString("telephone"),
						rs.getString("poste"), rs.getString("email")));
			}
			
			rs.close();
			stmt.close();
			connection.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return listEmployesPN;
	}
	

	// Modifier un mot de passe à partir de l'identifiant 
	public void modifierMDP(String idEmploye, String motDePasse) {
		String motDePasseHash="";
		try {
			motDePasseHash = MotDePasseUtils.genererMotDePasse(motDePasse);
		} catch (NoSuchAlgorithmException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (InvalidKeySpecException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("UPDATE employes set motDePasse=? WHERE idEmploye=?");
			stmt.setString(1, motDePasseHash);
			stmt.setString(2, idEmploye);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
