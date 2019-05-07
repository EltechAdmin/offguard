/*
 function :   settings()
 created  :   07/29/18
 */

 
function settings(){


        var selectedValue= document.getElementById('selectQuery').value;
//alert(selectedValue + selectedValue.innerHTML + selectedValue.value)
      if (selectedValue == "Gather Info"){gatherInfoUpdate();}
       if (selectedValue == "IB Status"){IBstatusUpdate();} 
       if (selectedValue == "Brokers"){BrokersUpdate();} 
       if (selectedValue == "Caps"){CapsUpdate();} 
      }




///Tools page main div and menu 

function tools(){


document.getElementById('toolsBut').style.backgroundColor="#41a65b";
document.getElementById('queriesBut').style.backgroundColor="";
document.getElementById('getInfoBut').style.backgroundColor="";
document.getElementById('defectsBut').style.backgroundColor="";
document.getElementById('bbDashboardBut').style.backgroundColor="";
document.getElementById("moreLinks").style.display= "none";//Hide more links
document.getElementById("NewUpdates").style.display= "none";//Hide New Updates
document.getElementById("infobody").style.display= "none";
document.getElementById("inputData").style.display= "none";
document.getElementById("queryParentTOP").style.display= "none";
document.getElementById("BodyDiv").style.display= "block";
    
    var defectsTopDev = document.getElementById('BodyDiv');                   ///
    if(defectsTopDev.hasChildNodes()){                                        /// Checks if an item is on the body and remove to display the below menu
    defectsTopDev.removeChild(defectsTopDev.childNodes[0]);}                   ///


    var defectTopParent = document.createElement('div');
    defectTopParent.id="defectTopParent";
    defectTopParent.className = "defectTopParent";
    defectsTopDev.appendChild(defectTopParent); 


    var defectParent = document.createElement('div');
    defectParent.id="defectParent";
    defectParent.className = "defectParent";
    defectTopParent.appendChild(defectParent); 


    var DefectTopDiv = document.createElement('div');
    DefectTopDiv.className = "DefectTopDiv";
    defectParent.appendChild(DefectTopDiv); 


    var ToolsButtonsDiv = document.createElement('div');
    ToolsButtonsDiv.className = "ToolsButtons";
    defectParent.appendChild(ToolsButtonsDiv); 



    var DefectDiv = document.createElement('div');
    DefectDiv.className= 'ghost-button-full-color';
    DefectDiv.appendChild(document.createTextNode('LoanOver Payments'));
    DefectDiv.onclick=function(){
         loanOverpaymentsTool()
     }
    ToolsButtonsDiv.appendChild(DefectDiv); 


    var DefectDiv = document.createElement('div');
    DefectDiv.className= 'ghost-button-full-color';
    DefectDiv.appendChild(document.createTextNode('Note Bulider'));
    DefectDiv.onclick=function(){
         note_builder()
     }
    ToolsButtonsDiv.appendChild(DefectDiv); 


    var DefectDiv = document.createElement('div');
    DefectDiv.className= 'ghost-button-full-color';
    DefectDiv.appendChild(document.createTextNode('Saved Notes'));
          DefectDiv.onclick=function(){
     alert("Coming Soon...")

     }
    ToolsButtonsDiv.appendChild(DefectDiv); 

    var DefectDiv = document.createElement('div');
    DefectDiv.className= 'ghost-button-full-color';
    DefectDiv.appendChild(document.createTextNode('DI Parser'));
      DefectDiv.onclick=function(){
         diparser();
     }
    ToolsButtonsDiv.appendChild(DefectDiv); 


    }



//////////////////////////////////////////////////////Save functions begin//////////////////////////////////////////////


///DefectidInput,DiscriptionInout,ProductTeamInput,StatusInput,ReferenceInput,WorkaroundInput
////     a              b                 c            d             e              f        ////


function save_defect(a,b,c,d,e,f){
   
        //create query object
        var obj_query = new Object({
            query_type : 'insert_defect',
            a:a
        });
        obj_query.ary_qry_var = {
            b:b,c:c,d:d,e:e,f:f
        };
        obj_query.cb_function=function(){
    div_hide()
    Defects();
        } 


  //BEGIN : get all the input values

    obj_query.ary_qry_var['a'] = a;
    obj_query.ary_qry_var['b'] = b;
    obj_query.ary_qry_var['c'] = c;
    obj_query.ary_qry_var['d'] = d;
    obj_query.ary_qry_var['e'] = e;
    obj_query.ary_qry_var['f'] = f;

        //call to send query
        ls_query_send(obj_query);
        

    //END   : save location ----------------
}





//////////////////////////////////////////////////////Save functions end//////////////////////////////////////////////


