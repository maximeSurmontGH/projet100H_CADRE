package projet.cadre.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import projet.cadre.model.Attestations;
import projet.cadre.model.Devis;

public class DevisDao {
	
	public Devis saveDevis(Devis devis){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO devis(nomSociete, nomDemandeur, mail, telephone, adresse,codePostal,ville,service, message) VALUES(?,?,?,?,?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1,devis.getNomSociete());
			stmt.setString(2,devis.getNomDemandeur());
			stmt.setString(3,devis.getMail());
			stmt.setString(4,devis.getTelephone());
			stmt.setString(5,devis.getAdresse());
			stmt.setString(6,devis.getCodePostal());
			stmt.setString(7,devis.getVille());
			stmt.setString(8,devis.getService());
			stmt.setString(9,devis.getMessage());
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return devis;
	}

	//retourne la liste des Devis
	public List<Devis> ListDevis(){
		ArrayList<Devis> lstIdDevis = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM devis");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstIdDevis.add(new Devis(resultSet.getInt("idDevis"), resultSet.getString("nomSociete"), resultSet.getString("nomDemandeur"), resultSet.getString("mail"), resultSet.getString("telephone"), resultSet.getString("adresse"), resultSet.getString("codePostal"), resultSet.getString("ville"), resultSet.getString("service"), resultSet.getString("message")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstIdDevis;
	}
	
	// permet de supprimer un devis
	public void deleteDevis(int id){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection(); 
			PreparedStatement statement1 = connection.prepareStatement("DELETE FROM devis WHERE idDevis=?");
			statement1.setInt(1, id);
			statement1.executeUpdate();
		}catch (SQLException e) {
			e.printStackTrace();
		}
	}
}




