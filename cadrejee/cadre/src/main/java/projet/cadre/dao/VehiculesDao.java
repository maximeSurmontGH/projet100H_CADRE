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
	
	//retourne la liste des conges avec leur id 
		public List< Vehicules> getIdVehicule(){
			ArrayList<Vehicules> lstIdVehicule = new ArrayList<>();
			try {
				Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("SELECT * FROM vehicules");
				ResultSet resultSet = stmt.executeQuery();
				while(resultSet.next()) {
					lstIdVehicule.add(new Vehicules(resultSet.getString("immatriculation"), resultSet.getString("typeVehicule")));
				}
				stmt.close();
				connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			return lstIdVehicule;
		}
	
	// retourne la liste des demandes de vehicules
	public List<DemandesVehicule> getDemandesDeVehicule(){
		ArrayList<DemandesVehicule> lstdemandesVehicule = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesvehicule");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesVehicule.add(new DemandesVehicule(resultSet.getInt("id"), resultSet.getString("vehicules_immatriculation"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getString("dateDebut"), resultSet.getString("dateFin")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesVehicule;
	}
	
	// retourne la liste des demandes de vehicules pour un employe voulu
	public List<DemandesVehicule> getDemandesDeVehiculeByIdEmploye(String id){
		ArrayList<DemandesVehicule> lstdemandesVehicule = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesvehicule WHERE employes_idEmploye=?");
			stmt.setString(1, id);
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesVehicule.add(new DemandesVehicule(resultSet.getInt("id"), resultSet.getString("vehicules_immatriculation"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getString("dateDebut"), resultSet.getString("dateFin")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesVehicule;
	}
	
	// retourne la liste des demandes de vehicules en fonction de l etat voulu
	public List<DemandesVehicule> getDemandesVehiculeByEtat(String etat){
		ArrayList<DemandesVehicule> lstdemandesAttestation = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesvehicule WHERE etat=?");
			stmt.setString(1, etat);
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesAttestation.add(new DemandesVehicule(resultSet.getInt("id"), resultSet.getString("vehicules_immatriculation"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getString("dateDebut"), resultSet.getString("dateFin")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesAttestation;
	}
	
	// retourne la liste des demandes de vehicules libre
	public List<Vehicules> getVehiculesFree(){
		ArrayList<Vehicules> lstdemandesAttestation = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM  vehicules WHERE disponibilite=?");
			stmt.setString(1, "T");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesAttestation.add(new Vehicules(resultSet.getString("immatriculation"),resultSet.getString("typeVehicule")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesAttestation;
	}
	
	// permet d'ajouter une demande de véhicule pour un employe voulu
	public void setDemandeDeVehicule (String immatriculation, String idEmploye, String dateDebut, String dateFin){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO demandesvehicule(vehicules_immatriculation, employes_idEmploye, dateDebut, dateFin, etat) VALUES(?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1, immatriculation);
			stmt.setString(2, idEmploye);
			stmt.setString(3,dateDebut);
			stmt.setString(4,dateFin);
			stmt.setString(5,"attente");
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	// permet de modifier l'état de la demande (la valider ou la refuser)
	public void setState(int id, int nb){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("UPDATE demandesvehicule SET etat=? WHERE id=?");
			if (nb==2){
				stmt.setString(1,"refuse");
			}
			else{
				stmt.setString(1,"valide");
			}
			stmt.setInt(2,id);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	// permet de recuperer un vehicule par son immatriculation
	public Vehicules getVehiculeByImmatriculation(String imma){
		Vehicules veh = null;
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM vehicules WHERE immatriculation=?");
			stmt.setString(1, imma);
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				veh = new Vehicules(resultSet.getString("immatriculation"), resultSet.getString("typeVehicule"));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return veh;
	}
	
	// permet d'ajouter un véhicule
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

	// permet de supprimer un véhicule
	public void deleteVehicule(String immatriculation){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection(); 
			PreparedStatement statement1 = connection.prepareStatement("DELETE FROM demandesvehicule WHERE vehicules_immatriculation=?");
			statement1.setString(1, immatriculation);
			statement1.executeUpdate();
			PreparedStatement statement = connection.prepareStatement("DELETE FROM vehicules WHERE immatriculation=?");
			statement.setString(1, immatriculation);
			statement.executeUpdate();	
		}catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	// Pour supprimer demande vehicule à partir de l'idEmploye 
		public void deleteDemandeVehicule(String idEmploye){
			try {
				Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("DELETE FROM demandesvehicule WHERE employes_idEmploye=?");
				stmt.setString(1,idEmploye);
				stmt.executeUpdate();
				stmt.close();
				connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
}
