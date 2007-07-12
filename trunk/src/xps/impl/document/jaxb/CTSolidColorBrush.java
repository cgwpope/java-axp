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

import xps.api.model.document.page.ISolidColorBrush;


/**
 * <p>Java class for CT_SolidColorBrush complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="CT_SolidColorBrush">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attGroup ref="{http://schemas.microsoft.com/xps/2005/06}AG_Brush"/>
 *       &lt;attGroup ref="{http://schemas.microsoft.com/xps/2005/06}AG_SolidColorBrush"/>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CT_SolidColorBrush")
public class CTSolidColorBrush implements ISolidColorBrush {

    @XmlAttribute(name = "Opacity")
    protected Double opacity;
    @XmlAttribute(name = "Key", namespace = "http://schemas.microsoft.com/xps/2005/06/resourcedictionary-key")
    protected String key;
    @XmlAttribute(name = "Color", required = true)
    protected String color;

    /* (non-Javadoc)
	 * @see xps.document.jaxb.ISolidColorBrush#getOpacity()
	 */
    public double getOpacity() {
        if (opacity == null) {
            return  1.0D;
        } else {
            return opacity;
        }
    }

    /**
     * Sets the value of the opacity property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setOpacity(Double value) {
        this.opacity = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.ISolidColorBrush#getKey()
	 */
    public String getKey() {
        return key;
    }

    /**
     * Sets the value of the key property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setKey(String value) {
        this.key = value;
    }

    /* (non-Javadoc)
	 * @see xps.document.jaxb.ISolidColorBrush#getColor()
	 */
    public String getColor() {
        return color;
    }

    /**
     * Sets the value of the color property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setColor(String value) {
        this.color = value;
    }

}
