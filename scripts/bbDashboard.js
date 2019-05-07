  ///Tools page main div and menu 

  function bbDashboard(){


  document.getElementById('bbDashboardBut').style.backgroundColor="#41a65b";
  document.getElementById('queriesBut').style.backgroundColor="";
  document.getElementById('defectsBut').style.backgroundColor="";
  document.getElementById('getInfoBut').style.backgroundColor="";
  document.getElementById('toolsBut').style.backgroundColor="";
  document.getElementById("moreLinks").style.display= "none";//Hide more links
  document.getElementById("NewUpdates").style.display= "none";//Hide New Updates
  document.getElementById("infobody").style.display= "none";
  document.getElementById("inputData").style.display= "none";
  document.getElementById("queryParentTOP").style.display= "none";
  document.getElementById("BodyDiv").style.display= "block";
      
      var defectsTopDev = document.getElementById('BodyDiv');
   // var DefectbodyTop1 = document.getElementById('myContainer');                ///
      if(defectsTopDev.hasChildNodes()){                                        /// Checks if......
      defectsTopDev.removeChild(defectsTopDev.childNodes[0]);}                   ///


      var BBdashTopParent = document.createElement('div');
      BBdashTopParent.id="BBdashTopParent";
      BBdashTopParent.className = "defectTopParent";
      defectsTopDev.appendChild(BBdashTopParent); 


      var defectParent = document.createElement('div');
      defectParent.id="defectParent";
      defectParent.className = "defectParent";
      BBdashTopParent.appendChild(defectParent); 


      var BBdashTopDiv = document.createElement('div');
      BBdashTopDiv.className = "BBdashTopDiv";
      defectParent.appendChild(BBdashTopDiv); 

      /* DELETE IF NOT USED
      var ToolsButtonsDiv = document.createElement('div');
      ToolsButtonsDiv.className = "ToolsButtons";
      defectParent.appendChild(ToolsButtonsDiv); */


               ////Line divider 
        var SearchBisDiv = document.createElement('div');
        SearchBisDiv.id="SearchBisDiv";
        SearchBisDiv.className="SearchBisDiv";
        BBdashTopDiv.appendChild(SearchBisDiv);

              //button to create a new search
        var EnterinfoDiv = document.createElement('div');
        EnterinfoDiv.appendChild(document.createTextNode('Please enter FI Id and Company Id or Username'))
        SearchBisDiv.appendChild(EnterinfoDiv);

                 ////Line divider 
        var admin_menu = document.createElement('div');
        admin_menu.className="BBLineBar";
        SearchBisDiv.appendChild(admin_menu);


        //button to create a new search
        var inputFiNum = document.createElement('input');
        inputFiNum.id='BBfiId';
        inputFiNum.className='BBinput';
        inputFiNum.placeholder='FI Id';
        inputFiNum.name='BBvalidate';
       // inputFiNum.value="1556";  ////UNCOMMENT ONLY FOR TESTING!!  7413,1556
        SearchBisDiv.appendChild(inputFiNum);

        //button to create a new search
        var inputBisNum = document.createElement('input');
        inputBisNum.id='BBbusId';
        inputBisNum.className='BBinput';
        inputBisNum.placeholder='Company Id Or Userame';
        inputBisNum.name ='BBvalidate';
       // inputBisNum.value="5794587847"; ////UNCOMMENT ONLY FOR TESTING!! 2626454810,5794587847
        SearchBisDiv.appendChild(inputBisNum);

////////////////////////////////////////////////////Submit request when pressing Enter on keyboard//////////////////////////////////////
        document.getElementById("BBfiId")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById("BBbusbutton").click();
          }
      });

            document.getElementById("BBbusId")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById("BBbusbutton").click();
          }
      });
