/*----------------------------------
    function    :   ls_query_send()
    author      :   E


----------------------------------*/
function ls_query_send(obj_query){
    var sBody = '';

    sBody+='query_type='+obj_query.query_type +'&';
    if(obj_query.id > -1){
        sBody+='id='+obj_query.S_PK +'&';
    }

    //BEGIN :   IF ary_qry_var is present AND has items
    if(obj_query.ary_qry_var && Object.keys(obj_query.ary_qry_var).length > 0){
        var c = 0; //counter to track spot in ary_qry_var
        //BEGIN :   FOR every item in  ary_qry_var
        for (n in obj_query.ary_qry_var){
            //add item to sBody
            sBody += n + '='+obj_query.ary_qry_var[n];
            if(c < Object.keys(obj_query.ary_qry_var).length-1){
                sBody += '&';
            } 
            c++;    //increment counter
        }
        //END :   FOR every item in  ary_qry_var
    }
    //END :   IF ary_qry_var is present AND has items

    //alert(sBody);
    var oXHR = createXHR();
    oXHR.open("post", 'ajax/tk_query.php', true);

    oXHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //BEGIN : onreadystatechange
    oXHR.onreadystatechange = function () {
        if (oXHR.readyState < 4) {
            
        }
        //BEGIN : IF readyState == 4
        if (oXHR.readyState == 4) {

            if (oXHR.status == 200) {
                var xml_string = oXHR.responseText;
                xml_string = textToXML(xml_string);
                if(obj_query.cb_function){
                    obj_query.cb_function(xml_string);
                }
                //alert('finished');
            } else {

            }

        }
        //END : IF readyState == 4
    };
    //END : onreadystatechange

    //Send the request
    oXHR.send(sBody);
    //END : prepare and send AJAX post

}

/* --------------------------------
| FUNCTION:     textToXML ( string )
| CREATED:      
| ADDED :       originally from web - 9/17/13
| MODIFIED:     10/18/13
| AUTHOR:      
| PURPOSE: 
|-------------------------------- */
function textToXML (string) {
  try {
    var xml = null;

    if ( window.DOMParser ) {

      var parser = new DOMParser();
      xml = parser.parseFromString( string, "text/xml" );

      var found = xml.getElementsByTagName( "parsererror" );

      if ( !found || !found.length || !found[ 0 ].childNodes.length ) {
        return xml;
      }

      return null;
    } else {

      xml = new ActiveXObject( "Microsoft.XMLDOM" );

      xml.async = false;
      xml.loadXML( string );

      return xml;
    }
  } catch ( e ) {
    // suppress
  }
}

/* --------------------------------
| FUNCTION:     createXHR()
| PURPOSE: AJAX createXHR function
|-------------------------------- */
function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var aVersions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0"];

        for (var i = 0; i < aVersions.length; i++) {
            try {
                var oXHR = new ActiveXObject(aVersions[i]);
                return oXHR;
            } catch (oError) {
                //Do nothing
            }
        }
    }
}



function xml_attributes_to_object(node_in){
  if(node_in){
    //create object which will hold atrribute name and value
    var obj_atr = new Object;
    
    //get attributes of this node
    var node_attr = node_in.attributes;
    for (var c_na=0; c_na < node_attr.length; c_na++){
        var a_name =  node_attr[c_na].name;
        var a_value =  node_attr[c_na].value;
        
        obj_atr[a_name]=a_value;
    }
    
    return obj_atr;
  }
}