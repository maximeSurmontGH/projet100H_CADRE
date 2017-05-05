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
import projet.cadre.model.Conges;
import projet.cadre.model.Employe;
import projet.cadre.model.DemandesConge;

public class CongesDao {
	
	//retourne la liste des conges avec leur id 
	public List<Conges> getIdConge(){
		ArrayList<Conges> lstIdConge = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM conges");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstIdConge.add(new Conges(resultSet.getInt("idConge"), resultSet.getString("typeConge")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstIdConge;
	}
	
	// retourne la liste des demandes de conges
	public List<DemandesConge> getDemandesDeConge(){
		ArrayList<DemandesConge> lstdemandesConges = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesconge");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesConges.add(new DemandesConge(resultSet.getInt("id"), resultSet.getInt("conges_idConge"), resultSet.getString("employes_idEmploye"), resultSet.getString("dateDebut"), resultSet.getString("dateFin"), resultSet.getString("etat")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesConges;
	}
	
	// retourne la liste des demandes de conges pour un employe donne
	public List<DemandesConge> getDemandesDeCongeByIdEmploye(String id){
		ArrayList<DemandesConge> lstdemandesConges = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesconge WHERE employes_idEmploye=?");
			stmt.setString(1, id);
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesConges.add(new DemandesConge(resultSet.getInt("id"), resultSet.getInt("conges_idConge"), resultSet.getString("employes_idEmploye"), resultSet.getString("dateDebut"), resultSet.getString("dateFin"), resultSet.getString("etat")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesConges;
	}
	
	// retourne la liste des demandes de conges en fonction de leur type
	public List<DemandesConge> getDemandesDeCongeByType(String type){
		ArrayList<DemandesConge> lstdemandesConges = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesconge INNER JOIN conges ON idConge=conges_idConge WHERE conges.typeConge=?");
			stmt.setString(1, type);
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesConges.add(new DemandesConge(resultSet.getInt("id"), resultSet.getInt("conges_idConge"), resultSet.getString("employes_idEmploye"), resultSet.getString("dateDebut"), resultSet.getString("dateFin"), resultSet.getString("etat")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesConges;
	}
	
	// permet d'ajouter une demande de conge pour un employe voulu
	public void setDemandeDeConge(int idConge, String idEmploye, String dateDebut, String dateFin){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO demandesconge(conges_idConge, employes_idEmploye, dateDebut, dateFin, etat) VALUES(?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setInt(1, idConge);
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
	
	// permet de modifer l'état d'une demande (la valider ou la refuser)
	public void setState(int id, int nb){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("UPDATE demandesconge SET etat=? WHERE id=?");
			if (nb==2){
				stmt.setString(1,"refuse");
			}
			else{
				stmt.setString(1,"valide");
			}
			stmt.setInt(2, id);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	// permet de compter le nombre de conge de la personne
	public int compteurDeConges(int idConge, String idEmploye){
		int nb = 0;
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesconge WHERE conges_idConge=? AND employes_idEmploye=? AND etat=?");
			stmt.setInt(1, idConge);
			stmt.setString(2, idEmploye);
			stmt.setString(3, "valide");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				nb++;			
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return nb;
	}
	// Pour supprimer une attestation à partir de l'idEmploye 
		public void deleteDemandeConge(String idEmploye){
			try {
				Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("DELETE FROM demandesconge WHERE employes_idEmploye=?");
				stmt.setString(1,idEmploye);
				stmt.executeUpdate();
				stmt.close();
				connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
}
