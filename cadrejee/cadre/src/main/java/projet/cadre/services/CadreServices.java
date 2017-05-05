package projet.cadre.services;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;

import projet.cadre.dao.AttestationsDao;
import projet.cadre.dao.CongesDao;
import projet.cadre.dao.ContactDao;
import projet.cadre.dao.DevisDao;
import projet.cadre.dao.ElementsSiteDao;
import projet.cadre.dao.EmployeDao;
import projet.cadre.dao.EvenementAutreDao;
import projet.cadre.dao.RappelDao;
import projet.cadre.dao.RessourceDao;
import projet.cadre.dao.ValiditesDao;
import projet.cadre.dao.VehiculesDao;
import projet.cadre.model.Attestations;
import projet.cadre.model.Conges;
import projet.cadre.model.Contact;
import projet.cadre.model.DemandesAttestation;
import projet.cadre.model.DemandesConge;
import projet.cadre.model.DemandesValidite;
import projet.cadre.model.DemandesVehicule;
import projet.cadre.model.Devis;
import projet.cadre.model.ElementsSite;
import projet.cadre.model.Employe;
import projet.cadre.model.EvenementAutre;
import projet.cadre.model.Rappel;
import projet.cadre.model.Ressource;
import projet.cadre.model.Validites;
import projet.cadre.model.Vehicules;

public class CadreServices {
	
	private static CadreServices instance;

	public static CadreServices getInstance() {
		if (instance == null) {
			instance = new CadreServices();
		}
		return instance;
	}
	
	private AttestationsDao attestationsDao = new AttestationsDao();
	private CongesDao congesDao = new CongesDao();
	private ContactDao contactDao = new ContactDao();
	private DevisDao devisDao = new DevisDao();
	private ElementsSiteDao elementsSiteDao = new ElementsSiteDao();
	private EmployeDao employeDao = new EmployeDao();
	private EvenementAutreDao evenementAutreDao= new EvenementAutreDao();
	private RappelDao rappelDao = new RappelDao();
	private RessourceDao ressourceDao = new RessourceDao();
	private ValiditesDao validitesDao = new ValiditesDao();
	private VehiculesDao vehiculesDao = new VehiculesDao(); 
	
	// AttestationsDao 
	public List<Attestations> getIdAttestation(){
		return attestationsDao.getIdAttestation();
	}
	
	public List<DemandesAttestation> getDemandesAttestation(){
		return attestationsDao.getDemandesAttestation();
	}

	public List<DemandesAttestation> getDemandesAttestationeByidEmploye(String id){
		return attestationsDao.getDemandesAttestationeByidEmploye(id);
	}
	
	public List<DemandesAttestation> getDemandesAttestationByEtat(String etat){
		return attestationsDao.getDemandesAttestationByEtat(etat);
	}
	
	public void setDemandeAttestation(int idAttestation, String idEmploye, String date){
		attestationsDao.setDemandeAttestation(idAttestation, idEmploye, date);
	}
	public void setStateAttestation (int idDemandeAttestation, int nb){
		attestationsDao.setState(idDemandeAttestation, nb);
	}
	public void deleteDemandeAttestation (String idEmploye){
		attestationsDao.deleteDemandeAttestation(idEmploye);
	}
	
	// Conges Dao
	
	public List<Conges> getIdConge(){
		return congesDao.getIdConge();
	}
	public List<DemandesConge> getDemandesDeConge(){
		return congesDao.getDemandesDeConge();
	}
	
	public List<DemandesConge> getDemandesDeCongeByIdEmploye(String id){
		return congesDao.getDemandesDeCongeByIdEmploye(id);
	}
	
	public List<DemandesConge> getDemandesDeCongeByType(String type){
		return congesDao.getDemandesDeCongeByType(type);
	}
	
	public void setDemandeDeConge(int idConge, String idEmploye, String dateDebut, String dateFin){
		congesDao.setDemandeDeConge(idConge, idEmploye, dateDebut, dateFin);
	}
	
	public void setStateConge(int id, int nb){
		congesDao.setState(id, nb);
	}
	
	public int compteurDeConges(int idConge, String idEmploye){
		return congesDao.compteurDeConges(idConge, idEmploye);
	}
	public void deleteDemandeConge (String idEmploye){
		congesDao.deleteDemandeConge(idEmploye);
	}
	
	// Contact DAO
	public Contact saveContact(Contact contact){
		return contactDao.saveContact(contact);
	}
	
	// Devis DAO 
	public Devis saveDevis(Devis devis){
		return devisDao.saveDevis(devis);
	}
	
	public List<Devis> listDevis(){
		return devisDao.ListDevis();
	}
	
	public void deleteDevis(int id){
		devisDao.deleteDevis(id);
	}
	
	// ElementsSite Dao
	public void modifierElementTexte(String idElement, String contenuElement) {
		elementsSiteDao.modifierElementTexte(idElement, contenuElement);
	}
	
	public void modifierElementImage(String idElement, String contenuElement, String cheminElement) {
		elementsSiteDao.modifierElementImage(idElement, contenuElement, cheminElement);
	}
	
	public ElementsSite getElementById(String id) {
		return elementsSiteDao.getElementById(id) ;
	}

	// Employe DAO 
	public HashMap<String,String> hashIdMdp(){
		return employeDao.hashIdMdp();
	}
	
