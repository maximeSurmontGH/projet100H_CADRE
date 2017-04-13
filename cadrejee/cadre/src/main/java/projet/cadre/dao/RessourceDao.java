package projet.cadre.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import projet.cadre.model.Employe;
import projet.cadre.model.Ressource;

public class RessourceDao {
	
	// Récupérer une ressource grace à son id 
	public  Ressource getRessourceById(int id) {
		Ressource ressource = null;
		try (
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM ressources WHERE idRessource = ?")){
				stmt.setInt(1, id);
				ResultSet rs = stmt.executeQuery();
				if (rs.next()) {
					 ressource = new Ressource(rs.getInt("idRessource"),rs.getString("contenuRessource"), rs.getString("corpsDeMetier"), rs.getString("cheminRessource"));
				}
				rs.close();
				stmt.close();
				connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
		}
		return ressource;
	}
		
	// Récupérer une ressource grace à son poste ou nom
	public List<Ressource> listRessourceByPosteNom(String champs) {
		List<Ressource> ressources =  new ArrayList<>();
		try (
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM ressources WHERE contenuRessource = ? OR corpsDeMetier=?")){
				stmt.setString(1,champs);
				stmt.setString(2,champs);
				ResultSet rs = stmt.executeQuery();
				while (rs.next()) {
					 ressources.add(new Ressource(rs.getInt("idRessource"),rs.getString("contenuRessource"), rs.getString("corpsDeMetier"), rs.getString("cheminRessource")));
						
				}
			rs.close();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return ressources;
	}	
	
	// Récupérer toutes les ressources
		public List<Ressource> listRessource() {
			List<Ressource> ressources =  new ArrayList<>();
			try (
				Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("SELECT * FROM ressources")){
					ResultSet rs = stmt.executeQuery();
					while (rs.next()) {
						 ressources.add(new Ressource(rs.getInt("idRessource"),rs.getString("contenuRessource"), rs.getString("corpsDeMetier"), rs.getString("cheminRessource")));
							
					}
				rs.close();
				stmt.close();
				connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			return ressources;
		}
		
	// Enregistrer une nouvelle ressource
	public Ressource saveRessource(Ressource ressource) {
			
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO `ressources`(`contenuRessource`,`corpsDeMetier`,`cheminRessource`) VALUES(?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1,ressource.getContenuRessource());
			stmt.setString(2,ressource.getCorpsDeMetier());
			stmt.setString(3,ressource.getCheminRessource());
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return ressource;
		
	}

	// Pour supprimer une ressource
	public void deleteRessource(int id){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("DELETE FROM ressources WHERE idRessource=?");
			stmt.setInt(1,id);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
