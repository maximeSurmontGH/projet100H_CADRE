package projet.cadre.dao;

import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;
import projet.cadre.model.Ressource;


public class RessourceDaoTestCase {
	private RessourceDao ressourcedao = new RessourceDao();

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
			stmt.executeUpdate("INSERT INTO `ressources`(`idRessource`,`contenuRessource`,`corpsDeMetier`,`cheminRessource`) VALUES (1,'bb1','cm1','c1')");
			stmt.executeUpdate("INSERT INTO `ressources`(`idRessource`,`contenuRessource`,`corpsDeMetier`,`cheminRessource`) VALUES (2,'bb2','cm2','c2')");
		}
	}
	
	@Test
	public void shouldGetRessourceById() {
		// WHEN
		Ressource ressource = ressourcedao.getRessourceById(1);
		// THEN
		Assertions.assertThat(ressource).isNotNull();
		Assertions.assertThat(ressource.getCheminRessource()).isEqualTo("c1");
		Assertions.assertThat(ressource.getCorpsDeMetier()).isEqualTo("cm1");
		Assertions.assertThat(ressource.getContenuRessource()).isEqualTo("bb1");
	}
	
	@Test
	public void shouldListRessourceByPosteNom() {
		// WHEN
		List<Ressource> ressources = ressourcedao.listRessourceByPosteNom("cm1");
		// THEN
		Assertions.assertThat(ressources).hasSize(1);
		Assertions.assertThat(ressources).extracting("cheminRessource", "contenuRessource","corpsDeMetier").containsOnly(
		Assertions.tuple("c1","bb1","cm1")
		);
	}
	
	@Test
	public void shouldSaveRessource() throws Exception {
		// GIVEN
				Ressource ressourcetoSave = new Ressource(3,"testbb","testcm","testc");
				// WHEN
				Ressource ressourceAdded = ressourcedao.saveRessource(ressourcetoSave);
		// THEN
		Assertions.assertThat(ressourceAdded).isNotNull();		
		try (Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("SELECT * FROM ressources WHERE contenuRessource = ?")) {
			stmt.setString(1,ressourceAdded.getContenuRessource());
			try (ResultSet rs = stmt.executeQuery()) {
				assertThat(rs.next()).isTrue();
				assertThat(rs.getString("contenuRessource")).isEqualTo("testbb");
				assertThat(rs.getString("cheminRessource")).isEqualTo("testc");
				assertThat(rs.getString("corpsDeMetier")).isEqualTo("testcm");
			}
		}
	}
	
	@Test
	public void shouldDeleteRessource() throws Exception {
		// WHEN
		ressourcedao.deleteRessource(2);
		// THEN
		try (
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM ressources WHERE idRessource = ? ")) {
			stmt.setInt(1,2);
			try (ResultSet rs = stmt.executeQuery()) {
				assertThat(rs.next()).isFalse();
				
			}
		}	
	}
}
