function loadXML(XMLName, readyFunction) {
    var returnDoc;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            readyFunction(this.responseXML);
        }
    };
    xhttp.open("GET", XMLName, true);
    xhttp.send();
}

function loadXSLT(XMLName, XLSName, readyFunction) {
    var XML;
    var XSL;
    
    loadXML(XMLName, function(document) { XML = document; transformXML(); });
    loadXML(XLSName, function(document) { XSL = document; transformXML(); });
    
    function transformXML() {
        if(XML == null || XSL == null) return;
        
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(XSL);
        readyFunction(xsltProcessor.transformToFragment(XML, document));
    }
}