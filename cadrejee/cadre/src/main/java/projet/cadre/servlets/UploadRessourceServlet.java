package projet.cadre.servlets;


import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import projet.cadre.managers.CadreLibrary;
import projet.cadre.model.Ressource;
import projet.cadre.services.CadreServices;

@WebServlet("/direction/UploadRessourceServlet")
public class UploadRessourceServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private ServletFileUpload uploader = null;
	@Override
	public void init() throws ServletException{
		DiskFileItemFactory fileFactory = new DiskFileItemFactory();
		File filesDir = (File) getServletContext().getAttribute("FILES_DIR_FILE");
		fileFactory.setRepository(filesDir);
		this.uploader = new ServletFileUpload(fileFactory);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if(!ServletFileUpload.isMultipartContent(request)){
			throw new ServletException("Content type is not multipart/form-data");
		}
		
		response.setContentType("text/html");
		String corps = request.getParameter("corps");
		if (corps == null){
			corps = "non precise";
		}
		try {
			List<FileItem> fileItemsList = uploader.parseRequest(request);
			Iterator<FileItem> fileItemsIterator = fileItemsList.iterator();
			while(fileItemsIterator.hasNext()){
				FileItem fileItem = fileItemsIterator.next(); 
				FileItem fileItem2 = fileItemsIterator.next(); 
				System.out.println(fileItem.getFieldName()+" "+fileItem2.getFieldName());

				System.out.println("FieldName="+fileItem2.getFieldName());
				System.out.println("FileName="+fileItem2.getName());
				System.out.println("ContentType="+fileItem2.getContentType());
				System.out.println("Size in bytes="+fileItem2.getSize());
					
				String name = fileItem2.getName();
				String name2 = "";
				for(char c : name.toCharArray()){
					name2+=c;
					if (c == '\\'){
						name2 = "";
					}
				}
				System.out.println(name2);
				File file = new File(request.getServletContext().getAttribute("FILES_DIR")+File.separator+name2);
				System.out.println("Absolute Path at server="+file.getAbsolutePath());
				fileItem2.write(file);
					
					
				Ressource ressource = new Ressource(name2, corps, name2);
				CadreServices cadreServices = CadreServices.getInstance();
				cadreServices.saveRessource(ressource);				
				response.sendRedirect("ressources");
			}
		} catch (FileUploadException e) {
			System.out.println("Pb dans l upload");
		} catch (Exception e) {
			System.out.println("Pb dans l upload");
		}
	}

}