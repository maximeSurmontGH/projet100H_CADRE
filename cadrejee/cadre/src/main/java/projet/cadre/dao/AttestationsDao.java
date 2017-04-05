package projet.cadre.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import projet.cadre.model.Attestations;
import projet.cadre.model.Employe;
import projet.cadre.model.Validites;
import projet.cadre.model.DemandesAttestation;
import projet.cadre.model.DemandesValidite;

public class AttestationsDao {

	public List<DemandesAttestation> getDemandesAttestation(){
		ArrayList<DemandesAttestation> lstdemandesAttestation = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesattestation");
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
	
	public List<DemandesAttestation> getDemandesAttestationeByidEmploye(String id){
		ArrayList<DemandesAttestation> lstdemandesAttestation = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesattestation WHERE employes_idEmploye=?");
			stmt.setString(1, id);
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
	
	public List<DemandesAttestation> getDemandesAttestationByEtat(String etat){
		ArrayList<DemandesAttestation> lstdemandesAttestation = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesattestation WHERE etat=?");
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
	
	public void setDemandeAttestation(String idAttestation, String idEmploye, String date){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO demandesattestation(attestations_idAttestation, employes_idEmploye, date, etat) VALUES(?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1, idAttestation);
			stmt.setString(2, idEmploye);
			stmt.setString(3,date);
			stmt.setString(4,"en cours");
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public void setState (int idDemandeAttestation, int nb){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("UPDATE demandesattestation SET etat=? WHERE id=?");
			if (nb==2){
				stmt.setString(1,"refus");
			}
			else{
				stmt.setString(1,"succes");
			} 
			stmt.setInt(2, idDemandeAttestation);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
