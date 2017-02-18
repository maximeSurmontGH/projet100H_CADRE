package projet.cadre.managers;

import projet.cadre.dao.DevisDao;
import projet.cadre.model.Devis;

public class CadreLibrary {
	
	private static class CadreLibraryHolder {
		private final static CadreLibrary instance = new CadreLibrary();
	}
	
	public static CadreLibrary getInstance() {
		return CadreLibraryHolder.instance;
	}
	
	private DevisDao devisDao = new DevisDao();
	
	private CadreLibrary() {
	}
	
	//Ajouter un devis à notre bdd 
	
	public void saveDevis(Devis devis ){
		devisDao.saveDevis(devis);
		
	}
	
	

}