/////////////////////////////////////////////////////////////////END//////////////////////////////////////

        //button to create a new search
        var add_search_but = document.createElement('div');
        add_search_but.id = "BBbusbutton";
        add_search_but.className='BBSearchBut';
        add_search_but.appendChild(document.createTextNode('Search'))
        add_search_but.onclick=function(){    

          var chks = document.getElementsByName('BBvalidate');                    
          for (var i = 0; i < chks.length; i++)  {       
          if (chks[i].value == "") {

             chks[i].style.borderColor = '#41a65b';  
            chks[i].style.borderWidth = '6px'; 
            chks[i].focus();
            chks[i].style.borderColor = '#41a65b'; 

            //Please Enter 4-Digit FI number
            return false
          }//if loop end 
          } //For loop end

          var BBfiId = document.getElementById('BBfiId').value;
          var BBbusId = document.getElementById('BBbusId').value;

  
         var element = document.getElementById("ResultBisDiv");              ///
         var element1 = document.getElementById("ResultAdminsDiv"); 
         var element2 = document.getElementById("ResultsegDiv");
         var element3 = document.getElementById("ResultLocationDiv");
         var element4 = document.getElementById("ResultaccntsXmlDiv");
       //  var element5 = document.getElementById("ResultaccntsXmlDiv");     
         if(element.hasChildNodes()){                                        /// Checks if there are results and removed them 
            element.removeChild(element.childNodes[0]);
            element1.removeChild(element1.childNodes[0]);
            element1.removeChild(element1.childNodes[0]);
            element2.removeChild(element2.childNodes[0]);
            element2.removeChild(element2.childNodes[0]);
            element3.removeChild(element3.childNodes[0]);      
            element3.removeChild(element3.childNodes[0]);
            element3.removeChild(element3.childNodes[0]);  
            element4.removeChild(element4.childNodes[0]);                ///
            element4.removeChild(element4.childNodes[0]);  
            element4.removeChild(element4.childNodes[0]);  
          }

        grabFIBB(BBfiId,BBbusId);    

        }
        SearchBisDiv.appendChild(add_search_but);


               ////Div to appned results to.
        var ResultBisDiv = document.createElement('div');
        ResultBisDiv.id="ResultBisDiv";
        ResultBisDiv.className="ResultBisDiv";
        defectParent.appendChild(ResultBisDiv);

        var ResultLocationDiv = document.createElement('div');
        ResultLocationDiv.id="ResultLocationDiv";
        ResultLocationDiv.className="ResultLocationDiv";
        defectParent.appendChild(ResultLocationDiv);

        var ResultaccntsXmlDiv = document.createElement('div');
        ResultaccntsXmlDiv.id="ResultaccntsXmlDiv";
        ResultaccntsXmlDiv.className="ResultaccntsXmlDiv";
        defectParent.appendChild(ResultaccntsXmlDiv);

        var ResultAdminsDiv = document.createElement('div');
        ResultAdminsDiv.id="ResultAdminsDiv";
        ResultAdminsDiv.className="BBResultAdminsDiv";
        defectParent.appendChild(ResultAdminsDiv);

        var ResultsegDiv = document.createElement('div');
        ResultsegDiv.id="ResultsegDiv";
        ResultsegDiv.className="BBResultsegDiv";
        defectParent.appendChild(ResultsegDiv);



      }


      function grabFIBB(BBfiId,BBbusId){
  var parrotDiv = document.getElementById('SearchBisDiv');      

  var loderDiv = document.createElement('div');
  loderDiv.id="loderDiv";
  // loderDiv.src ="img/logo.png";
  loderDiv.className= "loderDiv";
  parrotDiv.appendChild(loderDiv);

  var loaderImg = document.createElement('div');
 // loaderImg.id="ls_loader";
 // loaderImg.src ="img/trash.png";
  loaderImg.className= "BBloader";
  loderDiv.appendChild(loaderImg);

//live: http://anprd10utlge003.dca.diginsite.net/TSX/php/
//localhost http://localhost/www2/ToolKitAjax/ToolKit/ajax/grabFI.php

      $.ajax({
      type:"POST",
     // url:"http://anprd10utlge003.dca.diginsite.net/ToolKitBeta/ajax/grabFIBB.php",
      url:"http://127.0.0.1/www2/ToolKit/ajax/grabFIBB.php",
      data: {
              fiid:BBfiId,
              BBbusId:BBbusId
            },
      success:function(result){
//  console.log(result);
        var xmlString = objectToXml(result);
       // console.log(xmlString);
        BussinessResults(xmlString);

      },
error:function(xhr, status, error){
        var errorMessage = xhr.status + ': ' + xhr.statusText;
         console.log('Error - ' + errorMessage);
}
})
      }



