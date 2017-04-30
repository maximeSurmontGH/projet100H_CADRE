package projet.cadre.dao;

import java.sql.Connection;
import java.sql.Statement;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

import projet.cadre.model.Attestations;
import projet.cadre.model.DemandesAttestation;
import projet.cadre.model.ElementsSite;
import projet.cadre.model.Employe;

public class AttestationsDaoTestCase {
	
	private AttestationsDao attestationDao = new AttestationsDao();
	
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
			stmt.executeUpdate("INSERT INTO `attestations`(`idAttestation`,`typeAttestation`) VALUES (1,'Att1')");
			stmt.executeUpdate("INSERT INTO `attestations`(`idAttestation`,`typeAttestation`) VALUES (2,'Att2')");
			stmt.executeUpdate("INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('chloe.pelletier','Pelletier', 'Chloe', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','stagiaire','0614348499','chlo@g.com')");
			stmt.executeUpdate("INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('c.p','Pelletier', 'Chloe', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','stagiaire','0614348499','chlo@g.com')");
			stmt.executeUpdate("INSERT INTO `demandesattestation`(`id`,`attestations_idAttestation`,`employes_idEmploye`,`etat`,`date`) VALUES (1,1,'chloe.pelletier','en cours','23022017')");
			stmt.executeUpdate("INSERT INTO `demandesattestation` (`id`,`attestations_idAttestation`,`employes_idEmploye`,`etat`,`date`) VALUES (2,2,'chloe.pelletier','refuse','23022016')");
		}
	}
	
	@Test
	public void shouldGetAttestation() {
		// WHEN
		List<DemandesAttestation> element = attestationDao.getDemandesAttestation();
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(0).getDate()).isEqualTo("23022017");
		Assertions.assertThat(element.get(0).getAttestations_idAttestation()).isEqualTo(1);
		Assertions.assertThat(element.get(0).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(0).getEtat()).isEqualTo("en cours");
		Assertions.assertThat(element.get(1).getEtat()).isEqualTo("refuse");
	}
	
	@Test
	public void shouldListIdAttestation() {
		// WHEN
		List<Attestations> element = attestationDao.getIdAttestation();
		// THEN
		Assertions.assertThat(element).hasSize(2);
		Assertions.assertThat(element).extracting("idAttestation","typeAttestation").containsOnly(
		Assertions.tuple(1,"Att1"),
		Assertions.tuple(2,"Att2"));
	}
	
	@Test
	public void shouldGetAttestationByIdEmploye() {
		// WHEN
		List<DemandesAttestation> element = attestationDao.getDemandesAttestationeByidEmploye("chloe.pelletier");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(0).getDate()).isEqualTo("23022017");
		Assertions.assertThat(element.get(0).getAttestations_idAttestation()).isEqualTo(1);
		Assertions.assertThat(element.get(0).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(0).getEtat()).isEqualTo("en cours");
		Assertions.assertThat(element.get(1).getEtat()).isEqualTo("refuse");
	}
	
	@Test
	public void shouldGetAttestationParEtat() {
		// WHEN
		List<DemandesAttestation> element = attestationDao.getDemandesAttestationByEtat("en cours");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(0).getDate()).isEqualTo("23022017");
		Assertions.assertThat(element.get(0).getAttestations_idAttestation()).isEqualTo(1);
		Assertions.assertThat(element.get(0).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(0).getEtat()).isEqualTo("en cours");
	}

	@Test
	public void shouldSetAttestation() {
		// WHEN
		attestationDao.setDemandeAttestation(1, "chloe.pelletier", "01012000");
		List<DemandesAttestation> element = attestationDao.getDemandesAttestationeByidEmploye("chloe.pelletier");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(2).getDate()).isEqualTo("01012000");
		Assertions.assertThat(element.get(2).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(2).getEtat()).isEqualTo("attente");
	}
	
	@Test
	public void shouldChangeSate() {
		// WHEN
		attestationDao.setState(1, 1);
		List<DemandesAttestation> element = attestationDao.getDemandesAttestationeByidEmploye("chloe.pelletier");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(0).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(0).getEtat()).isEqualTo("valide");
	}
}
