//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.0.3-b01-fcs 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2006.10.23 at 11:22:55 PM EDT 
//


package xps.impl.document.jaxb;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;

import xps.api.model.document.page.IGradientStop;


/**
 * <p>Java class for CT_GradientStop complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="CT_GradientStop">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attGroup ref="{http://schemas.microsoft.com/xps/2005/06}AG_GradientStop"/>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CT_GradientStop")
public class CTGradientStop implements IGradientStop {

    @XmlAttribute(name = "Color", required = true)
    protected String color;
    @XmlAttribute(name = "Offset", required = true)
    protected double offset;

    /* (non-Javadoc)
	 * @see xps.impl.document.jaxb.IGradientStop#getColor()
	 */
    public String getColor() {
        return color;
    }

    /* (non-Javadoc)
	 * @see xps.impl.document.jaxb.IGradientStop#setColor(java.lang.String)
	 */
    public void setColor(String value) {
        this.color = value;
    }

    /**
     * Gets the value of the offset property.
     * 
     */
    public double getOffset() {
        return offset;
    }

    /**
     * Sets the value of the offset property.
     * 
     */
    public void setOffset(double value) {
        this.offset = value;
    }

}
