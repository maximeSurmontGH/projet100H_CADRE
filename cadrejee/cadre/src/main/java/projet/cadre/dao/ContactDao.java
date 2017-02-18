package projet.cadre.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

import projet.cadre.model.Contact;

public class ContactDao {
	
public Contact saveDevis(Contact contact){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO devis(nomContact,mailContact,societeContact,messageContact) VALUES(?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1,devis.getNomSociete());
			stmt.setString(2,devis.getNomDemandeur());
			stmt.setString(3,devis.getMail());
			stmt.setString(4,devis.getTelephone());
			stmt.setString(5,devis.getAdresse());
			stmt.setString(6,devis.getCodePostal());
			stmt.setString(7,devis.getVille());
			stmt.setString(8,devis.getService());
			stmt.setString(9,devis.getMessage());
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return devis;
	}


}