/*----------------------------------
    function    :   xml_attributes_to_object(node_in)
    description :   takes XML node and returns object with properties set as attribute names and property values set 
                    with coresponding attribute value 
                    saves time when user knows names of attribnutes they need
    
----------------------------------*/
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



   /* ---------------------------------------- */
function LgetFI(fiid) {


var data = '[{"status": "Live", "domain: "www.nuvisionfederal.org", "name": "NuVision Federal Credit Union", "fiid": "3383", "dc": "dca", "udb": 73850, "sl": "sl3"}]';

var xml = objectToXml(data);

console.log(xml);

  var info = new window.DOMParser().parseFromString(xml, "text/xml");

  var status = info.getElementsByTagName("status")[0].childNodes[0].nodeValue;
  var domain = info.getElementsByTagName("domain")[0].childNodes[0].nodeValue;
  var name  = info.getElementsByTagName("name")[0].childNodes[0].nodeValue;



console.log(status+domain);


}




function BussinessResults(xml) {

  var info = new window.DOMParser().parseFromString(xml, "text/xml");

  var diid = info.getElementsByTagName("diid")[0].childNodes[0].nodeValue;
  var swimlane = info.getElementsByTagName("swimlane")[0].childNodes[0].nodeValue;
  var companyId = info.getElementsByTagName("companyId")[0].childNodes[0].nodeValue;
  var companyName = info.getElementsByTagName("companyName")[0].childNodes[0].nodeValue;
  var SegmentId = info.getElementsByTagName("segmentId")[0].childNodes[0].nodeValue;
  var SegmentName = info.getElementsByTagName("segmentName")[0].childNodes[0].nodeValue;
 // var destination  = info.getElementsByTagName("destination")[0].childNodes[0].nodeValue;

  var ResultsBody = document.getElementById("ResultBisDiv");

   var elementLoder = document.getElementById("loderDiv");
  elementLoder.parentNode.removeChild(elementLoder);   ///Remove parrot

  var ResultBodyDiv = document.createElement('div');
  ResultBodyDiv.className="BBResultBodyDiv";
  //ResultBodyDiv.appendChild(document.createTextNode("Results are below"));
  ResultsBody.appendChild(ResultBodyDiv);

  var ResultTitleDivFItop = document.createElement('div');
  ResultTitleDivFItop.className="ResultTitleDivFItop";
  ResultBodyDiv.appendChild(ResultTitleDivFItop);

  var ResultTitleDivFI = document.createElement('div');
  ResultTitleDivFI.appendChild(document.createTextNode("FI: "));
  ResultTitleDivFI.className="BBResultTitle";
  ResultTitleDivFItop.appendChild(ResultTitleDivFI);
  var ResultTitleDivFI = document.createElement('div');
  ResultTitleDivFI.appendChild(document.createTextNode(diid));
  ResultTitleDivFI.className="BBResultTitleresult";
  ResultTitleDivFItop.appendChild(ResultTitleDivFI);



      var ResultTitleDivIDtop = document.createElement('div');
  ResultTitleDivIDtop.className="ResultTitleDivFItop";
  ResultBodyDiv.appendChild(ResultTitleDivIDtop);

  var ResultTitleDivID = document.createElement('div');
  ResultTitleDivID.appendChild(document.createTextNode("Company Id: "));
  ResultTitleDivID.className="BBResultTitle";
  ResultTitleDivIDtop.appendChild(ResultTitleDivID);
    var ResultTitleDivID = document.createElement('div');
  ResultTitleDivID.appendChild(document.createTextNode(companyId));
  ResultTitleDivID.className="BBResultTitleresult";
  ResultTitleDivIDtop.appendChild(ResultTitleDivID);


      var ResultTitleDivNametop = document.createElement('div');
  ResultTitleDivNametop.className="ResultTitleDivFItop";
  ResultBodyDiv.appendChild(ResultTitleDivNametop);

  var ResultTitleDivName = document.createElement('div');
  ResultTitleDivName.appendChild(document.createTextNode("Company Name: "));
  ResultTitleDivName.className="BBResultTitle";
  ResultTitleDivNametop.appendChild(ResultTitleDivName);
  var ResultTitleDivName = document.createElement('div');
  ResultTitleDivName.appendChild(document.createTextNode(companyName));
  ResultTitleDivName.className="BBResultTitleresult";
  ResultTitleDivNametop.appendChild(ResultTitleDivName);


      var ResultTitleDivsltop = document.createElement('div');
  ResultTitleDivsltop.className="ResultTitleDivFItop";
  ResultBodyDiv.appendChild(ResultTitleDivsltop);

    var ResultTitleDivsl = document.createElement('div');
  ResultTitleDivsl.appendChild(document.createTextNode("Swim Lane: "));
  ResultTitleDivsl.className="BBResultTitle";
  ResultTitleDivsltop.appendChild(ResultTitleDivsl);
    var ResultTitleDivsl = document.createElement('div');
  ResultTitleDivsl.appendChild(document.createTextNode(swimlane));
  ResultTitleDivsl.className="BBResultTitleresult";
  ResultTitleDivsltop.appendChild(ResultTitleDivsl);



/////////////////////////////////////////////////////////////////////LOCATION INFO/////////////////////////////////////////////////////////

 // var info = new window.DOMParser().parseFromString(xmlFI, "text/xml");
 var ResultLocationDiv = document.getElementById("ResultLocationDiv");


  var ResultlocationtextDiv = document.createElement('div');
  ResultlocationtextDiv.appendChild(document.createTextNode('Location'));
  ResultlocationtextDiv.className="BBResultASegtextDiv";
  ResultLocationDiv.appendChild(ResultlocationtextDiv);
   

  var ls_report_main_usr = document.createElement('div');
  ls_report_main_usr.id="ls_report_main_usr";
  ls_report_main_usr.className= "ls_report_main_usr";
  ResultLocationDiv.appendChild(ls_report_main_usr);
 
    //create div for table
  var location_tableDiv=document.createElement('div');
  location_tableDiv.className="location_tableDiv";
  ls_report_main_usr.appendChild(location_tableDiv);

    //create / append table
    var table = document.createElement('table');
    //table.className="TableTR";
    table.id="table_usr";
    location_tableDiv.appendChild(table);


 
    //create / append tr
    var tr = document.createElement('tr');
    tr.className="BBTableAdminsHeader";
    table.appendChild(tr);


    var td = document.createElement('td');
    td.appendChild(document.createTextNode('CIS'));
    td.className="locationTableHeader";
    tr.appendChild(td);




    var td = document.createElement('td');
    td.appendChild(document.createTextNode('GUID'));
    td.className="locationTableHeader";
    tr.appendChild(td);



    var td = document.createElement('td');
    td.appendChild(document.createTextNode('Name'));
    td.className="locationTableHeader";
    tr.appendChild(td);



    var td = document.createElement('td');
    td.appendChild(document.createTextNode('TIN'));
    td.className="locationTableHeader";
    tr.appendChild(td);

    var td = document.createElement('td');
    td.appendChild(document.createTextNode('Accounts'));
    td.className="locationTableHeader";
    tr.appendChild(td);

       rooti = info.getElementsByTagName("location");

    for(var i=0; i<rooti.length;i++){

    //create / append tr
    var tr = document.createElement('tr');
   table.appendChild(tr);

     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[3].innerHTML));
    tr.appendChild(td);

        //create / append td B_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[0].innerHTML));
    tr.appendChild(td);

        //create / append td B_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[1].innerHTML));
    tr.appendChild(td);

         //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[2].innerHTML));
    tr.appendChild(td);

    var td = document.createElement('td');
    td.appendChild(document.createTextNode("View Xml"));
    td.id=rooti[i].childNodes[0].innerHTML;
    td.className="BBviewXMLButton";
    td.onclick=function(){
    grabaccntsBB(swimlane,"dca",diid,this.id);
    //this.style.display = "none";
    document.getElementById('memberInfoLoader2').style.display= "block"; 
    document.getElementById('themeselecttopDiv').style.display= "block";
    document.getElementById('themeselecttopDivH').style.display= "block";    
    
    }
    tr.appendChild(td);
}

 ///////////////////////Loader//////////////////////////////

     var loaderImg = document.createElement('div');
      loaderImg.id="memberInfoLoader2";
      loaderImg.style.display= "none";
      loaderImg.className= "loader2";
      ResultLocationDiv.appendChild(loaderImg);

