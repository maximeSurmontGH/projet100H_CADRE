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
import projet.cadre.model.Vehicules;
import projet.cadre.model.demandesAttestation;
import projet.cadre.model.demandesValidite;
import projet.cadre.model.demandesVehicule;

public class ValiditesDao {

	public List<demandesValidite> demandesValidite(){
		ArrayList<demandesValidite> lstdemandesValidite = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELEC * FROM demandesvalidite");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesValidite.add(new demandesValidite(resultSet.getString("validites_idValidite"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getDate("dateDebut"), resultSet.getDate("dateFin")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesValidite;
	}
	
	public List<demandesValidite> demandesDeValiditeParidEmploye(String id){
		ArrayList<demandesValidite> lstdemandesValidite = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELEC * FROM demandesvalidite WHERE employes_idEmployes=?");
			stmt.setString(1, id);
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesValidite.add(new demandesValidite(resultSet.getString("validites_idValidite"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getDate("dateDebut"), resultSet.getDate("dateFin")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesValidite;
	}
	
	public void demandeDeValidite(Validites validite, Employe employe, Date dateDebut, Date dateFin){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO demandesvalidite(validites_idValidite, employes_idEmploye, dateDebut, dateFin, etat) VALUES(?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1, validite.getIdValidite());
			stmt.setString(2, employe.getIdEmploye());
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
	
	public void changementdEtat(Validites validite, Employe employe, int nb){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("UPDATE demandesvalidite SET etat=? WHERE validites_idvalidite=? AND employes_idEmploye=?");
			if (nb==2){
				stmt.setString(1,"refus");
			}
			else{
				stmt.setString(1,"succès");
			}
			stmt.setString(2, validite.getIdValidite());
			stmt.setString(3, employe.getIdEmploye());
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
