//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.0.3-b01-fcs 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2006.10.23 at 11:22:55 PM EDT 
//


package javaaxp.core.service.model.document.page;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;


/**
 * <p>Java class for ST_ClrIntMode.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="ST_ClrIntMode">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="ScRgbLinearInterpolation"/>
 *     &lt;enumeration value="SRgbLinearInterpolation"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlEnum
public enum STClrIntMode {

    @XmlEnumValue("ScRgbLinearInterpolation")
    SC_RGB_LINEAR_INTERPOLATION("ScRgbLinearInterpolation"),
    @XmlEnumValue("SRgbLinearInterpolation")
    S_RGB_LINEAR_INTERPOLATION("SRgbLinearInterpolation");
    private final String value;

    STClrIntMode(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static STClrIntMode fromValue(String v) {
        for (STClrIntMode c: STClrIntMode.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v.toString());
    }

}
