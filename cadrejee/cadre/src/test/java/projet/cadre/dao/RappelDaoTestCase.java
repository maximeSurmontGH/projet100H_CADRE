package projet.cadre.dao;

import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

import projet.cadre.model.Employe;
import projet.cadre.model.Rappel;
import projet.cadre.model.Ressource;

public class RappelDaoTestCase {
	private RappelDao rappelDao = new RappelDao();
	
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
			stmt.executeUpdate("INSERT INTO `rappels`(`idRappel`,`dateRappel`,`messageRappel`,`employes_idEmploye`,`importance`) VALUES (1,'2017-01-23','blabla','chloe.pelletier',1)");
			stmt.executeUpdate("INSERT INTO `rappels`(`idRappel`,`dateRappel`,`messageRappel`,`employes_idEmploye`,`importance`) VALUES (2,'2017-01-04','blabla3','chloe.pelletier',3)");		
		}
	}
	
	@Test
	public void shouldSaveRappel() throws Exception {
		// GIVEN
				Rappel rappeltoSave = new Rappel(4,"10122019","blablatest","chloe.pelletier",2);
				// WHEN
				rappelDao.saveRappel("10122019","blablatest","chloe.pelletier",2);
		// THEN
		try (Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("SELECT * FROM rappels WHERE messageRappel = ?")) {
			stmt.setString(1,"blablatest");
			try (ResultSet rs = stmt.executeQuery()) {
				assertThat(rs.next()).isTrue();
				assertThat(rs.getString("dateRappel")).isEqualTo("10122019");
			}
		}
	}

	@Test
	public void shouldDeleteRappel() throws Exception {
		Rappel rappel= rappelDao.getRappelById(1);
		// WHEN
		rappelDao.deleteRappel(rappel.getIdRappel());
		// THEN
		try (
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM rappels WHERE idRappel = ?")) {
			stmt.setInt(1, 1);
			try (ResultSet rs = stmt.executeQuery()) {
				assertThat(rs.next()).isFalse();		
			}
		}
	}

	@Test
	public void shouldGetRappelById() {
		// WHEN
		Rappel rappel = rappelDao.getRappelById(2);
		// THEN
		Assertions.assertThat(rappel).isNotNull();
		Assertions.assertThat(rappel.getIdRappel()).isEqualTo(2);
		Assertions.assertThat(rappel.getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
	}
}