////////////////////////////////////////////////////////////HIDE//////////////////////////////////////////////////////////
   var themeselecttopParentDiv = document.createElement('div');
        themeselecttopParentDiv.className="themeselecttopParentDiv";
        themeselecttopParentDiv.id="themeselecttopParentDiv";
        ResultaccntsXmlDiv.appendChild(themeselecttopParentDiv);

        var themeselecttopDiv = document.createElement('div');
        themeselecttopDiv.className="BBcontainer";
        themeselecttopDiv.style.display= "none";
        themeselecttopDiv.id="themeselecttopDivH";
        themeselecttopParentDiv.appendChild(themeselecttopDiv);

///////////////////////Theme Selector//////////////////////////////


      var lights = document.createElement('div');
      lights.appendChild(document.createTextNode('Hide'))
      lights.className= "hide";
      themeselecttopDiv.appendChild(lights);


      var themeSelectBut1 = document.createElement('input');
      themeSelectBut1.id="BBtoggle";
      themeSelectBut1.type = "checkbox";
     //  themeSelectBut1.style.display= "none";
      themeSelectBut1.onclick=function(){
       var check = this.checked;
       if (check){
     // document.getElementById("themeselecttopDiv").style.display= "none";  
      document.getElementById("ResultshowXmlDiv").style.display= "none";      
       }else{

      document.getElementById("themeselecttopDiv").style.display= "block";  
      document.getElementById("ResultshowXmlDiv").style.display= "block";       
       }

          }
      themeSelectBut1.className= "BBtoggle";
      themeselecttopDiv.appendChild(themeSelectBut1);

      var themeSelectlabel = document.createElement('label');
      themeSelectlabel.id="BBlabel";
      themeSelectlabel.htmlFor= "BBtoggle";
      themeselecttopDiv.appendChild(themeSelectlabel);

      var themeSelectBut2 = document.createElement('div');
      themeSelectBut2.id="BBswitch";
      themeSelectlabel.appendChild(themeSelectBut2);




