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

package javaaxp.swingviewer.service.impl;

import java.io.File;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.IXPSService;
import javaaxp.core.service.XPSError;
import javaaxp.swingviewer.ISwingViewerService;
import javaaxp.swingviewer.IXPSPageViewer;
import javaaxp.swingviewer.PageController;

public class SwingViewerServiceImpl implements ISwingViewerService {

	private IXPSService fXPSAccess;

	public SwingViewerServiceImpl(IXPSService xpsAccessService) {
		fXPSAccess = xpsAccessService;
	}
	
	@Override
	public IXPSPageViewer createPageViewer(PageController controller) throws XPSError {
		XPSPageViewer viewer =  new XPSPageViewer(controller);
		return viewer;
	}

	@Override
	public PageController createPageController(File f) throws XPSError {
		return createPageController(fXPSAccess.getXPSAccess(f));	
	}
	
	@Override
	public PageController createPageController(IXPSAccess xpsAccess) throws XPSError {
		return new PageController(xpsAccess);	
	}


}
