package projet.cadre.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

import projet.cadre.model.Contact;

public class ContactDao {
	
public Contact saveContact(Contact contact){
		try {
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("INSERT INTO contact(nomContact,mailContact,societeContact,messageContact) VALUES(?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1,contact.getNomContact());
			stmt.setString(2,contact.getMailContact());
			stmt.setString(3,contact.getSocieteContact());
			stmt.setString(4,contact.getMessageContact());
			stmt.executeUpdate();
			stmt.close();
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return contact;
	}
}