function QuickLU(){


  var content = document.getElementById("myCtrl");

          //create a div for inputs 
  var top_div = document.createElement('div');
  top_div.id = "update";
  top_div.className= "abc";
  content.appendChild(top_div);

            //create a div for inputs 
  var sec_div = document.createElement('div');
  sec_div.className= "popupContact";
  top_div.appendChild(sec_div);
     //create a div for inputs 
  var input_names = document.createElement('div');
  input_names.className= "QRform";
  sec_div.appendChild(input_names);



var ge_icon = document.createElement('img');
        ge_icon.src = 'img/close.png';
        ge_icon.className = "close";
     //   ge_icon.S_PK = objAtr_sign.S_PK;
        ge_icon.onclick=function(){
          div_hide()
}
input_names.appendChild(ge_icon);


  var addQrsTopDiv = document.createElement('div');
  addQrsTopDiv.className= "addQrsTopDiv";
  input_names.appendChild(addQrsTopDiv);

 

 AvarageMealTop =document.createElement('div');
  AvarageMealTop.id ="TopSearchDiv";
  AvarageMealTop.style.display ='block';
  AvarageMealTop.className ="QRHeaderTop";
  addQrsTopDiv.appendChild(AvarageMealTop);


/////////////////////////////////////////////////////////////////////////////////////////////
     //create a div for inputs 
  var input_name = document.createElement('div');
  input_name.id = "enterinfoDiv";
  input_name.className= "input_names_div";
  AvarageMealTop.appendChild(input_name);
      //create header s
  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="store_input_text";
  ls_input_usr.appendChild(document.createTextNode('Enter FI id'));   
  input_name.appendChild(ls_input_usr);

    var userText = document.createElement('input');
  userText.id = 'SearchidInput';
  userText.name = 'validate'; 
  userText.className='store_input';
  input_name.appendChild(userText);

///////////////////////////////////////////////////////////////////////////////////////////////
        document.getElementById("SearchidInput")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById("searchFI").click();
          }
      });
 //////////////////////////////////////////////////////////////////////////////////////////     
     //create a div for inputs 
  var input_name = document.createElement('div');
  input_name.className= "input_names_div";
  AvarageMealTop.appendChild(input_name);


  //button to create a new sign
  var searchFI = document.createElement('div');
  searchFI.className='but_add';
  searchFI.id = "searchFI";
  searchFI.appendChild(document.createTextNode('Search'))
  searchFI.onclick=function(){
  var TopSearchDiv = document.getElementById("TopSearchDiv");  //Gives access to parent divs
  var SearchidInput = document.getElementById("SearchidInput").value;  //Entered FI id

  var loderDiv = document.createElement('div');
  loderDiv.id="loderDiv";
  loderDiv.className= "loderDiv";
  TopSearchDiv.appendChild(loderDiv);

  var loaderImg = document.createElement('div');
  loaderImg.className= "BBloader";
  loderDiv.appendChild(loaderImg);


  //var data = '[{"status": "Live", "domain": "www.nuvisionfederal.org", "name": "NuVision Federal Credit Union", "fiid": "3383", "dc": "dca", "udb": 73850, "sl": "sl3"}]';
   //var xml = objectToXml(data);
         $.ajax({
      type:"POST",
     // url:"http://anprd10utlge003.dca.diginsite.net/ToolKit/ajax/grabFI.php",  //Prod
    //  url:"http://anprd10utlge003.dca.diginsite.net/ToolKitBeta/ajax/grabFI.php",  //Beta
     url:"http://127.0.0.1/www2/ToolKit/ajax/grabFI.php",  //Local
      data: {
              fiid:SearchidInput
            },
      success:function(result){
        //console.log(result);
        var xmlString = objectToXml(result);
        console.log(xmlString);
       
var datacenter = null;

  var info = new window.DOMParser().parseFromString(xmlString, "text/xml");

  var fiidIn = info.getElementsByTagName("fiid")[0].childNodes[0].nodeValue;
  var name = info.getElementsByTagName("name")[0].childNodes[0].nodeValue;
  var ibdomain = info.getElementsByTagName("ibdomain")[0].childNodes[0].nodeValue;
  var web_domain = info.getElementsByTagName("web_domain")[0].childNodes[0].nodeValue;
  //var ibstatus  = info.getElementsByTagName("ibstatus")[0].childNodes[0].nodeValue;
  var informix  = info.getElementsByTagName("informix")[0].childNodes[0].nodeValue;
  var swimlane  = info.getElementsByTagName("swimlane")[0].childNodes[0].nodeValue;
  var datacenter  = info.getElementsByTagName("datacenter")[0].childNodes[0].nodeValue;

  /*console.log(datacenter);
if (datacenter === undefined){
datacenter = "NA";
}else{
  var datacenter  = info.getElementsByTagName("datacenter")[0].childNodes[0].nodeValue;
  }*/
  //var fiport  = info.getElementsByTagName("fiport")[0].childNodes[0].nodeValue;
   


   var elementInfoDiv = document.getElementById("enterinfoDiv");
   elementInfoDiv.parentNode.removeChild(elementInfoDiv);   ///Remove parrot
   var elementLoder = document.getElementById("loderDiv");
   elementLoder.parentNode.removeChild(elementLoder);   ///Remove Search Form


     //create a div for inputs 
  var input_name = document.createElement('div');
  input_name.id = "enterinfoDiv";
  input_name.className= "FIsearchResultsTopdiv";
  TopSearchDiv.appendChild(input_name);
      //create header s
  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="FIsearchResults";
  ls_input_usr.appendChild(document.createTextNode('Fi Id =  '+fiidIn));   
  input_name.appendChild(ls_input_usr);

    var ls_input_usr = document.createElement('div');
  ls_input_usr.className="FIsearchResults";
  ls_input_usr.appendChild(document.createTextNode('Fi Name =  '+name));   
  input_name.appendChild(ls_input_usr);

  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="FIsearchResults";
  ls_input_usr.appendChild(document.createTextNode('IB Domain =  '+ibdomain));   
  input_name.appendChild(ls_input_usr);

  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="FIsearchResults";
  ls_input_usr.appendChild(document.createTextNode('Web Domain =  '+web_domain));   
  input_name.appendChild(ls_input_usr);

  /*  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="FIsearchResults";
  ls_input_usr.appendChild(document.createTextNode('Status =  '+ibstatus));   
  input_name.appendChild(ls_input_usr);*/

  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="FIsearchResults";
  ls_input_usr.appendChild(document.createTextNode('Informix = | dbaccess  '+informix+";"));   
  input_name.appendChild(ls_input_usr);

    var ls_input_usr = document.createElement('div');
  ls_input_usr.className="FIsearchResults";
  ls_input_usr.appendChild(document.createTextNode('Swim Lane =  '+swimlane));   
  input_name.appendChild(ls_input_usr);

  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="FIsearchResults";
  ls_input_usr.appendChild(document.createTextNode('Data Center =  '+datacenter));   
  input_name.appendChild(ls_input_usr);

  /*var ls_input_usr = document.createElement('div');
  ls_input_usr.className="FIsearchResults";
  ls_input_usr.appendChild(document.createTextNode('Port =  '+fiport));   
  input_name.appendChild(ls_input_usr);*/

   var elementLoder = document.getElementById("searchFI");
   elementLoder.parentNode.removeChild(elementLoder);   ///Remove Search button
      },
error:function(xhr, status, error){
        var errorMessage = xhr.status + ': ' + xhr.statusText;
         console.log('Error - ' + errorMessage);
}
})


  }  ///onclick func end
  input_name.appendChild(searchFI);



} 





