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
import projet.cadre.model.DemandesConge;

public class CongesDao {
	
	public Conges TypeDeDemandeDeConge(String type){
		Conges conge = new Conges(type);
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELEC * FROM demandesconge WHERE typeConge=?", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1, type);
			ResultSet resultSet = stmt.executeQuery();
			conge.setId(resultSet.getString("idConge"));
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conge;
	}
	
	public List<DemandesConge> demandesDeConge(){
		ArrayList<DemandesConge> lstdemandesConges = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELEC * FROM demandesconge");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesConges.add(new DemandesConge(resultSet.getString("conges_idConges"), resultSet.getString("employes_idEmploye"), resultSet.getDate("dateDebut"), resultSet.getDate("dateFin"), resultSet.getString("etat")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesConges;
	}
	
	public List<DemandesConge> demandesDeCongeParidEmploye(String id){
		ArrayList<DemandesConge> lstdemandesConges = new ArrayList<>();
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELEC * FROM demandesconge WHERE employes_idEmployes=?");
			stmt.setString(1, id);
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				lstdemandesConges.add(new DemandesConge(resultSet.getString("conges_idConges"), resultSet.getString("employes_idEmploye"), resultSet.getDate("dateDebut"), resultSet.getDate("dateFin"), resultSet.getString("etat")));
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstdemandesConges;
	}
	
	public void demandeDeConge(Conges conge, Employe employe, Date dateDebut, Date dateFin, int duree){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO demandesconge(conges_idConge, employes_idEmploye, dateDebut, dateFin, etat, duree) VALUES(?,?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1, conge.getId());
			stmt.setString(2, employe.getIdEmploye());
			stmt.setDate(3,dateDebut);
			stmt.setDate(4,dateFin);
			stmt.setString(5,"en cours");
			stmt.setInt(6, duree);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public void changementdEtat(Conges conge, Employe employe, int nb){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("UPDATE demandesconge SET etat=? WHERE conges_idConge=? AND employes_idEmploye=?");
			if (nb==2){
				stmt.setString(1,"refus");
			}
			else{
				stmt.setString(1,"succès");
			}
			stmt.setString(2, conge.getId());
			stmt.setString(3, employe.getIdEmploye());
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public int compteurDeConges(Conges conge, Employe employe){
		int nb = 0;
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM demandesconge WHERE conges_idConge=? AND employes_idEmploye=? AND etat=?");
			stmt.setString(1, conge.getId());
			stmt.setString(2, employe.getIdEmploye());
			stmt.setString(3, "succès");
			ResultSet resultSet = stmt.executeQuery();
			while(resultSet.next()) {
				nb+=resultSet.getInt("duree");
			}
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return nb;
	}

}
