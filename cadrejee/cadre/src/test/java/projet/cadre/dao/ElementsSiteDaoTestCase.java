package projet.cadre.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import static org.assertj.core.api.Assertions.assertThat;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

import projet.cadre.model.ElementsSite;

public class ElementsSiteDaoTestCase {
	private ElementsSiteDao elementDao = new ElementsSiteDao();
	
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
			stmt.executeUpdate("INSERT INTO `elementssite`(`idElement`,`contenuElement`,`cheminElement`) VALUES ('id1','BLABLA1', 'CHEMIN1')");
			stmt.executeUpdate("INSERT INTO `elementssite`(`idElement`,`contenuElement`,`cheminElement`) VALUES ('id2','BLABLA2', 'CHEMIN2')");
		}
	}
	
	
	@Test
	public void shouldGetEmployeById() {
		// WHEN
		ElementsSite element = elementDao.getElementById("id1");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.getCheminElement()).isEqualTo("CHEMIN1");
		Assertions.assertThat(element.getContenuElement()).isEqualTo("BLABLA1");
	}
	
	
	@Test
	public void shouldModifiertxt() throws Exception {
		// WHEN
		elementDao.modifierElementTexte("id1", "Blablachangé");
		// THEN
		try (Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("SELECT * FROM elementssite WHERE idElement = ?")) {
			stmt.setString(1, "id1");
			try (ResultSet rs = stmt.executeQuery()) {
				assertThat(rs.next()).isTrue();
				assertThat(rs.getString("idElement")).isEqualTo("id1");
				assertThat(rs.getString("contenuElement")).isEqualTo("Blablachangé");
			}
		}
	}

	@Test
	public void shouldModifierim() throws Exception {
		// WHEN
		elementDao.modifierElementImage("id2", "Blablachangé2","che2");
		// THEN
		try (Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("SELECT * FROM elementssite WHERE idElement = ?")) {
			stmt.setString(1, "id2");
			try (ResultSet rs = stmt.executeQuery()) {
				assertThat(rs.next()).isTrue();
				assertThat(rs.getString("idElement")).isEqualTo("id2");
				assertThat(rs.getString("contenuElement")).isEqualTo("Blablachangé2");
				assertThat(rs.getString("cheminElement")).isEqualTo("che2");
			}
		}	
	}
}
