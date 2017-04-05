package projet.cadre.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import projet.cadre.model.Employe;
import projet.cadre.model.Validites;
import projet.cadre.model.DemandesValidite;


public class ValiditesDao {

	public List<DemandesValidite> getDemandesValidite(){
		ArrayList<DemandesValidite> lstdemandesValidite = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesvalidite");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesValidite.add(new DemandesValidite(resultSet.getInt("id"), resultSet.getInt("validites_idValidite"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getString("dateDebut"), resultSet.getString("dateFin")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesValidite;
	}
	
	public List<DemandesValidite> getDemandesDeValiditeByidEmploye(String id){
		ArrayList<DemandesValidite> lstdemandesValidite = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesvalidite WHERE employes_idEmployes=?");
			stmt.setString(1, id);
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesValidite.add(new DemandesValidite(resultSet.getInt("id"), resultSet.getInt("validites_idValidite"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getString("dateDebut"), resultSet.getString("dateFin")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesValidite;
	}
	
	public void setDemandeDeValidite(int idValidite, String idEmploye, Date dateDebut, Date dateFin){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO demandesvalidite(validites_idValidite, employes_idEmploye, dateDebut, dateFin, etat) VALUES(?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setInt(1, idValidite);
			stmt.setString(2, idEmploye);
			stmt.setDate(3,dateDebut);
			stmt.setDate(4,dateFin);
			stmt.setString(5,"en cours");
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public void setState (int idValidite, String idEmploye, int nb){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("UPDATE demandesvalidite SET etat=? WHERE validites_idvalidite=? AND employes_idEmploye=?");
			if (nb==2){
				stmt.setString(1,"refus");
			}
			else{
				stmt.setString(1,"succès");
			}
			stmt.setInt(2, idValidite);
			stmt.setString(3, idEmploye);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
