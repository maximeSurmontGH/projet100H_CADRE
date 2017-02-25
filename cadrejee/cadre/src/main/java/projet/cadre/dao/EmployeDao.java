package projet.cadre.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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
	

}
