package projet.cadre.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import org.assertj.core.api.Assertions;
import static org.assertj.core.api.Assertions.assertThat;
import org.junit.Before;
import org.junit.Test;

import projet.cadre.model.Devis;

public class DevisDaoTestCase {
	
	private DevisDao devisDao = new DevisDao();

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
			stmt.executeUpdate("INSERT INTO `devis`(`nomSociete`,`nomDemandeur`,`mail`,`telephone`,`adresse`,`codePostal`,`ville`,`service`,`message`) VALUES ('Konbi','Pelletier Chloe','chlo.pelletier@gmail.com', '0614348499', '6 Rue de la Tour Roland','60310','Lassigny', 'Marketing', 'Message de Test')");
			stmt.executeUpdate("INSERT INTO `devis`(`nomSociete`,`nomDemandeur`,`mail`,`telephone`,`adresse`,`codePostal`,`ville`,`service`,`message`) VALUES ('HEI','Surmont Maxime','max.s@gmail.com', '0614348499', '13 Rue de Toul','59000','Lille', 'Compta', 'Message de Test 2')");
		}
	}
	
	@Test
	public void shouldSaveDevis() throws Exception {
		// GIVEN
		Devis devisToAdd = new Devis("LuxeC","Nom","nom@gmail.com", "0344436328", "6 rue de la manche","76370","Belleville","Assurance","Message de Test 3");
		// WHEN
		Devis devisAdded = devisDao.saveDevis(devisToAdd);
		// THEN
		Assertions.assertThat(devisAdded).isNotNull();
		Assertions.assertThat(devisAdded.getNomSociete()).isEqualTo("LuxeC");
		
		try (Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("SELECT * FROM devis WHERE nomSociete = ?")) {
			stmt.setString(1,devisAdded.getNomSociete());
			try (ResultSet rs = stmt.executeQuery()) {
				assertThat(rs.next()).isTrue();
				assertThat(rs.getString("nomDemandeur")).isEqualTo("Nom");
			}
		}
	}
}
