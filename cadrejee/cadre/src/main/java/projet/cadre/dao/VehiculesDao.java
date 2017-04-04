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
import projet.cadre.model.Employe;
import projet.cadre.model.Vehicules;
import projet.cadre.model.DemandesConge;
import projet.cadre.model.DemandesVehicule;

public class VehiculesDao {
	
	public Vehicules ajoutVehicule(String immatriculation, String typeVehicule){
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
	
	public void suppressionVehicule(String immatriculation){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection(); 
			PreparedStatement statement = connection.prepareStatement("DELETE * FROM vehicules WHERE immatriculation=?");
			statement.setString(1, immatriculation);
			statement.executeUpdate();	
		}catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public List<DemandesVehicule> demandesDeVehicule(){
		ArrayList<DemandesVehicule> lstdemandesVehicule = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELEC * FROM demandesvehicule");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesVehicule.add(new DemandesVehicule(resultSet.getString("conges_immatriculation"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getString("dateDebut"), resultSet.getString("dateFin")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesVehicule;
	}
	
	public List<DemandesVehicule> demandesDeVehiculeParidEmploye(String id){
		ArrayList<DemandesVehicule> lstdemandesVehicule = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELEC * FROM demandesvehicule WHERE employes_idEmployes=?");
			stmt.setString(1, id);
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesVehicule.add(new DemandesVehicule(resultSet.getString("conges_immatriculation"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getString("dateDebut"), resultSet.getString("dateFin")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesVehicule;
	}
	
	public void demandeDeVehicule(Vehicules vehicule, Employe employe, Date dateDebut, Date dateFin){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO demandesvehicule(conges_immatriculation, employes_idEmploye, dateDebut, dateFin, etat) VALUES(?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1, vehicule.getImmatriculation());
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
	
	public void changementdEtat(Vehicules vehicule, Employe employe, int nb){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("UPDATE demandesvehicule SET etat=? WHERE vehicules_immatriculation=? AND employes_idEmploye=?");
			if (nb==2){
				stmt.setString(1,"refus");
			}
			else{
				stmt.setString(1,"succès");
			}
			stmt.setString(2, vehicule.getImmatriculation());
			stmt.setString(3, employe.getIdEmploye());
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}