<?xml version="1.0" encoding="UTF-8"?>

<xml:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="Almacen">
        <html>
            <head>
                <title>Moneda.xsl</title>
                <link rel="stylesheet" type="text/css" href="Moneda.css" />
            </head>
            <body>
                <table>
                    <thead>
                        <tr>
                            <th>Clave</th>
                            <th>Nombre</th>
                            <th>Unidad</th>
                            <th>P. Unitario</th>
                        </tr>
                    </thead>
                    <xsl:for-each select="Producto">
                        <tr>
                            <td class="ID">
                                <xsl:value-of select="Clave" />
                            </td>
                            <td>
                                <xsl:value-of select="Nombre" />
                            </td>
                            <td class="UN">
                                <xsl:value-of select="Unidad" />
                            </td>
                            <td class="PU">
                                <xsl:value-of select="PUnitario" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                <script src="Moneda.js"></script>
            </body>
        </html>
    </xsl:template>
</xml:stylesheet>