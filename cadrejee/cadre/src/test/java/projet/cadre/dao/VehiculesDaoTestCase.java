package projet.cadre.dao;

import java.sql.Connection;
import java.sql.Statement;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

import projet.cadre.model.Conges;
import projet.cadre.model.DemandesConge;
import projet.cadre.model.DemandesVehicule;
import projet.cadre.model.Vehicules;

public class VehiculesDaoTestCase {
	private VehiculesDao vehiculeDao = new VehiculesDao();
	
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
			stmt.executeUpdate("INSERT INTO `vehicules`(`immatriculation`,`typeVehicule`,`disponibilite`) VALUES ('ddd22k','Vehicule1','T')");
			stmt.executeUpdate("INSERT INTO `vehicules`(`immatriculation`,`typeVehicule`,`disponibilite`) VALUES ('ddxez2k','Vehicule1','F')");
			stmt.executeUpdate("INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('chloe.pelletier','Pelletier', 'Chloe', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','stagiaire','0614348499','chlo@g.com')");
			stmt.executeUpdate("INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('c.p','Pelletier', 'Chloe', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','stagiaire','0614348499','chlo@g.com')");
			stmt.executeUpdate("INSERT INTO `demandesvehicule`(`id`,`vehicules_immatriculation`,`employes_idEmploye`,`etat`,`dateDebut`,`dateFin`) VALUES (1,'ddd22k','chloe.pelletier','en cours','21022016','23022017')");
			stmt.executeUpdate("INSERT INTO `demandesvehicule`(`id`,`vehicules_immatriculation`,`employes_idEmploye`,`etat`,`dateDebut`,`dateFin`) VALUES (2,'ddd22k','chloe.pelletier','refus','21022016','23022017')");
		}
	}

	@Test
	public void shouldListIdVehicule() {
		// WHEN
		List<Vehicules> element = vehiculeDao.getIdVehicule();
		// THEN
		Assertions.assertThat(element).hasSize(2);
		Assertions.assertThat(element).extracting("immatriculation","typeVehicule").containsOnly(
			Assertions.tuple("ddd22k","Vehicule1"),
		Assertions.tuple("ddxez2k","Vehicule1"));
	}
	
	@Test
	public void shouldGetVehicules() {
		// WHEN
		List<DemandesVehicule> element = vehiculeDao.getDemandesDeVehicule();
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(0).getDateFin()).isEqualTo("23022017");
		Assertions.assertThat(element.get(0).getVehicules_immatriculation()).isEqualTo("ddd22k");
		Assertions.assertThat(element.get(0).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(0).getEtat()).isEqualTo("en cours");
		Assertions.assertThat(element.get(1).getEtat()).isEqualTo("refus");
	}
	
	@Test
	public void shouldGetVehiculeByIdEmploye() {
		// WHEN
		List<DemandesVehicule> element = vehiculeDao.getDemandesDeVehiculeByIdEmploye("chloe.pelletier");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(0).getDateFin()).isEqualTo("23022017");
		Assertions.assertThat(element.get(0).getVehicules_immatriculation()).isEqualTo("ddd22k");
		Assertions.assertThat(element.get(0).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(0).getEtat()).isEqualTo("en cours");
		Assertions.assertThat(element.get(1).getEtat()).isEqualTo("refus");
	}
	
	@Test
	public void shouldGetVehiculeByEtat() {
		// WHEN
		List<DemandesVehicule> element = vehiculeDao.getDemandesVehiculeByEtat("en cours");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(0).getDateFin()).isEqualTo("23022017");
		Assertions.assertThat(element.get(0).getVehicules_immatriculation()).isEqualTo("ddd22k");
		Assertions.assertThat(element.get(0).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(0).getEtat()).isEqualTo("en cours");
	}
	
	@Test
	public void shouldGetVehiculeFree() {
		// WHEN
		List<Vehicules> element = vehiculeDao.getVehiculesFree();
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(0).getImmatriculation()).isEqualTo("ddd22k");
		Assertions.assertThat(element.get(0).getTypeDeVehicule()).isEqualTo("Vehicule1");
	}
	
	@Test
	public void shouldSetDemandeVehicule() {
		// WHEN
		vehiculeDao.setDemandeDeVehicule("ddxez2k", "chloe.pelletier", "jjmmaaaa", "jjmmaaaa");
		List<DemandesVehicule> element = vehiculeDao.getDemandesDeVehiculeByIdEmploye("chloe.pelletier");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(2).getDateFin()).isEqualTo("jjmmaaaa");
		Assertions.assertThat(element.get(2).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(2).getEtat()).isEqualTo("attente");
	}
	
	@Test
	public void shouldChangeSate() {
		// WHEN
		vehiculeDao.setState(1, 1);
		List<DemandesVehicule> element = vehiculeDao.getDemandesDeVehiculeByIdEmploye("chloe.pelletier");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.get(0).getEmployes_idEmploye()).isEqualTo("chloe.pelletier");
		Assertions.assertThat(element.get(0).getEtat()).isEqualTo("valide");
		Assertions.assertThat(element.get(0).getDateFin()).isEqualTo("23022017");
	}
	
	@Test
	public void shouldGetVehicule() {
		// WHEN
		Vehicules element = vehiculeDao.getVehiculeByImmatriculation("ddd22k");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.getImmatriculation()).isEqualTo("ddd22k");
		Assertions.assertThat(element.getTypeDeVehicule()).isEqualTo("Vehicule1");
	}
	
	@Test
	public void shouldAddVehicule() {
		// WHEN
		vehiculeDao.addVehicule("sss", "Vehicule1");
		Vehicules element = vehiculeDao.getVehiculeByImmatriculation("sss");
		// THEN
		Assertions.assertThat(element).isNotNull();
		Assertions.assertThat(element.getImmatriculation()).isEqualTo("sss");
		Assertions.assertThat(element.getTypeDeVehicule()).isEqualTo("Vehicule1");
	}
	
	@Test
	public void shouldDeleteVehicule() {
		// WHEN
		vehiculeDao.deleteVehicule("ddd22k");
	}
}
