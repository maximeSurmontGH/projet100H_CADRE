package projet.cadre.servlets;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.filter.HTTPBasicAuthFilter;
import com.sun.jersey.core.util.MultivaluedMapImpl;
import com.sun.jersey.multipart.FormDataMultiPart;
import com.sun.jersey.multipart.file.FileDataBodyPart;

import java.io.File;
import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.MediaType;

@SuppressWarnings("serial")
@WebServlet(name = "mailgun", value = "/contact/send/email")
public class MailgunServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    String nomContact = req.getParameter("nomContact");
    String mailContact = req.getParameter("mailContact");
    String societeContact = req.getParameter("societeContact");
    String messageContact = req.getParameter("messageContact");
   
    SendSimpleMessage(nomContact, mailContact, societeContact, messageContact);
    resp.sendRedirect("../../contact");
  }

  public static ClientResponse SendSimpleMessage(String nomContact, String mailContact, String societeContact, String messageContact) {
	    Client client = Client.create();
	    client.addFilter(new HTTPBasicAuthFilter(
	        "api","key-3e089badc85b8db748f41462cbdcc380"));
	    WebResource webResource = client.resource(
	        "https://api.mailgun.net/v3/sandbox982f2cedfbb147fd8563532d6b1ac54c.mailgun.org/messages");
	    MultivaluedMapImpl formData = new MultivaluedMapImpl();
	    formData.add("from", "Contact via le Site Web <excited@sandbox982f2cedfbb147fd8563532d6b1ac54c.mailgun.org>");
	    formData.add("to", "sarl.cadre@wanadoo.fr");
	    formData.add("subject", "Mail de "+nomContact+" de "+societeContact);
	    formData.add("text", "Nom du contact : "+nomContact+"\nSociete du contact : "+societeContact+"\nMail du contact : "+mailContact+"\n\nMessage :\n"+messageContact);
	    return webResource.type(MediaType.APPLICATION_FORM_URLENCODED).
	        post(ClientResponse.class, formData);
	}
}
