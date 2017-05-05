package projet.cadre.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import projet.cadre.model.DemandesConge;
import projet.cadre.model.Employe;
import projet.cadre.model.Rappel;

public class RappelDao {
	
	// Enregistrer un nouveau rappel
	public void saveRappel(String DateRappel, String MessageRappel, String idEmploye, int imprt) {
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO `rappels`(`dateRappel`,`messageRappel`,`employes_idEmploye`,`importance`) VALUES(?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1,DateRappel);
			stmt.setString(2,MessageRappel);
			stmt.setString(3,idEmploye);
			stmt.setInt(4,imprt);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	// Pour supprimer un rappel
	public void deleteRappel(int idRappel){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("DELETE FROM rappels WHERE idRappel=?");
			stmt.setInt(1,idRappel);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	// Récupérer un rappel grace à son id 
	public Rappel getRappelById(int idRappel ) {
		Rappel rappel=null;
		try (
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM rappels WHERE idRappel = ?")){
				stmt.setInt(1, idRappel);
				ResultSet rs = stmt.executeQuery();
			if (rs.next()) {
				 rappel = new Rappel(rs.getInt("idRappel"), rs.getString("dateRappel"), rs.getString("messageRappel"), rs.getString("employes_idEmploye"), rs.getInt("importance"));
			}
			rs.close();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return rappel;
	}
	
	// retourne la liste des demandes de conges pour un employe donne
		public List<Rappel> getRappelsByIdEmploye(String id){
			ArrayList<Rappel> lstRappel = new ArrayList<>();
			try {
				Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("SELECT * FROM rappels WHERE employes_idEmploye=?");
				stmt.setString(1, id);
				ResultSet rs = stmt.executeQuery();
				while (rs.next()) {
					 lstRappel.add(new Rappel(rs.getInt("idRappel"), rs.getString("dateRappel"), rs.getString("messageRappel"), rs.getString("employes_idEmploye"), rs.getInt("importance")));
				}
				stmt.close();
				connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			return lstRappel;
		}
		
		// retourne la liste des rappels
				public List<Rappel> getRappels(){
					ArrayList<Rappel> lstRappel = new ArrayList<>();
					try {
						Connection connection = DataSourceProvider.getDataSource().getConnection();
						PreparedStatement stmt = connection.prepareStatement("SELECT * FROM rappels");
						ResultSet rs = stmt.executeQuery();
						while (rs.next()) {
							 lstRappel.add(new Rappel(rs.getInt("idRappel"), rs.getString("dateRappel"), rs.getString("messageRappel"), rs.getString("employes_idEmploye"), rs.getInt("importance")));
						}
						stmt.close();
						connection.close();
					} catch (SQLException e) {
						e.printStackTrace();
					}
					return lstRappel;
				}
				// Pour supprimer un rappel à partir de l'idEmploye 
				public void deleteRappel(String idEmploye){
					try {
						Connection connection = DataSourceProvider.getDataSource().getConnection();
						PreparedStatement stmt = connection.prepareStatement("DELETE FROM rappels WHERE employes_idEmploye=?");
						stmt.setString(1,idEmploye);
						stmt.executeUpdate();
						stmt.close();
						connection.close();
					} catch (SQLException e) {
						e.printStackTrace();
					}
				}
}
