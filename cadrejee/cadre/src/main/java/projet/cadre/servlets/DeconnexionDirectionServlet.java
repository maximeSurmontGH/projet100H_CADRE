package projet.cadre.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/deconnexionDirection")
public class DeconnexionDirectionServlet extends HttpServlet {
	

	private static final long serialVersionUID = 790144859160282054L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getSession().removeAttribute("directeurConnecte");
		response.sendRedirect("connexionIntranetDirection");
	}


}
