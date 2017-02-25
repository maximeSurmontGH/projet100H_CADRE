package projet.cadre.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import projet.cadre.model.Employe;

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
	public Employe saveEmploye(Employe employe) {
		
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES(?,?,?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1,employe.getIdEmploye());
			stmt.setString(2,employe.getNomEmploye());
			stmt.setString(3,employe.getPrenomEmploye());
			stmt.setString(4,employe.getMotDePasse());
			stmt.setString(5,employe.getPoste());
			stmt.setString(6,employe.getTelephone());
			stmt.setString(7,employe.getEmail());
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return employe;
	
	}
	
	// Pour supprimer un employe
	
	public void deleteEmploye(Employe employe){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			
			PreparedStatement stmt = connection.prepareStatement("DELETE FROM employes WHERE idEmploye=?");
			stmt.setString(1,employe.getIdEmploye());
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	

	
	
}
