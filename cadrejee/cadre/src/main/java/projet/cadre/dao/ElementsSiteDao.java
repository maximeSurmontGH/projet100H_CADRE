package projet.cadre.dao;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import projet.cadre.model.ElementsSite;
import projet.cadre.model.Employe;
import projet.cadre.util.MotDePasseUtils;

public class ElementsSiteDao {
	
	// Modifier un contenu texte
	public void modifierElementTexte(String idElement, String contenuElement) {
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("UPDATE elementssite set contenuElement=? WHERE idElement=?");
			stmt.setString(1, contenuElement);
			stmt.setString(2, idElement);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	// Modifier un contenu image
	public void modifierElementImage(String idElement, String contenuElement, String cheminElement) {
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("UPDATE elementssite set contenuElement=?, cheminElement=? WHERE idElement=?");
			stmt.setString(1, contenuElement);
			stmt.setString(2, cheminElement);
			stmt.setString(3, idElement);
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	// Récupérer un element grace à son id 
	public ElementsSite getElementById(String id) {
		ElementsSite element = null;
		try (
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM elementssite WHERE idElement = ?")){
				stmt.setString(1, id);
				ResultSet rs = stmt.executeQuery();
			if (rs.next()) {
				 element = new ElementsSite(rs.getString("idElement"), rs.getString("contenuElement"), rs.getString("cheminElement"));
			}
			rs.close();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return element;
	}
}