function grabFI(number,getmem1) {
//number = the value of the attribute that was passed to this function to determine which function to call after a successful return.  


        if (number == 1){
    var fiid = document.getElementById('InfofiId').value;
        }
        if (number == 2){
    var fiid = document.getElementById("fiid").value;
    console.log(fiid)
        }
        if (number == 3){
    var fiid = document.getElementById('InfofiMemId').value;
        }


      $.ajax({
      type:"POST",
     // url:"http://anprd10utlge003.dca.diginsite.net/ToolKit/ajax/grabFI.php",  //Prod
    //  url:"http://anprd10utlge003.dca.diginsite.net/ToolKitBeta/ajax/grabFI.php",  //Beta
      url:"http://127.0.0.1/www2/ToolKit/ajax/grabFI.php",  //Local
      data: {
              fiid:fiid
            },
      success:function(result){
        //console.log(result);
        var xmlString = objectToXml(result);
        //console.log(xmlString);

        if (number == 1){
        FoundgetFItable(xmlString);
        }
        if (number == 2){
        FoundgetFI(xmlString);
        }
        if (number == 3){
        grabmem(getmem1,xmlString);
        }



      },
error:function(xhr, status, error){
        var errorMessage = xhr.status + ': ' + xhr.statusText;
         console.log('Error - ' + errorMessage);
}
})
}


