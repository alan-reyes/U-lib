<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />
    <xsl:template match="/">
        <body style="background-color:coral">
            <h1>Grupo de Chamacos</h1>
            <hr />
            <xsl:apply-templates select="/personas/persona" />
        </body>
    </xsl:template>

    <xsl:template match="/personas/persona">
        <div style="background-color:SteelBlue; font-size:18px; font-weight: bold; padding:4px; ">
            <xsl:value-of select="nombre" />
            <xsl:value-of select="apellidos" />
            <xsl:value-of select="edad" />
        </div>
    </xsl:template>

</xsl:stylesheet>