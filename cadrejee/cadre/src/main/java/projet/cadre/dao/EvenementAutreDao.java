package projet.cadre.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import projet.cadre.model.EvenementAutre;


public class EvenementAutreDao {
	
public EvenementAutre saveEvenementAutre(EvenementAutre event) {
	try {
		Connection connection = DataSourceProvider.getDataSource().getConnection();	
		PreparedStatement stmt = connection.prepareStatement("INSERT INTO `evenementsautres`(`idEvenement`,`dateEvenement`,`messageEvenement`,`employes_idEmploye`) VALUES(?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
		stmt.setInt(1,event.getIdEvenement());
		stmt.setString(2,event.getDateEvenement());
		stmt.setString(3,event.getMessageEvenement());
		stmt.setString(4,event.getEmployes_idEmploye());
		stmt.executeUpdate();
		stmt.close();
		connection.close();
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return event;
}

// Pour supprimer un evenement
public void deleteEvenement(EvenementAutre evenement){
	try {
		Connection connection = DataSourceProvider.getDataSource().getConnection();
		
		PreparedStatement stmt = connection.prepareStatement("DELETE FROM evenementsautres WHERE idEvenement=?");
		stmt.setInt(1,evenement.getIdEvenement());
		stmt.executeUpdate();
		stmt.close();
		connection.close();
	} catch (SQLException e) {
		e.printStackTrace();
	}
}

// Récupérer un evenement grace à son id 
public EvenementAutre getEvenementById(int idevenement ) {
	EvenementAutre evenement=null;
	try (
		Connection connection = DataSourceProvider.getDataSource().getConnection();
		PreparedStatement stmt = connection.prepareStatement("SELECT * FROM evenementsautres WHERE idEvenement = ?")){
			stmt.setInt(1, idevenement);
			ResultSet rs = stmt.executeQuery();
		if (rs.next()) {
			 evenement = new EvenementAutre (rs.getInt("idEvenement"), rs.getString("dateEvenement"), rs.getString("messageEvenement"), rs.getString("employes_idEmploye"));
		}
		rs.close();
		stmt.close();
		connection.close();
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return evenement;
}

	
}