function FoundgetFI(xml) {

var info = new window.DOMParser().parseFromString(xml, "text/xml");

  var informix = info.getElementsByTagName("informix")[0].childNodes[0].nodeValue;
  var swimlane = info.getElementsByTagName("swimlane")[0].childNodes[0].nodeValue;
  var datacenter = info.getElementsByTagName("datacenter")[0].childNodes[0].nodeValue;
  var ibdomain = info.getElementsByTagName("ibdomain")[0].childNodes[0].nodeValue;
  var backend_dir = info.getElementsByTagName("backend_dir")[0].childNodes[0].nodeValue;
  var fiport = info.getElementsByTagName("fiport")[0].childNodes[0].nodeValue;
  var rdbport = info.getElementsByTagName("rdbport")[0].childNodes[0].nodeValue;
     // var fiport = info.getElementsByTagName("fiport")[0].childNodes[0].nodeValue;

//console.log(guid+" "+memnum);

//////////Populate inputs with returning data///////////
  document.getElementById("informix").value = informix;
  document.getElementById("swimlane").value = swimlane;
  document.getElementById("datacenter").value = datacenter;
  document.getElementById("ibdomain").value = ibdomain;
  document.getElementById("backend_dir").value = backend_dir;
  document.getElementById("fiport").value = fiport;
  document.getElementById("rdbport").value = rdbport;
  //document.getElementById("swimlane").value = swimlane;

}

////////////////////////////////////////////////////////////////GETMEM//////////////////////////////////////////////
function grabmem(number,xml) {




        if (number == 1){
    var fiid = document.getElementById('InfofiMemId').value;
    var memnumber = document.getElementById("InfomemNum").value;
        }
        if (number == 2){
    var fiid = document.getElementById("fiid").value;
    var memnumber = document.getElementById("memnumber").value;
    console.log(fiid+memnumber)
        }


      $.ajax({
      type:"POST",
     //\ url:"http://anprd10utlge003.dca.diginsite.net/ToolKit/ajax/grabFI.php",  //Prod
   //  url:"http://anprd10utlge003.dca.diginsite.net/ToolKitBeta/ajax/grabMEM.php",  //Beta
     url:"http://127.0.0.1/www2/ToolKit/ajax/grabMEM.php",  //Local
      data: {
              fiid:fiid,
              memnumber:memnumber

            },
      success:function(result){
        //console.log(result);
        var xmlString = StringToXMLDom(result);
       // console.log(result);

        if (number == 1){
        FoundgetMembertable(xmlString,xml);
        }
        if (number == 2){
        Foundgetmem(xmlString);
        }


          },
    error:function(xhr, status, error){
            var errorMessage = xhr.status + ': ' + xhr.statusText;
             console.log('Error - ' + errorMessage);
    }
    })
    }


function Foundgetmem(xml) {

  var info = new window.DOMParser().parseFromString(xml, "text/xml");

  var guid = xml.getElementsByTagName("ns5:id")[0].childNodes[0].nodeValue;
  var name = xml.getElementsByTagName("ns5:name")[0].childNodes[0].nodeValue;
  var loginId = xml.getElementsByTagName("ns4:loginId")[1].childNodes[0].nodeValue;
  var emailAddress = xml.getElementsByTagName("ns4:emailAddress")[0].childNodes[0].nodeValue;
  var statusCode = xml.getElementsByTagName("ns5:statusCode")[0].childNodes[0].nodeValue;
 // var fiport = xml.getElementsByTagName("fiport")[0].childNodes[0].nodeValue;
  //var rdbport = xml.getElementsByTagName("rdbport")[0].childNodes[0].nodeValue;
 //var tt = xml.getElementsByTagName("ns4:loginId")[1].childNodes[0].nodeValue;

//console.log(tt);

//////////Populate inputs with returning data///////////
  document.getElementById("id").value = guid;
  document.getElementById("loginId").value = loginId;
  document.getElementById("emailAddress").value = emailAddress;
  document.getElementById("statusCode").value = statusCode;
 // document.getElementById("backend_dir").value = backend_dir;
 // document.getElementById("fiport").value = fiport;
 // document.getElementById("rdbport").value = rdbport;
  //document.getElementById("swimlane").value = swimlane;

}



////////////////////////////////////////////////////////Get Customer CAS/UDB//////////////////////////////////////////

function grabmemcas(lowersl,lowerdc,fiid,membernum) {

   
      $.ajax({
      type:"POST",
     // url:"http://anprd10utlge003.dca.diginsite.net/ToolKit/ajax/grabFI.php",  //Prod
     // url:"http://anprd10utlge003.dca.diginsite.net/ToolKitBeta/ajax/grabMEMcas.php",  //Beta
     url:"http://127.0.0.1/www2/ToolKit/ajax/grabMEMcas.php",  //Local
      data: {
              lowersl:lowersl,
              lowerdc:lowerdc,
              fiid:fiid,
              memnumber:membernum              

            },
      success:function(result){
       var xmlString = StringToXMLDom(result);

       LoadXMLDom('getcusCasXmltopDiv',xmlString);

          },
    error:function(xhr, status, error){
            var errorMessage = xhr.status + ': ' + xhr.statusText;
             console.log('Error - ' + errorMessage);
    }
    })

    }



////////////////////////////////////////////////////////Get Account//////////////////////////////////////////

