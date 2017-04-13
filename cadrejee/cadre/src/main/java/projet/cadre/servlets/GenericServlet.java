package projet.cadre.servlets;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

import projet.cadre.model.Employe;

public class GenericServlet extends HttpServlet {
	
	protected String getUtilisateurCourant(HttpServletRequest request) {
		return (String) request.getSession().getAttribute("employeConnecte");
	}
}