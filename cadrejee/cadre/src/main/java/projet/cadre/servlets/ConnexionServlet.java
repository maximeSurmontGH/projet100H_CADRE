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

import projet.cadre.util.MotDePasseUtils;


@WebServlet("/connexionIntranet")
public class ConnexionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Map<String,String> utilisateursAutorises;
	
	@Override
	public void init() throws ServletException {
		utilisateursAutorises=new HashMap<>();
		utilisateursAutorises.put("direction", "af04f0ed7d34f427c70d6b8bfd2c08a6d2c3e36b6fc80298:a043e4bed45f1ee900f6b60f163f843ed746ebbea4ed286b");
				
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String identifiantConnecte = (String) request.getSession().getAttribute("utilisateurConnecte");
		if (identifiantConnecte == null || "".equals(identifiantConnecte)) {
			RequestDispatcher view = request.getRequestDispatcher("WEB-INF/templates/connexionIntranet.html");
			view.forward(request, response);
			
		} else {
			response.sendRedirect("direction/menu");
		}
	
	}
	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String identifiantSaisi = request.getParameter("inputUser");
		String motDePasseSaisi = request.getParameter("inputPassword");
		try {
			if(utilisateursAutorises.containsKey(identifiantSaisi) && MotDePasseUtils.validerMotDePasse(motDePasseSaisi, utilisateursAutorises.get(identifiantSaisi)))
			{
				request.getSession().setAttribute("utilisateurConnecte",identifiantSaisi);
			}
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvalidKeySpecException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			response.sendRedirect("connexionIntranet");
	}

}
