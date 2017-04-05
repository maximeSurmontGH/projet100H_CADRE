package projet.cadre.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import projet.cadre.model.Conges;
import projet.cadre.model.DemandesAttestation;
import projet.cadre.model.Employe;
import projet.cadre.model.Vehicules;
import projet.cadre.model.DemandesConge;
import projet.cadre.model.DemandesVehicule;

public class VehiculesDao {
	
	public Vehicules addVehicule(String immatriculation, String typeVehicule){
		Vehicules vehicule = new Vehicules(immatriculation, typeVehicule);
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO vehicules(immatriculation, typeVehicule, disponibilite) VALUES(?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1, vehicule.getImmatriculation());
			stmt.setString(2, vehicule.getTypeDeVehicule());
			stmt.setString(3, "T");
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return vehicule;
	}
	
	public void deleteVehicule(String immatriculation){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection(); 
			PreparedStatement statement = connection.prepareStatement("DELETE * FROM vehicules WHERE immatriculation=?");
			statement.setString(1, immatriculation);
			statement.executeUpdate();	
		}catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public List<DemandesVehicule> getDemandesDeVehicule(){
		ArrayList<DemandesVehicule> lstdemandesVehicule = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesvehicule");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesVehicule.add(new DemandesVehicule(resultSet.getInt("id"), resultSet.getString("conges_immatriculation"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getString("dateDebut"), resultSet.getString("dateFin")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesVehicule;
	}
	
	public List<DemandesVehicule> getDemandesDeVehiculeByIdEmploye(String id){
		ArrayList<DemandesVehicule> lstdemandesVehicule = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesvehicule WHERE employes_idEmployes=?");
			stmt.setString(1, id);
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesVehicule.add(new DemandesVehicule(resultSet.getInt("id"), resultSet.getString("conges_immatriculation"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getString("dateDebut"), resultSet.getString("dateFin")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesVehicule;
	}
	
	public List<DemandesAttestation> getDemandesVehiculeByEtat(String etat){
		ArrayList<DemandesAttestation> lstdemandesAttestation = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesvehicule WHERE etat=?");
			stmt.setString(1, etat);
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesAttestation.add(new DemandesAttestation(resultSet.getInt("id"), resultSet.getInt("attestations_idAttestation"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getString("date")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesAttestation;
	}
	
	public void setDemandeDeVehicule (String immatriculation, String idEmploye, Date dateDebut, Date dateFin){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO demandesvehicule(conges_immatriculation, employes_idEmploye, dateDebut, dateFin, etat) VALUES(?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1, immatriculation);
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
	
	public void setState(String immatriculation, String idEmploye, int nb){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("UPDATE demandesvehicule SET etat=? WHERE vehicules_immatriculation=? AND employes_idEmploye=?");
			if (nb==2){
				stmt.setString(1,"refus");
			}
			else{
				stmt.setString(1,"succès");
			}
			stmt.setString(2,immatriculation);
			stmt.setString(3, idEmploye);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