function grabaccnts(fiid,guid) {

  
      $.ajax({
      type:"POST",
     // url:"http://anprd10utlge003.dca.diginsite.net/ToolKit/ajax/grabACCNTS.php",  //Prod
    // url:"http://anprd10utlge003.dca.diginsite.net/ToolKitBeta/ajax/grabACCNTS.php",  //Beta
    url:"http://127.0.0.1/www2/ToolKit/ajax/grabACCNTS.php",  //Local
      data: {
              fiid:fiid,
              guid:guid

            },
      success:function(result){
       var xmlString = StringToXMLDom(result);

       LoadXMLDom('getcusAcctsXmltopDiv',xmlString);



          },
    error:function(xhr, status, error){
            var errorMessage = xhr.status + ': ' + xhr.statusText;
             console.log('Error - ' + errorMessage);
    }
    })

    }



////////////////////////////////////////////////////////Get Customer CAS/UDB//////////////////////////////////////////

function grabaccntsBB(lowersl,lowerdc,fiid,guid) {

   
      $.ajax({
      type:"POST",
     // url:"http://anprd10utlge003.dca.diginsite.net/ToolKit/ajax/grabACCNTSBB.php",  //Prod
     // url:"http://anprd10utlge003.dca.diginsite.net/ToolKitBeta/ajax/grabACCNTSBB.php",  //Beta
     url:"http://127.0.0.1/www2/ToolKit/ajax/grabACCNTSBB.php",  //Local
      data: {
              lowersl:lowersl,
              lowerdc:lowerdc,
              fiid:fiid,
              guid:guid              

            },
      success:function(result){
       var xmlString = StringToXMLDom(result);
       LoadXMLDom('ResultshowXmlDiv',xmlString);

          },
    error:function(xhr, status, error){
            var errorMessage = xhr.status + ': ' + xhr.statusText;
             console.log('Error - ' + errorMessage);
    }
    })

    }










//////////////////////////////////////////////////////////ENG/////////////////////////////////////////////////

////Found online https://gist.github.com/ggendre/905833#file-gistfile1-js
//Convert XML string(whats returned from the API call) to a Xml Onject

function StringToXMLDom(string){
  var xmlDoc=null;
  if (window.DOMParser)
  {
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(string,"text/xml");
  }
  else // Internet Explorer
  {
    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async="false";
    xmlDoc.loadXML(string);
  }
  return xmlDoc;
}








////Found online https://github.com/mevdschee/json2xml.js/blob/master/json2xml.js
//Convert returned json to Xml
      function objectToXml(json) {
    try {
    var a =  JSON.parse(json);
    var c = document.createElement("root");
    var t = function (v) {
        return {}.toString.call(v).split(' ')[1].slice(0, -1).toLowerCase();
    };
    var f = function (f, c, a, s) {
        c.setAttribute("type", t(a));
        if (t(a) != "array" && t(a) != "object") {
            if (t(a) != "null") {
                c.appendChild(document.createTextNode(a));
            }
        } else {
            for (var k in a) {
                var v = a[k];
                if (k == "__type" && t(a) == "object") {
                    c.setAttribute("__type", v);
                } else {
                    if (t(v) == "object") {
                        var ch = c.appendChild(document.createElementNS(null, s ? "item" : k));
                        f(f, ch, v);
                    } else if (t(v) == "array") {
                        var ch = c.appendChild(document.createElementNS(null, s ? "item" : k));
                        f(f, ch, v, true);
                    } else {
                        var va = document.createElementNS(null, s ? "item" : k);
                        if (t(v) != "null") {
                            va.appendChild(document.createTextNode(v));
                        }
                        var ch = c.appendChild(va);
                        ch.setAttribute("type", t(v));
                    }
                }
            }
        }
    };
    f(f, c, a, t(a) == "array");
    return c.outerHTML;
    } catch (e) {
       // return false;
          var elementLoder = document.getElementById("loderDiv");
          elementLoder.parentNode.removeChild(elementLoder);   ///Remove parrot
          alert("No data found, Please try again");
    }

    }














/* Copyright (c) 2007 Lev Muchnik <LevMuchnik@gmail.com>. All rights reserved.
 * You may copy and modify this script as long as the above copyright notice,
 * this condition and the following disclaimer is left intact.
 * This software is provided by the author "AS IS" and no warranties are
 * implied, including fitness for a particular purpose. In no event shall
 * the author be liable for any damages arising in any way out of the use
 * of this software, even if advised of the possibility of such damage.
 * $Date: 2007-10-03 19:08:15 -0700 (Wed, 03 Oct 2007) $
 */

