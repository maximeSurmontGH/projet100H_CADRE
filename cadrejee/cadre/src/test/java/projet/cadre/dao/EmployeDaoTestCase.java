package projet.cadre.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.HashMap;
import java.util.List;
import static org.assertj.core.api.Assertions.assertThat;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

import projet.cadre.model.Employe;

public class EmployeDaoTestCase {
	
	private EmployeDao employeDao = new EmployeDao();

	@Before
	public void initDb() throws Exception {
		try (Connection connection = DataSourceProvider.getDataSource().getConnection();
			Statement stmt = connection.createStatement()) {
			stmt.executeUpdate("DELETE FROM employes");
			stmt.executeUpdate("INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('chloe.pelletier','Pelletier', 'Chloe', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','stagiaire','0614348499','chlo@g.com')");
		}
	}
	
	@Test
	public void shouldHashIdMdp() {
		// WHEN
		HashMap<String,String> employesOk = employeDao.hashIdMdp();
		// THEN
		Assertions.assertThat(employesOk).hasSize(1);
		Assertions.assertThat(employesOk.get("chloe.pelletier")).isEqualTo("93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a");
		
	}
	
	@Test
	public void shouldListIdEmploye() {
		// WHEN
		List<Employe> employes = employeDao.listEmployes();
		// THEN
		Assertions.assertThat(employes).hasSize(1);
		Assertions.assertThat(employes).extracting("idEmploye", "nomEmploye","prenomEmploye").containsOnly(
		Assertions.tuple("chloe.pelletier","Pelletier","Chloe")
		);

	}
	@Test
	public void shouldSaveEmploye() throws Exception {
		// GIVEN
				Employe employetoSave = new Employe("Surmont","Maxime","080383839","stagiaire","max.s@g.com");
				// WHEN
				Employe employeAdded = employeDao.saveEmploye(employetoSave);
		// THEN
		Assertions.assertThat(employeAdded).isNotNull();
		Assertions.assertThat(employeAdded.getIdEmploye()).isEqualTo("Maxime.Surmont");
		
		try (Connection connection = DataSourceProvider.getDataSource().getConnection();
				PreparedStatement stmt = connection.prepareStatement("SELECT * FROM employes WHERE idEmploye = ?")) {
			stmt.setString(1, employeAdded.getIdEmploye());
			try (ResultSet rs = stmt.executeQuery()) {
				assertThat(rs.next()).isTrue();
				assertThat(rs.getString("idEmploye")).isEqualTo("Maxime.Surmont");
			}
		}
		
	}
	

	@Test
	public void shouldGetEmployeById() {
		// WHEN
		Employe employe = employeDao.getEmployeById("chloe.pelletier");
		// THEN
		Assertions.assertThat(employe).isNotNull();
		Assertions.assertThat(employe.getIdEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(employe.getNomEmploye()).isEqualTo("Pelletier");
	}
	
	@Test
	public void shouldDeleteEmploye() throws Exception {
		// GIVEN
		Employe employe = employeDao.getEmployeById("chloe.pelletier");
		// WHEN
		employeDao.deleteEmploye(employe);
		// THEN
		try (
			Connection connection = DataSourceProvider.getDataSource().getConnection();
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM employes WHERE idEmploye = ?")) {
			stmt.setString(1, "chloe.pelletier");
			try (ResultSet rs = stmt.executeQuery()) {
				assertThat(rs.next()).isFalse();
				
			}
		}
		
	}

}