///////////////////////////////////////////////////////////Show get accounts XML div////////////////////////////////////////////////////////////
  /* var getcusMenutopDiv = document.createElement('div');
        getcusMenutopDiv.className="getcusMenutopDiv";
        getcusMenutopDiv.id="getcusMenutopDiv";
        ResultaccntsXmlDiv.appendChild(getcusMenutopDiv);*/

        var themeselecttopDiv = document.createElement('div');
        themeselecttopDiv.className="container";
        themeselecttopDiv.style.display= "none";
        themeselecttopDiv.id="themeselecttopDiv";
        ResultaccntsXmlDiv.appendChild(themeselecttopDiv);

///////////////////////Theme Selector//////////////////////////////


      var lights = document.createElement('div');
      lights.appendChild(document.createTextNode('Lights'))
      lights.className= "lights";
      themeselecttopDiv.appendChild(lights);


      var themeSelectBut1 = document.createElement('input');
      themeSelectBut1.id="toggle";
      themeSelectBut1.type = "checkbox";
    //  themeSelectBut1.style.display= "none";
    themeSelectBut1.onclick=function(){
       var check = this.checked;
       if (check){
      document.getElementById("ResultshowXmlDiv").className = "xmlTopParentDivDark";     
       }else{

      document.getElementById("ResultshowXmlDiv").className = "xmlTopParentDiv";     
       }

          }
      themeSelectBut1.className= "toggle";
      themeselecttopDiv.appendChild(themeSelectBut1);

      var themeSelectlabel = document.createElement('label');
      themeSelectlabel.id="label";
      themeSelectlabel.htmlFor= "toggle";
      themeselecttopDiv.appendChild(themeSelectlabel);

     var themeSelectBut2 = document.createElement('div');
     themeSelectBut2.id="switch";
      themeSelectlabel.appendChild(themeSelectBut2);
////////////////////////////////////////////////////////////////////////////////////////////////////

  var ResultshowXmlDiv = document.createElement('div');
  ResultshowXmlDiv.id="ResultshowXmlDiv";
  ResultshowXmlDiv.className="xmlTopParentDiv";
  ResultaccntsXmlDiv.appendChild(ResultshowXmlDiv);

