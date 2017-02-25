package projet.cadre.dao;

import java.sql.Connection;
import java.sql.Statement;
import java.util.HashMap;
import java.util.List;

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
	public void shouldListIdUtilisateur() {
		// WHEN
		List<Employe> employes = employeDao.listEmployes();
		// THEN
		Assertions.assertThat(employes).hasSize(1);
		Assertions.assertThat(employes).extracting("idEmploye", "nomEmploye","prenomEmploye").containsOnly(
		Assertions.tuple("chloe.pelletier","Pelletier","Chloe")
		);

	}

}
