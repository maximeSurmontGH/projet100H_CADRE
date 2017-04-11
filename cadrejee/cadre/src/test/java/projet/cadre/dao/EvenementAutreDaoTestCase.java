package projet.cadre.dao;

import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

import projet.cadre.model.EvenementAutre;


public class EvenementAutreDaoTestCase {
	private EvenementAutreDao eventDao = new EvenementAutreDao();
	
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
			stmt.executeUpdate("INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('chloe.pelletier','Pelletier', 'Chloe', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','stagiaire','0614348499','chlo@g.com')");
			stmt.executeUpdate("INSERT INTO `evenementsautres`(`idEvenement`,`dateEvenement`,`messageEvenement`,`employes_idEmploye`) VALUES (1,'2017-01-23','blabla','chloe.pelletier')");
			stmt.executeUpdate("INSERT INTO `evenementsautres`(`idEvenement`,`dateEvenement`,`messageEvenement`,`employes_idEmploye`) VALUES (2,'2017-01-04','blabla3','chloe.pelletier')");
		}
	}
	
	@Test
	public void shouldSaveEvenement() throws Exception {
		// GIVEN
				EvenementAutre eventtoSave = new EvenementAutre(3,"10122019","blablatest","chloe.pelletier");
				// WHEN
				EvenementAutre eventadded = eventDao.saveEvenementAutre(eventtoSave);
		// THEN
		Assertions.assertThat(eventadded).isNotNull();		
		try (Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("SELECT * FROM evenementsautres WHERE idEvenement = ?")) {
			stmt.setInt(1,3);
			try (ResultSet rs = stmt.executeQuery()) {
				assertThat(rs.next()).isTrue();
				assertThat(rs.getString("dateEvenement")).isEqualTo("10122019");
			}
		}
	}
	
	@Test
	public void shouldDeleteevenement() throws Exception {
		EvenementAutre evenement= eventDao.getEvenementById(1);
		// WHEN
		eventDao.deleteEvenement(evenement);
		// THEN
		try (
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM evenementsautres WHERE idEvenement = ?")) {
			stmt.setInt(1, 1);
			try (ResultSet rs = stmt.executeQuery()) {
				assertThat(rs.next()).isFalse();		
			}
		}
	}
	
	@Test
	public void shouldGetevenementById() {
		// WHEN
		EvenementAutre evenement = eventDao.getEvenementById(2);
		// THEN
		Assertions.assertThat(evenement).isNotNull();
		Assertions.assertThat(evenement.getIdEvenement()).isEqualTo(2);
		Assertions.assertThat(evenement.getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
	}
}
