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

	public List<DemandesAttestation> demandesAttestation(){
		ArrayList<DemandesAttestation> lstdemandesAttestation = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELEC * FROM demandesattestation");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesAttestation.add(new DemandesAttestation(resultSet.getString("attestations_idAttestation"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getString("date")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesAttestation;
	}
	
	public List<DemandesAttestation> demandesAttestationeParidEmploye(String id){
		ArrayList<DemandesAttestation> lstdemandesAttestation = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELEC * FROM demandesattestation WHERE employes_idEmployes=?");
			stmt.setString(1, id);
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesAttestation.add(new DemandesAttestation(resultSet.getString("attestations_idAttestation"), resultSet.getString("employes_idEmploye"),resultSet.getString("etat"), resultSet.getString("date")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesAttestation;
	}
	
	public void demandeAttestations(Attestations attestation, Employe employe, Date date){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO demandesattestation(attestations_idAttestation, employes_idEmploye, date, etat) VALUES(?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1, attestation.getIdAttestation());
			stmt.setString(2, employe.getIdEmploye());
			stmt.setDate(3,date);
			stmt.setString(4,"en cours");
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public void changementdEtat(Attestations attestation, Employe employe, int nb){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("UPDATE demandesattestation SET etat=? WHERE attestations_idAttestation=? AND employes_idEmploye=?");
			if (nb==2){
				stmt.setString(1,"refus");
			}
			else{
				stmt.setString(1,"succès");
			}
			stmt.setString(2, attestation.getIdAttestation());
			stmt.setString(3, employe.getIdEmploye());
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
