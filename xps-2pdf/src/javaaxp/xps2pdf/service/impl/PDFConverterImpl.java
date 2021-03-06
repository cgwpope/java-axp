/*
 * java-axp XPS utility
 * Copyright (C) 2007-2008 Chris Pope
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

package javaaxp.xps2pdf.service.impl;

import java.awt.Graphics;
import java.io.File;
import java.io.InputStream;
import java.io.OutputStream;

import javaaxp.core.service.XPSError;
import javaaxp.swingviewer.ISwingViewerService;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;
import javaaxp.xps2pdf.service.IXPSToPDFConverter;

import javax.swing.JComponent;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.PageSize;
import com.lowagie.text.pdf.PdfContentByte;
import com.lowagie.text.pdf.PdfTemplate;
import com.lowagie.text.pdf.PdfWriter;

public class PDFConverterImpl implements IXPSToPDFConverter{

	private PageController fPageController;
	private IXPSPageViewer fPageViewer;

	public PDFConverterImpl(ISwingViewerService swingViewerService, File inputFile) throws XPSError {
		fPageController = swingViewerService.createPageController(inputFile);
		fPageViewer = swingViewerService.createPageViewer(fPageController);
	}
	

	public PDFConverterImpl(IXPSPageViewer viewer, PageController controller) {
		fPageController = controller;
		fPageViewer = viewer;
	}


	@Override
	public void appendToPDF(InputStream existingPDF, OutputStream output) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void covertToPDF(OutputStream ouput) throws XPSError {
		try {
			int firstPage = fPageController.getXPSAccess().getPageAccess(0).getFirstPageNum();
			int lastPage = fPageController.getXPSAccess().getPageAccess(0).getLastPageNum();

			Document document = new Document();
			document.setPageCount(lastPage - firstPage + 1);
			document.setPageSize(PageSize.LETTER);
			PdfWriter writer = PdfWriter.getInstance(document, ouput);
			document.open();
			PdfContentByte cb = writer.getDirectContent();
			for(int i = firstPage; i < 1; i++){
				System.out.println("Converting page " + i);
				fPageController.setPage(i);
				PdfTemplate tp = cb.createTemplate((float)fPageController.getPage().getWidth(), (float)fPageController.getPage().getHeight());
				Graphics g = tp.createGraphics((float)fPageController.getPage().getWidth(), (float)fPageController.getPage().getHeight());
				JComponent toReturn = fPageViewer.getPageRenderer().getRendererComponent();
				toReturn.paint(g);
				cb.addTemplate(tp, 0, 0);
				document.newPage();
			}
			document.close();
		} catch (DocumentException e) {
			//rethrow
		}
	}
}