////////////////////////////////////////////////////////////////START ADMIN INFO/////////////////////////////////
     //get div where to append content
  var ResultAdminsDiv = document.getElementById("ResultAdminsDiv");
  var ResultsegDiv = document.getElementById("ResultsegDiv");
  
    
  var ResultAdminstextDiv = document.createElement('div');
  ResultAdminstextDiv.appendChild(document.createTextNode('Admin'));
  ResultAdminstextDiv.className="BBResultAdminstextDiv";
  ResultAdminsDiv.appendChild(ResultAdminstextDiv);


  var adminTableTopDiv = document.createElement('div');
  ResultAdminsDiv.appendChild(adminTableTopDiv);


    //create div for table
  var ls_sl_table_usr=document.createElement('div');
  ls_sl_table_usr.className="ls_sl_table_usr";
  adminTableTopDiv.appendChild(ls_sl_table_usr);

 
    //create / append table
    var table = document.createElement('table');
    table.className="TableTR";
    table.id="table_usr";
    ls_sl_table_usr.appendChild(table);
    //create / append tr
    var tr = document.createElement('tr');
    tr.className="BBTableAdminsHeader";
    table.appendChild(tr);
 
     //create / append td L_BUILDING
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('User Name'));
    td.className="defect";
    tr.appendChild(td);
 
    //create / append td L_ROOM
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('Role'));
    tr.appendChild(td);
 
    //create / append td SSO
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('First Name'));
    tr.appendChild(td);

        //create / append td date created
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('Last Name'));
    tr.appendChild(td);


     var td = document.createElement('td');
     td.appendChild(document.createTextNode('Email'));
     tr.appendChild(td);


     /*var td = document.createElement('td');
     td.appendChild(document.createTextNode('Phone Number'))
     tr.appendChild(td);*/

     var td = document.createElement('td');
     td.appendChild(document.createTextNode('Auth ID'))
     tr.appendChild(td);

    /* var td = document.createElement('td');
     td.appendChild(document.createTextNode('GUID'))
     tr.appendChild(td);*/

     var td = document.createElement('td');
     td.appendChild(document.createTextNode('MFA'))
     td.className="BBmfaviewButton";
     tr.appendChild(td);

   adminsi = info.getElementsByTagName("person");
 

    for(var i=0; i<adminsi.length;i++){

 
    //create / append tr
    var tr = document.createElement('tr');
   table.appendChild(tr);

// 
    //create / append td B_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(adminsi[i].childNodes[0].innerHTML));
    tr.appendChild(td);
 
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(adminsi[i].childNodes[1].innerHTML));
    tr.appendChild(td);
 
     //create / append td date created
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(adminsi[i].childNodes[2].innerHTML));
    tr.appendChild(td);

 
    //create / append td S_ACTIVE
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(adminsi[i].childNodes[3].innerHTML));
    tr.appendChild(td);

        var td = document.createElement('td');
    td.appendChild(document.createTextNode(adminsi[i].childNodes[4].innerHTML));
    tr.appendChild(td);

            var td = document.createElement('td');
    td.appendChild(document.createTextNode(adminsi[i].childNodes[5].innerHTML));
    tr.appendChild(td);

   
        var td = document.createElement('td');
    td.appendChild(document.createTextNode("View"));
    td.className="BBmfaviewButton";
    td.onclick=function(){
    viewMFA(this.id,xml);
    }
   td.id =adminsi[i].childNodes[5].innerHTML;
    tr.appendChild(td);

}
//////////////////////////////////////////////////////End Admin Info/////////////////////////////////////////
//////////////////////////////////////////////////////Start Segment Info////////////////////////////////////
  var SegmentBodyDiv = document.createElement('div');
  SegmentBodyDiv.className="BBSegmentBodyDiv";
  ResultsegDiv.appendChild(SegmentBodyDiv);

  var ResultAdminstextDiv = document.createElement('div');
  ResultAdminstextDiv.appendChild(document.createTextNode('Segment'));
  ResultAdminstextDiv.className="BBResultASegtextDiv";
  SegmentBodyDiv.appendChild(ResultAdminstextDiv);

  var ResultTitleDiv = document.createElement('div');
  ResultTitleDiv.appendChild(document.createTextNode("Segment Id: "+SegmentId));
  ResultTitleDiv.className="BBResultTitleDiv";
  SegmentBodyDiv.appendChild(ResultTitleDiv);

  var ResultTitleDiv = document.createElement('div');
  ResultTitleDiv.appendChild(document.createTextNode("Segment Name: "+SegmentName));
  ResultTitleDiv.className="BBResultTitleDiv";
  SegmentBodyDiv.appendChild(ResultTitleDiv);


  var ls_report_main_usr = document.createElement('div');
  ls_report_main_usr.id="ls_report_main_usr";
  ls_report_main_usr.className= "ls_report_main_usr";
  ResultsegDiv.appendChild(ls_report_main_usr);
 
    //create div for table
  var ls_sl_table_usr=document.createElement('div');
  ls_sl_table_usr.className="ls_sl_table_usr";
  ls_report_main_usr.appendChild(ls_sl_table_usr);

    //create / append table
    var table = document.createElement('table');
    table.className="TableTR";
    table.id="table_usr";
    ls_sl_table_usr.appendChild(table);
    //create / append tr
    var tr = document.createElement('tr');
    tr.className="BBTableSegmentHeader";
    table.appendChild(tr);
 
     //create / append td 
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('Appcode Id'));
    td.className="defect";
    tr.appendChild(td);
 
    //create / append td 
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('Appcode Name'));
    tr.appendChild(td);
 
   appcodei = info.getElementsByTagName("appcode");

    for(var i=0; i<appcodei.length;i++){

 
    //create / append tr
    var tr = document.createElement('tr');
   table.appendChild(tr);

// 
    //create / append td B_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(appcodei[i].childNodes[0].innerHTML));
    tr.appendChild(td);
 
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(appcodei[i].childNodes[1].innerHTML));
    tr.appendChild(td);
 

}

  document.getElementById('BBfiId').value = "";
  document.getElementById('BBbusId').value = "";

}



   function viewMFA(mfa,xml){
  var info = new window.DOMParser().parseFromString(xml, "text/xml");
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
  var input_names = document.createElement('form');
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
  AvarageMealTop.id ="QRAvarageMealTop";
  AvarageMealTop.style.display ='block';
  AvarageMealTop.className ="QRHeaderTop";
  addQrsTopDiv.appendChild(AvarageMealTop);


   AvarageMealTopTwo =document.createElement('div');
  AvarageMealTopTwo.className ="HeaderTopTwo";
  AvarageMealTop.appendChild(AvarageMealTopTwo);

  var addStoreSecdiv = document.createElement('div');
  addStoreSecdiv.id="addStoreSecdiv";
  addStoreSecdiv.className= 'addStoreSecdiv';
  AvarageMealTopTwo.appendChild(addStoreSecdiv);
  
     //create header s
///////////////////////////////////////////////////////////////////////////////////////////// 
     //create a div for inputs 
  var storeIdDiv = document.createElement('div');
  storeIdDiv.className= "BBmfaInfoTopdiv";
  addStoreSecdiv.appendChild(storeIdDiv);

/////////////////////////////////////////////////////////////////////////////////////////////
  destinationi = info.getElementsByTagName("destination");
     //create a div for inputs 
    for(var i=0; i<destinationi.length;i++){
if (mfa == destinationi[i].childNodes[0].innerHTML){

  var storeIdDivdata = document.createElement('div');
  storeIdDivdata.className= "storeIdDivdata";
  storeIdDivdata.appendChild(document.createTextNode("MFA id: "+ destinationi[i].childNodes[1].innerHTML));
  storeIdDiv.appendChild(storeIdDivdata);

  var storeIdDivdata = document.createElement('div');
  storeIdDivdata.className= "storeIdDivdata";
  storeIdDivdata.appendChild(document.createTextNode("Contact Number: "+ destinationi[i].childNodes[2].innerHTML));
  storeIdDiv.appendChild(storeIdDivdata);

  var storeIdDivdata = document.createElement('div');
  storeIdDivdata.className= "storeIdDivdata";
  storeIdDivdata.appendChild(document.createTextNode("Protocol: "+ destinationi[i].childNodes[3].innerHTML));
  storeIdDiv.appendChild(storeIdDivdata);


  var storeIdDivdata = document.createElement('div');
  storeIdDivdata.className= "BBmfainfodiv";
  storeIdDivdata.appendChild(document.createTextNode("Auth Id: "+ destinationi[i].childNodes[0].innerHTML));
  storeIdDiv.appendChild(storeIdDivdata);



}
  }


   }







