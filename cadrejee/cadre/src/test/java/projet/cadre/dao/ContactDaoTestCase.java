package projet.cadre.dao;

import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

import projet.cadre.model.Contact;
import projet.cadre.model.Devis;

public class ContactDaoTestCase {
	
	private ContactDao contactDao = new ContactDao();

	@Before
	public void initDb() throws Exception {
		try (Connection connection = DataSourceProvider.getDataSource().getConnection();
			Statement stmt = connection.createStatement()) {
			stmt.executeUpdate("DELETE FROM demandesattestation");
			stmt.executeUpdate("DELETE FROM demandesconge");
			stmt.executeUpdate("DELETE FROM demandesvalidite");
			stmt.executeUpdate("DELETE FROM demandesvehicule");
			stmt.executeUpdate("DELETE FROM evenementsautres");
			stmt.executeUpdate("DELETE FROM attestations");
			stmt.executeUpdate("DELETE FROM rappels");
			stmt.executeUpdate("DELETE FROM conges");
			stmt.executeUpdate("DELETE FROM validites");
			stmt.executeUpdate("DELETE FROM employes");
			stmt.executeUpdate("DELETE FROM vehicules");
			stmt.executeUpdate("DELETE FROM contact");
			stmt.executeUpdate("DELETE FROM devis");
			stmt.executeUpdate("DELETE FROM elementssite");
			stmt.executeUpdate("DELETE FROM ressources");
			stmt.executeUpdate("INSERT INTO `contact`(`nomContact`,`mailContact`,`societeContact`,`messageContact`) VALUES ('Pelletier Chloe','chlo.pelletier@gmail.com', 'Marketing', 'Message de Test')");
		}
	}
	

	@Test
	public void shouldSaveContact() throws Exception {
		// GIVEN
		Contact contactToAdd = new Contact("Peri","nom@gmail.com","Assurance","Message de Test 3");
		// WHEN
		Contact contactAdded = contactDao.saveContact(contactToAdd);
		// THEN
		Assertions.assertThat(contactAdded).isNotNull();
		Assertions.assertThat(contactAdded.getNomContact()).isEqualTo("Peri");
		
		try (Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("SELECT * FROM contact WHERE nomContact = ?")) {
			stmt.setString(1,contactAdded.getNomContact());
			try (ResultSet rs = stmt.executeQuery()) {
				assertThat(rs.next()).isTrue();
				assertThat(rs.getString("mailContact")).isEqualTo("nom@gmail.com");
			}
		}
	}
}
