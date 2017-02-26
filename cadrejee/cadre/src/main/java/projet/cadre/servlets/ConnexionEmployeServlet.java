package projet.cadre.servlets;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import projet.cadre.dao.EmployeDao;
import projet.cadre.util.MotDePasseUtils;

@WebServlet("/connexionIntranetEmploye")
public class ConnexionEmployeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Map<String,String> employesAutorises;
	
	@Override
	public void init() throws ServletException {
		EmployeDao employes = new EmployeDao();
		employesAutorises=employes.hashIdMdp();
						
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		init();
		String employeConnecte = (String) request.getSession().getAttribute("employeConnecte");
		if (employeConnecte == null || "".equals( employeConnecte)) {
			RequestDispatcher view = request.getRequestDispatcher("WEB-INF/templates/connexionIntranetEmploye.html");
			view.forward(request, response);
			
		} else {
			response.sendRedirect("employes/menu");
		}
	
	}
	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String identifiantSaisi = request.getParameter("inputUser");
		String motDePasseSaisi = request.getParameter("inputPassword");
		try {
			if(employesAutorises.containsKey(identifiantSaisi) && MotDePasseUtils.validerMotDePasse(motDePasseSaisi, employesAutorises.get(identifiantSaisi)))
			{
				request.getSession().setAttribute("employeConnecte",identifiantSaisi);
			}
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvalidKeySpecException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			response.sendRedirect("connexionIntranetEmploye");
	}

}
