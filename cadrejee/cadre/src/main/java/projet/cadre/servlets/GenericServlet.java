package projet.cadre.servlets;

import javax.servlet.http.HttpServletRequest;

import projet.cadre.model.Employe;

public class GenericServlet {
	
	protected Employe getUtilisateurCourant(HttpServletRequest request) {
		return (Employe) request.getSession().getAttribute("employeConnecte");
	}

}