function LoadXML(ParentElementID,URL) 
{
    var xmlHolderElement = GetParentElement(ParentElementID);
    if (xmlHolderElement==null) { return false; }
    ToggleElementVisibility(xmlHolderElement);
    return RequestURL(URL,URLReceiveCallback,ParentElementID);
}
function LoadXMLDom(ParentElementID,xmlDoc) 
{
      document.getElementById('memberInfoLoader2').style.display= "none";///////hide loader
  if (xmlDoc) {

    var xmlHolderElement = GetParentElement(ParentElementID);
    if (xmlHolderElement==null) { return false; }
    while (xmlHolderElement.childNodes.length) { xmlHolderElement.removeChild(xmlHolderElement.childNodes.item(xmlHolderElement.childNodes.length-1));  }
    var Result = ShowXML(xmlHolderElement,xmlDoc.documentElement,0);
    
    var ReferenceElement = document.createElement('div');
    return Result;
  }
  else { return false; }
}
function LoadXMLString(ParentElementID,XMLString) 
{
  document.getElementById('memberInfoLoader2').style.display= "none";///////hide loader
  xmlDoc = CreateXMLDOM(XMLString);
  return LoadXMLDom(ParentElementID,xmlDoc) ;
}
////////////////////////////////////////////////////////////
// HELPER FUNCTIONS - SHOULD NOT BE DIRECTLY CALLED BY USERS
////////////////////////////////////////////////////////////
function GetParentElement(ParentElementID)
{
  if (typeof(ParentElementID)=='string') {  return document.getElementById(ParentElementID);  }
  else if (typeof(ParentElementID)=='object') { return ParentElementID;} 
  else { return null; }
}
function URLReceiveCallback(httpRequest,xmlHolderElement)
{
    try {
            if (httpRequest.readyState == 4) {
                if (httpRequest.status == 200) {
          var xmlDoc = httpRequest.responseXML;
          if (xmlHolderElement && xmlHolderElement!=null) {
              xmlHolderElement.innerHTML = '';
              return LoadXMLDom(xmlHolderElement,xmlDoc);
          }
                } else {
                    return false;
                }
            }
        }
        catch( e ) {
            return false;
        } 
}
function RequestURL(url,callback,ExtraData) { // based on: http://developer.mozilla.org/en/docs/AJAX:Getting_Started
        var httpRequest;
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            httpRequest = new XMLHttpRequest();
            if (httpRequest.overrideMimeType) { httpRequest.overrideMimeType('text/xml'); }
        } 
        else if (window.ActiveXObject) { // IE
            try { httpRequest = new ActiveXObject("Msxml2.XMLHTTP");   } 
            catch (e) {
           try { httpRequest = new ActiveXObject("Microsoft.XMLHTTP"); } 
           catch (e) {}
            }
        }
        if (!httpRequest) { return false;   }
        httpRequest.onreadystatechange = function() { callback(httpRequest,ExtraData); };
        httpRequest.open('GET', url, true);
        httpRequest.send('');
    return true;
    }
function CreateXMLDOM(XMLStr) 
{
  if (window.ActiveXObject)
   {
      xmlDoc=new ActiveXObject("Microsoft.XMLDOM"); 
      xmlDoc.loadXML(XMLStr); 
      return xmlDoc;
  }
  else if (document.implementation && document.implementation.createDocument)   {
      var parser=new DOMParser();
      return parser.parseFromString(XMLStr,"text/xml");
  }
  else {
    return null;
  }
}   

