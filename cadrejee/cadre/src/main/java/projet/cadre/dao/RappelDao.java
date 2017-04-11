package projet.cadre.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import projet.cadre.model.Employe;
import projet.cadre.model.Rappel;

public class RappelDao {
	
	// Enregistrer un nouveau rappel
	public Rappel saveRappel(Rappel rappel) {
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO `rappels`(`idRappel`,`dateRappel`,`messageRappel`,`employes_idEmploye`) VALUES(?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setInt(1,rappel.getIdRappel());
			stmt.setString(2,rappel.getDateRappel());
			stmt.setString(3,rappel.getMessageRappel());
			stmt.setString(4,rappel.getEmployes_idEmploye());
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return rappel;
	}
	
	// Pour supprimer un rappel
	public void deleteRappel(Rappel rappel){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("DELETE FROM rappels WHERE idRappel=?");
			stmt.setInt(1,rappel.getIdRappel());
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
				 rappel = new Rappel(rs.getInt("idRappel"), rs.getString("dateRappel"), rs.getString("messageRappel"), rs.getString("employes_idEmploye"));
			}
			rs.close();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return rappel;
	}
}
