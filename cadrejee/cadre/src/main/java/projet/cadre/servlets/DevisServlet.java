package projet.cadre.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.WebContext;
import org.thymeleaf.extras.java8time.dialect.Java8TimeDialect;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.ServletContextTemplateResolver;

import projet.cadre.managers.CadreLibrary;
import projet.cadre.model.Devis;

@WebServlet("/devis")
public class DevisServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		ServletContextTemplateResolver templateResolver = new ServletContextTemplateResolver(req.getServletContext());
		templateResolver.setTemplateMode(TemplateMode.HTML);
		templateResolver.setPrefix("/WEB-INF/templates/");
		templateResolver.setSuffix(".html");
		TemplateEngine templateEngine = new TemplateEngine();
		templateEngine.setTemplateResolver(templateResolver);
		templateEngine.addDialect(new Java8TimeDialect());	
		WebContext context = new WebContext(req, resp, req.getServletContext());

		templateEngine.process("page-devis", context, resp.getWriter());
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String nomSociete = req.getParameter("nomSociete");
		String nomDemandeur = req.getParameter("nomDemandeur"); 
		String mail = req.getParameter("mail"); 
		String telephone = req.getParameter("telephone"); 
		String adresse = req.getParameter("adresse");
		String codePostal = req.getParameter("codePostal"); 
		String ville = req.getParameter("ville"); 
		String service = req.getParameter("service");
		String message = req.getParameter("message");
		Devis devis= new Devis(nomSociete,nomDemandeur, mail, telephone, adresse, codePostal, ville, service,message);
		CadreLibrary.getInstance().saveDevis(devis);
		resp.sendRedirect("devis");
	}
}
