package projet.cadre.dao;

import java.sql.Connection;
import java.sql.Statement;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

import projet.cadre.model.DemandesAttestation;
import projet.cadre.model.DemandesConge;

public class CongesDaoTestCase {
	private CongesDao congeDao = new CongesDao();
	
	@Before
	public void initDb() throws Exception {
		try (Connection connection = DataSourceProvider.getDataSource().getConnection();
			Statement stmt = connection.createStatement()) {
			stmt.executeUpdate("DELETE FROM demandesattestation");
			stmt.executeUpdate("DELETE FROM demandesconge");
			stmt.executeUpdate("DELETE FROM conges");
			stmt.executeUpdate("DELETE FROM employes");
			stmt.executeUpdate("INSERT INTO `conges`(`idConge`,`typeConge`) VALUES (1,'Conge1')");
			stmt.executeUpdate("INSERT INTO `conges`(`idConge`,`typeConge`) VALUES (2,'Conge2')");
			stmt.executeUpdate("INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('chloe.pelletier','Pelletier', 'Chloe', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','stagiaire','0614348499','chlo@g.com')");
			stmt.executeUpdate("INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('c.p','Pelletier', 'Chloe', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','stagiaire','0614348499','chlo@g.com')");
			stmt.executeUpdate("INSERT INTO `demandesconge`(`id`,`conges_idConge`,`employes_idEmploye`,`dateDebut`,`dateFin`,`etat`) VALUES (1,1,'chloe.pelletier','21022016','23022017','en cours')");
			stmt.executeUpdate("INSERT INTO `demandesconge`(`id`,`conges_idConge`,`employes_idEmploye`,`dateDebut`,`dateFin`,`etat`) VALUES (2,1,'chloe.pelletier','21022016','23022017','refus')");
		}
	}
	
	@Test
	public void shouldGetConge() {
		// WHEN
		List<DemandesConge> element = congeDao.getDemandesDeConge();
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(0).getDateFin()).isEqualTo("23022017");
		Assertions.assertThat(element.get(0).getConges_idConge()).isEqualTo(1);
		Assertions.assertThat(element.get(0).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(0).getEtat()).isEqualTo("en cours");
		Assertions.assertThat(element.get(1).getEtat()).isEqualTo("refus");
	}
	
	@Test
	public void shouldGetCongeByIdEmploye() {
		// WHEN
		List<DemandesConge> element = congeDao.getDemandesDeCongeByIdEmploye("chloe.pelletier");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(0).getDateFin()).isEqualTo("23022017");
		Assertions.assertThat(element.get(0).getConges_idConge()).isEqualTo(1);
		Assertions.assertThat(element.get(0).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(0).getEtat()).isEqualTo("en cours");
		Assertions.assertThat(element.get(1).getEtat()).isEqualTo("refus");
	}
	
	@Test
	public void shouldGetAttestationByType() {
		// WHEN
		List<DemandesConge> element = congeDao.getDemandesDeCongeByType("Conge1");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(0).getDateFin()).isEqualTo("23022017");
		Assertions.assertThat(element.get(0).getConges_idConge()).isEqualTo(1);
		Assertions.assertThat(element.get(0).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(0).getEtat()).isEqualTo("en cours");
	}
	
	@Test
	public void shouldSetDemandeConge() {
		// WHEN
		congeDao.setDemandeDeConge(1, "chloe.pelletier", "000000", "01012000");
		List<DemandesConge> element = congeDao.getDemandesDeCongeByIdEmploye("chloe.pelletier");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(1).getDateFin()).isEqualTo("01012000");
		Assertions.assertThat(element.get(1).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(1).getEtat()).isEqualTo("en cours");
	}
	/*
	@Test
	public void shouldChangeSate() {
		// WHEN
		congeDao.setState(1, 1);
		List<DemandesConge> element = congeDao.getDemandesDeCongeByIdEmploye("chloe.pelletier");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(2).getDateFin()).isEqualTo("01012000");
		Assertions.assertThat(element.get(2).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(2).getEtat()).isEqualTo("en cours");
	}
	
	@Test
	public void shouldGetCOmpteur() {
		// WHEN
		int element = congeDao.compteurDeConges(1, "chloe.pelletier");
		// THEN		Assertions.assertThat(element).isEqualTo(1);
	}*/
}
