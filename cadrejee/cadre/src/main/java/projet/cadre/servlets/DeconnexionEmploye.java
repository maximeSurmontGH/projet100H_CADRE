package projet.cadre.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/deconnexionEmploye")
public class DeconnexionEmploye extends HttpServlet {
	
	private static final long serialVersionUID = 790144859160282054L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getSession().removeAttribute("employeConnecte");
		response.sendRedirect("connexionIntranetEmploye");
	}


}