var IDCounter = 1;
var NestingIndent = 15;
function ShowXML(xmlHolderElement,RootNode,indent)
{
  if (RootNode==null || xmlHolderElement==null) { return false; }
  var Result  = true;
  var TagEmptyElement = document.createElement('div');
  TagEmptyElement.className = 'Element';
  TagEmptyElement.id="NodeName";
  TagEmptyElement.style.position = 'relative';
  TagEmptyElement.style.left = NestingIndent+'px';
  TagEmptyElement.style.display='inline-flex'; 
  if (RootNode.childNodes.length==0) { 
    var ClickableElement = AddTextNode(TagEmptyElement,'','Clickable') ;
    ClickableElement.id = 'div_empty_' + IDCounter;   
    AddTextNode(TagEmptyElement,'<','Utility') ;
    AddTextNode(TagEmptyElement,RootNode.nodeName ,'NodeName') 
    for (var i = 0; RootNode.attributes && i < RootNode.attributes.length; ++i) {
      CurrentAttribute  = RootNode.attributes.item(i);
      AddTextNode(TagEmptyElement,' ' + CurrentAttribute.nodeName ,'AttributeName') ;
      AddTextNode(TagEmptyElement,'=','Utility') ;
      AddTextNode(TagEmptyElement,'"' + CurrentAttribute.nodeValue + '"','AttributeValue') ;
    }
    AddTextNode(TagEmptyElement,' />') ;
    xmlHolderElement.appendChild(TagEmptyElement);  
    //SetVisibility(TagEmptyElement,true);    
  }
  else { // mo child nodes
    
    var ClickableElement = AddTextNode(TagEmptyElement,'+','Clickable') ;
    ClickableElement.onclick  = function() {ToggleElementVisibility(this); }
    ClickableElement.id = 'div_empty_' + IDCounter; 
    
    AddTextNode(TagEmptyElement,'<','Utility') ;
    AddTextNode(TagEmptyElement,RootNode.nodeName ,'NodeName') 
    for (var i = 0; RootNode.attributes && i < RootNode.attributes.length; ++i) {
      CurrentAttribute  = RootNode.attributes.item(i);
      AddTextNode(TagEmptyElement,' ' + CurrentAttribute.nodeName ,'AttributeName') ;
      AddTextNode(TagEmptyElement,'=','Utility') ;
      AddTextNode(TagEmptyElement,'"' + CurrentAttribute.nodeValue + '"','AttributeValue') ;
    }

    AddTextNode(TagEmptyElement,'>  </','Utility') ;
    AddTextNode(TagEmptyElement,RootNode.nodeName,'NodeName') ;
    AddTextNode(TagEmptyElement,'>','Utility') ;
    xmlHolderElement.appendChild(TagEmptyElement);  
    SetVisibility(TagEmptyElement,false);
    //----------------------------------------------
    
    var TagElement = document.createElement('div');
    TagElement.className = 'Element';
    TagElement.id="Element"
    TagElement.style.position = 'relative';
    TagElement.style.left = NestingIndent+'px';
    //TagElement.style.display='inline-flex';  
    ClickableElement = AddTextNode(TagElement,'-','Clickable') ;
    ClickableElement.onclick  = function() {ToggleElementVisibility(this); }
    ClickableElement.id = 'div_content_' + IDCounter;   
    ++IDCounter;
    AddTextNode(TagElement,'<','Utility') ;
    AddTextNode(TagElement,RootNode.nodeName ,'NodeName') ;
    
    for (var i = 0; RootNode.attributes && i < RootNode.attributes.length; ++i) {
        CurrentAttribute  = RootNode.attributes.item(i);
        AddTextNode(TagElement,' ' + CurrentAttribute.nodeName ,'AttributeName') ;
        AddTextNode(TagElement,'=','Utility') ;
        AddTextNode(TagElement,'"' + CurrentAttribute.nodeValue + '"','AttributeValue') ;
    }
    AddTextNode(TagElement,'>','Utility') ;
    TagElement.appendChild(document.createElement('br'));
    var NodeContent = null;
    for (var i = 0; RootNode.childNodes && i < RootNode.childNodes.length; ++i) {
      if (RootNode.childNodes.item(i).nodeName != '#text') {
        Result &= ShowXML(TagElement,RootNode.childNodes.item(i),indent+1);
      }
      else {
        NodeContent =RootNode.childNodes.item(i).nodeValue;
      }         
    }     
    if (RootNode.nodeValue) {
      NodeContent = RootNode.nodeValue;
    }
    if (NodeContent) {  
      var ContentElement = document.createElement('div');
      ContentElement.style.position = 'relative';
      ContentElement.style.left = NestingIndent+'px';
      //ContentElement.style.display='inline-flex';     
      AddTextNode(ContentElement,NodeContent ,'NodeValue') ;
      TagElement.appendChild(ContentElement);
    }     
    AddTextNode(TagElement,'  </','Utility') ;
    AddTextNode(TagElement,RootNode.nodeName,'NodeName') ;
    AddTextNode(TagElement,'>','Utility') ;
    xmlHolderElement.appendChild(TagElement); 
  }
  
  // if (indent==0) { ToggleElementVisibility(TagElement.childNodes(0)); } ///- uncomment to collapse the external element
  return Result;
}
function AddTextNode(ParentNode,Text,Class) 
{
  NewNode = document.createElement('span');
  if (Class) {  NewNode.className  = Class;}
  if (Text) { NewNode.appendChild(document.createTextNode(Text)); }
  if (ParentNode) { ParentNode.appendChild(NewNode); }
  return NewNode;   
}
function CompatibleGetElementByID(id)
{
  if (!id) { return null; }
  if (document.getElementById) { // DOM3 = IE5, NS6
    return document.getElementById(id);
  }
  else {
    if (document.layers) { // Netscape 4
      return document.id;
    }
    else { // IE 4
      return document.all.id;
    }
  }
}
function SetVisibility(HTMLElement,Visible)
{
  if (!HTMLElement) { return; }
  var VisibilityStr  = (Visible) ? 'block' : 'none';
  if (document.getElementById) { // DOM3 = IE5, NS6
    HTMLElement.style.display =VisibilityStr; 
  }
  else {
    if (document.layers) { // Netscape 4
      HTMLElement.display = VisibilityStr; 
    }
    else { // IE 4
      HTMLElement.id.style.display = VisibilityStr; 
    }
  }
}
function ToggleElementVisibility(Element)
{
  if (!Element|| !Element.id) { return; }
  try {
    ElementType = Element.id.slice(0,Element.id.lastIndexOf('_')+1);
    ElementID = parseInt(Element.id.slice(Element.id.lastIndexOf('_')+1));
  }
  catch(e) { return ; }
  var ElementToHide = null;
  var ElementToShow= null;
  if (ElementType=='div_content_') {
    ElementToHide = 'div_content_' + ElementID;
    ElementToShow = 'div_empty_' + ElementID;
  }
  else if (ElementType=='div_empty_') {
    ElementToShow= 'div_content_' + ElementID;
    ElementToHide  = 'div_empty_' + ElementID;
  }
  ElementToHide = CompatibleGetElementByID(ElementToHide);
  ElementToShow = CompatibleGetElementByID(ElementToShow);
  if (ElementToHide) { ElementToHide = ElementToHide.parentNode;}
  if (ElementToShow) { ElementToShow = ElementToShow.parentNode;}
  SetVisibility(ElementToHide,false);
  SetVisibility(ElementToShow,true);
}














