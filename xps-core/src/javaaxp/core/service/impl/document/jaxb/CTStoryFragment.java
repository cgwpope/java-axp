//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.0.3-b01-fcs 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2006.10.23 at 11:22:55 PM EDT 
//


package javaaxp.core.service.impl.document.jaxb;

import java.util.ArrayList;
import java.util.List;

import javaaxp.core.service.model.document.page.STFragmentType;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlElementRefs;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CT_StoryFragment complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="CT_StoryFragment">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://schemas.microsoft.com/xps/2005/06/documentstructure}StoryBreak" minOccurs="0"/>
 *         &lt;choice maxOccurs="unbounded">
 *           &lt;element ref="{http://schemas.microsoft.com/xps/2005/06/documentstructure}SectionStructure"/>
 *           &lt;element ref="{http://schemas.microsoft.com/xps/2005/06/documentstructure}ParagraphStructure"/>
 *           &lt;element ref="{http://schemas.microsoft.com/xps/2005/06/documentstructure}ListStructure"/>
 *           &lt;element ref="{http://schemas.microsoft.com/xps/2005/06/documentstructure}TableStructure"/>
 *           &lt;element ref="{http://schemas.microsoft.com/xps/2005/06/documentstructure}FigureStructure"/>
 *         &lt;/choice>
 *         &lt;element ref="{http://schemas.microsoft.com/xps/2005/06/documentstructure}StoryBreak" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attGroup ref="{http://schemas.microsoft.com/xps/2005/06/documentstructure}AG_StoryFragment"/>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CT_StoryFragment", namespace = "http://schemas.microsoft.com/xps/2005/06/documentstructure", propOrder = {
    "content"
})
public class CTStoryFragment {

    @XmlElementRefs({
        @XmlElementRef(name = "SectionStructure", namespace = "http://schemas.microsoft.com/xps/2005/06/documentstructure", type = JAXBElement.class),
        @XmlElementRef(name = "StoryBreak", namespace = "http://schemas.microsoft.com/xps/2005/06/documentstructure", type = JAXBElement.class),
        @XmlElementRef(name = "TableStructure", namespace = "http://schemas.microsoft.com/xps/2005/06/documentstructure", type = JAXBElement.class),
        @XmlElementRef(name = "ListStructure", namespace = "http://schemas.microsoft.com/xps/2005/06/documentstructure", type = JAXBElement.class),
        @XmlElementRef(name = "ParagraphStructure", namespace = "http://schemas.microsoft.com/xps/2005/06/documentstructure", type = JAXBElement.class),
        @XmlElementRef(name = "FigureStructure", namespace = "http://schemas.microsoft.com/xps/2005/06/documentstructure", type = JAXBElement.class)
    })
    protected List<JAXBElement<?>> content;
    @XmlAttribute(name = "FragmentName")
    protected String fragmentName;
    @XmlAttribute(name = "FragmentType", required = true)
    protected STFragmentType fragmentType;
    @XmlAttribute(name = "StoryName")
    protected String storyName;

    /**
     * Gets the rest of the content model. 
     * 
     * <p>
     * You are getting this "catch-all" property because of the following reason: 
     * The field name "StoryBreak" is used by two different parts of a schema. See: 
     * line 115 of file:/home/popec/workspace/XPS/doc/schemas/DocStructure.xsd
     * line 107 of file:/home/popec/workspace/XPS/doc/schemas/DocStructure.xsd
     * <p>
     * To get rid of this property, apply a property customization to one 
     * of both of the following declarations to change their names: 
     * Gets the value of the content property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the content property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getContent().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link JAXBElement }{@code <}{@link CTBreak }{@code >}
     * {@link JAXBElement }{@code <}{@link CTSection }{@code >}
     * {@link JAXBElement }{@code <}{@link CTTable }{@code >}
     * {@link JAXBElement }{@code <}{@link CTFigure }{@code >}
     * {@link JAXBElement }{@code <}{@link CTParagraph }{@code >}
     * {@link JAXBElement }{@code <}{@link CTList }{@code >}
     * 
     * 
     */
    public List<JAXBElement<?>> getContent() {
        if (content == null) {
            content = new ArrayList<JAXBElement<?>>();
        }
        return this.content;
    }

    /**
     * Gets the value of the fragmentName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFragmentName() {
        return fragmentName;
    }

    /**
     * Sets the value of the fragmentName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFragmentName(String value) {
        this.fragmentName = value;
    }

    /**
     * Gets the value of the fragmentType property.
     * 
     * @return
     *     possible object is
     *     {@link STFragmentType }
     *     
     */
    public STFragmentType getFragmentType() {
        return fragmentType;
    }

    /**
     * Sets the value of the fragmentType property.
     * 
     * @param value
     *     allowed object is
     *     {@link STFragmentType }
     *     
     */
    public void setFragmentType(STFragmentType value) {
        this.fragmentType = value;
    }

    /**
     * Gets the value of the storyName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStoryName() {
        return storyName;
    }

    /**
     * Sets the value of the storyName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStoryName(String value) {
        this.storyName = value;
    }

}