	public Employe getEmployeById(String idEmploye) {
		return employeDao.getEmployeById(idEmploye);
	}
	
	public List<Employe> listEmployes() {
		return employeDao.listEmployes();
	}
	
	public void saveEmploye(String nomEmploye, String prenomEmploye, String telephone, String poste, String email) {
		employeDao.saveEmploye(nomEmploye,prenomEmploye,telephone,poste,email);
	}
	
	public void deleteEmploye(String employe){
		employeDao.deleteEmploye(employe);
	}
	
	public List<Employe> listEmployesPosteNom(String champs) {
		return employeDao.listEmployesPosteNom(champs);
	}
		
	public void modifierMDP(String idEmploye, String motDePasse) {
		employeDao.modifierMDP(idEmploye, motDePasse);	
	}

	// Evenement Autre Dao 
	public EvenementAutre saveEvenementAutre(EvenementAutre event) {
		return evenementAutreDao.saveEvenementAutre(event);
	}

	public void deleteEvenement(EvenementAutre evenement){
		evenementAutreDao.deleteEvenement(evenement);
	}

	public EvenementAutre getevenementById(int idevenement ) {
		return evenementAutreDao.getEvenementById(idevenement);
	}

	// Rappel Dao
	public void saveRappel(String DateRappel, String MessageRappel, String idEmploye, int imprt) {
		rappelDao.saveRappel(DateRappel, MessageRappel, idEmploye, imprt);
	}
	
	public void deleteRappel(int idRappel){
		rappelDao.deleteRappel(idRappel);
	}
	
	public Rappel getRappelById(int idRappel ) {
		return rappelDao.getRappelById(idRappel);
	}
	
	public List<Rappel> getRappelsByIdEmploye(String id){
		return rappelDao.getRappelsByIdEmploye(id);
	}
	
	public List<Rappel> getRappels(){
		return rappelDao.getRappels();
	}
	public void deleteRappel (String idEmploye){
		rappelDao.deleteRappel(idEmploye);
	}
	
	// Ressource Dao
	public  Ressource getRessourceById(int id) {
		return ressourceDao.getRessourceById(id);
	}
	
	public  List<Ressource> getRessource() {
		return ressourceDao.listRessource();
	}
	
	public List<Ressource> listRessourceByPosteNom(String champs) {
		return ressourceDao.listRessourceByPosteNom(champs);
	}
		
	public Ressource saveRessource(Ressource ressource) {
		return ressourceDao.saveRessource(ressource);
	}
	
	public void deleteRessource(int id){
		ressourceDao.deleteRessource(id);
	}
	
	// Validites Dao
	
	public List<Validites> getIdValidite(){
		return validitesDao.getIdvalidite();
	}
	public List<DemandesValidite> getDemandesValidite(){
		return validitesDao.getDemandesValidite();
	}
	
	public List<DemandesValidite> getDemandesDeValiditeByidEmploye(String id){
		return validitesDao.getDemandesDeValiditeByidEmploye(id);
	}
	
	public List<DemandesValidite> getDemandesDeValiditeByType(String type){
		return validitesDao.getDemandesDeValiditeByType(type);
	}
	
	public void setDemandeDeValidite(int idValidite, String idEmploye, String dateDebut, String dateFin){
		validitesDao.setDemandeDeValidite(idValidite, idEmploye, dateDebut, dateFin);
	}
	
	public void setStateValidite (int id, int nb){
		validitesDao.setState(id, nb);
	}

	public void deleteDemandeValidite (String idEmploye){
		validitesDao.deleteDemandeValidite(idEmploye);
	}
	// Vehicules Dao
	
	public List<Vehicules> getIdVehicule(){
		return vehiculesDao.getIdVehicule();
	}
	
	public Vehicules addVehicule(String immatriculation, String typeVehicule){
		return vehiculesDao.addVehicule(immatriculation, typeVehicule);
	}
	
	public void deleteVehicule(String immatriculation){
		vehiculesDao.deleteVehicule(immatriculation);
	}

	public List<DemandesVehicule> getDemandesDeVehicule(){
		return vehiculesDao.getDemandesDeVehicule();
	}
	
	public List<DemandesVehicule> getDemandesDeVehiculeByIdEmploye(String id){
		return vehiculesDao.getDemandesDeVehiculeByIdEmploye(id);
	}
	
	public List<DemandesVehicule> getDemandesVehiculeByEtat(String etat){
		return vehiculesDao.getDemandesVehiculeByEtat(etat);
	}
	
	public List<Vehicules> getVehiculesFree(){
		return vehiculesDao.getVehiculesFree();
	}
	
	public Vehicules getVehiculeByImmatriculation(String imma){
		return vehiculesDao.getVehiculeByImmatriculation(imma);
	}
	
	public void setDemandeDeVehicule (String immatriculation, String idEmploye, String dateDebut, String dateFin){
		vehiculesDao.setDemandeDeVehicule(immatriculation, idEmploye, dateDebut, dateFin);
	}
	
	public void setStateVehicule(int id, int nb){
		vehiculesDao.setState(id, nb);
	}
	public void deleteDemandeVehicule (String idEmploye){
		vehiculesDao.deleteDemandeVehicule(idEmploye);
	}
}