///////////////////////////////////////////////////////////////////////Below is for local development and will never be used in production/////////////////////////////////////////////




   /* -------------------Get XML from local for testing------------------- */
function LgrabFI() {


    var xml_file = "ajax/xml.xml";
    $.ajax({
        type: "GET",
        url: xml_file,
        dataType: "xml",
        success: localgetFI
    });


}

   /* ---------------------------------------------------------------------- */
function localgetFI(xml) {


  var informix = xml.getElementsByTagName("informix")[0].childNodes[0].nodeValue;
  var swimlane = xml.getElementsByTagName("swimlane")[0].childNodes[0].nodeValue;
  var datacenter = xml.getElementsByTagName("datacenter")[0].childNodes[0].nodeValue;
  var ibdomain = xml.getElementsByTagName("ibdomain")[0].childNodes[0].nodeValue;
  var backend_dir = xml.getElementsByTagName("backend_dir")[0].childNodes[0].nodeValue;
  var fiport = xml.getElementsByTagName("fiport")[0].childNodes[0].nodeValue;
  var rdbport = xml.getElementsByTagName("rdbport")[0].childNodes[0].nodeValue;
     // var fiport = xml.getElementsByTagName("fiport")[0].childNodes[0].nodeValue;

//console.log(guid+" "+memnum);

//////////Populate inputs with returning data///////////
  document.getElementById("informix").value = informix;
  document.getElementById("swimlane").value = swimlane;
  document.getElementById("datacenter").value = datacenter;
  document.getElementById("ibdomain").value = ibdomain;
  document.getElementById("backend_dir").value = backend_dir;
  document.getElementById("fiport").value = fiport;
  document.getElementById("rdbport").value = rdbport;
  //document.getElementById("swimlane").value = swimlane;

}


function Lgrabmem() {


    var xml_file = "ajax/getmem.xml";
    $.ajax({
        type: "GET",
        url: xml_file,
        dataType: "xml",
        success: localgetmem
    });


}

   /* ---------------------------------------------------------------------- */
function localgetmem(xml) {


  var guid = xml.getElementsByTagName("ns5:id")[0].childNodes[0].nodeValue;
  var name = xml.getElementsByTagName("ns5:name")[0].childNodes[0].nodeValue;
  var loginId = xml.getElementsByTagName("ns4:loginId")[1].childNodes[0].nodeValue;
  var emailAddress = xml.getElementsByTagName("ns4:emailAddress")[0].childNodes[0].nodeValue;
  var statusCode = xml.getElementsByTagName("ns5:statusCode")[1].childNodes[0].nodeValue;
 // var fiport = xml.getElementsByTagName("fiport")[0].childNodes[0].nodeValue;
  //var rdbport = xml.getElementsByTagName("rdbport")[0].childNodes[0].nodeValue;
 //var tt = xml.getElementsByTagName("ns4:loginId")[1].childNodes[0].nodeValue;

//console.log(tt);

//////////Populate inputs with returning data///////////
  document.getElementById("id").value = guid;
  document.getElementById("loginId").value = loginId;
  document.getElementById("emailAddress").value = emailAddress;
  document.getElementById("statusCode").value = statusCode;
 // document.getElementById("backend_dir").value = backend_dir;
 // document.getElementById("fiport").value = fiport;
 // document.getElementById("rdbport").value = rdbport;
  //document.getElementById("swimlane").value = swimlane;

}
