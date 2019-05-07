function getInfo(){


document.getElementById('getInfoBut').style.backgroundColor="#41a65b";
document.getElementById('toolsBut').style.backgroundColor="";
document.getElementById('queriesBut').style.backgroundColor="";
document.getElementById('defectsBut').style.backgroundColor="";
document.getElementById('bbDashboardBut').style.backgroundColor="";
document.getElementById("moreLinks").style.display= "none";//Hide more links
document.getElementById("NewUpdates").style.display= "none";//Hide New Updates
document.getElementById("infobody").style.display= "none";
document.getElementById("inputData").style.display= "none";
document.getElementById("queryParentTOP").style.display= "none";
document.getElementById("BodyDiv").style.display= "block";
    
    var defectsTopDev = document.getElementById('BodyDiv');
 //	var DefectbodyTop1 = document.getElementById('myContainer');                ///
    if(defectsTopDev.hasChildNodes()){                                        /// Checks if 
    defectsTopDev.removeChild(defectsTopDev.childNodes[0]);
   // defectsTopDev.removeChild(defectsTopDev.childNodes[0]);
    }           
            ///
    var getInfoTop = document.createElement('div');
  //  getInfoTopParentS.className = "getInfoTopParentS";
    defectsTopDev.appendChild(getInfoTop); 

////////////////////////////////////////////////////Get info page selector/////////////////////////////////////////////////

    typeSelectDiv =document.createElement('div');
  typeSelectDiv.id='typeSelectDiv';
  typeSelectDiv.className ='typeSelectDiv';
  getInfoTop.appendChild(typeSelectDiv);

  var mulipleBut = document.createElement('div');
  mulipleBut.className='mulipleBut';
  mulipleBut.id= "mulipleBut";
  mulipleBut.appendChild(document.createTextNode('FI'))
  mulipleBut.onclick=function(){
  document.getElementById("annualBut").className = "annualBut";
  this.className = "mulipleButSelected";
  document.getElementById('SearchfiDiv').style.display= "block";
  document.getElementById('SearchMemDiv').style.display= "none";
  document.getElementById('getinfoResultsParent').style.display= "block";///////Hide Meber results when clicking on FI
  document.getElementById('getinfoMemResultsParent').style.display= "none";//////
      }
  typeSelectDiv.appendChild(mulipleBut);

  document.getElementById("mulipleBut").className = "mulipleButSelected";


  var annualBut = document.createElement('div');
  annualBut.className='annualBut';
  annualBut.id = "annualBut";
  annualBut.appendChild(document.createTextNode('Member'))
  annualBut.onclick=function(){
  document.getElementById("mulipleBut").className = "mulipleBut";
  this.className = "annualButSelected";

  document.getElementById('SearchfiDiv').style.display= "none";
  document.getElementById('getinfoResultsParent').style.display= "none";///////Hide Fi results when clicking on member 
  document.getElementById('getinfoMemResultsParent').style.display= "block";/////
  document.getElementById('SearchMemDiv').style.display= "block";



  count= 0;
  ///AnnualChart()

      }
    typeSelectDiv.appendChild(annualBut);


///////////////////////////////////////////////////////////ENF////////////////////////////////////////////////////////////


    var getInfoTopParentS = document.createElement('div');
    getInfoTopParentS.id="getInfoTopParentS";
    getInfoTopParentS.className = "getInfoTopParentS";
    getInfoTop.appendChild(getInfoTopParentS); 



    var getInfoTopParent = document.createElement('div');
    getInfoTopParent.id="getInfoTopParent";
    getInfoTopParent.className = "getInfoTopParent";
    getInfoTop.appendChild(getInfoTopParent); 

    var getinfoTopDiv = document.createElement('div');
    getinfoTopDiv.className = "getinfoTopDiv";
    getInfoTopParentS.appendChild(getinfoTopDiv); 


    var getinfoParent = document.createElement('div');
    getinfoParent.id="getinfoParent";
    getinfoParent.className = "getinfoParent";
    getInfoTopParent.appendChild(getinfoParent); 


    var getinfoResultsParent = document.createElement('div');
    getinfoResultsParent.id="getinfoResultsParent";
    getinfoResultsParent.className = "getinfoResultsParent";
    getinfoParent.appendChild(getinfoResultsParent); 

    var getinfoMemResultsParent = document.createElement('div');
    getinfoMemResultsParent.id="getinfoMemResultsParent";
    getinfoMemResultsParent.className = "getinfoResultsParent";
    getinfoParent.appendChild(getinfoMemResultsParent); 
////////////////////////////////////////////////////////////////Search FI div////////////////////////////////////////////////////////
               ////Line divider 
        var SearchfiDiv = document.createElement('div');
        SearchfiDiv.id="SearchfiDiv";
        SearchfiDiv.className="SearchfiDiv";
        getinfoTopDiv.appendChild(SearchfiDiv);

              //button to create a new search
        var EnterinfoDiv = document.createElement('div');
        EnterinfoDiv.className="EnterinfoDiv";
        EnterinfoDiv.appendChild(document.createTextNode('Enter FI Id'))
        SearchfiDiv.appendChild(EnterinfoDiv);

                 ////Line divider 
        var admin_menu = document.createElement('div');
        admin_menu.className="getInfoLineBar";
        SearchfiDiv.appendChild(admin_menu);


        //button to create a new search
        var inputFiNum = document.createElement('input');
        inputFiNum.id='InfofiId';
        inputFiNum.className='FInuminput';
        inputFiNum.placeholder='FI Id';
        inputFiNum.name='FIvalidate';
       // inputFiNum.value="1556";  ////UNCOMMENT ONLY FOR TESTING!!  7413,1556
        SearchfiDiv.appendChild(inputFiNum);


//////////////////////Submit request when pressing Enter on keyboard/////////
        document.getElementById("InfofiId")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById("FIsearchBut").click();
          }
      });
////////////////////////////////////END//////////////////////////////////////

        //button to create a new search
        var add_search_but = document.createElement('div');
        add_search_but.id = "FIsearchBut";
        add_search_but.className='InfoSearchBut';
        add_search_but.appendChild(document.createTextNode('Search'))
        add_search_but.onclick=function(){    

          var chks = document.getElementsByName('FIvalidate');                    
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

          var fiId = document.getElementById('InfofiId').value;

         var tableCount = document.getElementById('getinfoResultDiv').childElementCount;   

         if(tableCount > 2){  ////This will prevent more than 3 results to show for FI search.
              return false;
         }
        document.getElementById('FIInfoLoader').style.display= "block";///////show loader
            grabFI(1);
        }

 SearchfiDiv.appendChild(add_search_but);

       var loaderImg = document.createElement('div');
      loaderImg.id="FIInfoLoader";
      loaderImg.style.display= "none";
      loaderImg.className= "loader";
      SearchfiDiv.appendChild(loaderImg);

//////////////////////////////////////////////////////////////////////END////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////Search member div////////////////////////////////////////////////////////
               ////Line divider 
        var SearchMemDiv = document.createElement('div');
        SearchMemDiv.id="SearchMemDiv";
        SearchMemDiv.style.display= "none";
        SearchMemDiv.className="SearchfiDiv";
        getinfoTopDiv.appendChild(SearchMemDiv);

              //button to create a new search
        var EnterinfoDiv = document.createElement('div');
        EnterinfoDiv.className="EnterinfoDiv";
        EnterinfoDiv.appendChild(document.createTextNode('Enter FI id and Member Number,User name or GUID'))
        SearchMemDiv.appendChild(EnterinfoDiv);

                 ////Line divider 
        var admin_menu = document.createElement('div');
        admin_menu.className="getInfoLineBar";
        SearchMemDiv.appendChild(admin_menu);


        //button to create a new search
        var inputFiNum = document.createElement('input');
        inputFiNum.id='InfofiMemId';
        inputFiNum.className='FInuminput';
        inputFiNum.placeholder='FI Id';
        inputFiNum.name='Memvalidate';
       // inputFiNum.value="1556";  ////UNCOMMENT ONLY FOR TESTING!!  7413,1556
        SearchMemDiv.appendChild(inputFiNum);



        //button to create a new search
        var inputFiNum = document.createElement('input');
        inputFiNum.id='InfomemNum';
        inputFiNum.className='FInuminput';
        inputFiNum.placeholder='Member Num/Altid/GUID';
        inputFiNum.name='Memvalidate';
       // inputFiNum.value="1556";  ////UNCOMMENT ONLY FOR TESTING!!  7413,1556
        SearchMemDiv.appendChild(inputFiNum);


//////////////////////Submit request when pressing Enter on keyboard/////////
        document.getElementById("InfofiMemId")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById("FIMemsearchBut").click();
          }
      });

              document.getElementById("InfomemNum")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById("FIMemsearchBut").click();
          }
      });
////////////////////////////////////END//////////////////////////////////////

        //button to create a new search
        var add_search_but = document.createElement('div');
        add_search_but.id = "FIMemsearchBut";
        add_search_but.className='InfoSearchBut';
        add_search_but.appendChild(document.createTextNode('Search'))
        add_search_but.onclick=function(){    

          var chks = document.getElementsByName('Memvalidate');                    
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

          var fiId = document.getElementById('InfomemNum').value;

         var tableCount = document.getElementById('getinfoMemResultDiv').childElementCount;   

        if(tableCount > 1){  ////This will prevent more than 3 results to show for FI search.
            console.log("remove a result")
            //  return false;



         var element = document.getElementById("getinfoMemResultDiv");
         
         if(element.hasChildNodes()){                                        /// Checks if there are results and removed them 
            element.removeChild(element.childNodes[0]);
            element.removeChild(element.childNodes[0]);
            element.removeChild(element.childNodes[0]);
            element.removeChild(element.childNodes[0]);
            element.removeChild(element.childNodes[0]);
            element.removeChild(element.childNodes[0]);
          }
       
         }
      document.getElementById('memberInfoLoader').style.display= "block";///////show loader
        grabFI(3,1);
//grabmem(1);
        }

 SearchMemDiv.appendChild(add_search_but);

//////////////////////////////////////////////////////////////////////END////////////////////////////////////////////////////////////////




    var getinfoResultDiv = document.createElement('div');
    getinfoResultDiv.id = "getinfoResultDiv";
    getinfoResultDiv.name = "getinfoResultDiv";
    getinfoResultDiv.className="getinfoResultDiv";
    getinfoResultsParent.appendChild(getinfoResultDiv); 

    var getinfoMemResultDiv = document.createElement('div');
    getinfoMemResultDiv.id = "getinfoMemResultDiv";
    getinfoMemResultDiv.name = "getinfoMemResultDiv";
    getinfoMemResultDiv.className="getinfoResultDiv";
    getinfoMemResultsParent.appendChild(getinfoMemResultDiv); 


      var loaderImg = document.createElement('div');
      loaderImg.id="memberInfoLoader";
      loaderImg.style.display= "none";
      loaderImg.className= "loader";
      SearchMemDiv.appendChild(loaderImg);

    }


function FoundgetFItable(xml) {

    document.getElementById('FIInfoLoader').style.display= "none";///////show loader
    var info = new window.DOMParser().parseFromString(xml, "text/xml");
 
    var resultsBodyDiv = document.getElementById("getinfoResultDiv");

    var ResultTopParentDiv = document.createElement('div');
    ResultTopParentDiv.id="ResultTopParentDiv";
    ResultTopParentDiv.className="ResultTopParentDiv";
    resultsBodyDiv.appendChild(ResultTopParentDiv);

    var EnterinfoDiv = document.createElement('div');
    //EnterinfoDiv.appendChild(document.createTextNode('FI info'))
    ResultTopParentDiv.appendChild(EnterinfoDiv);
    var ge_icon = document.createElement('img');
        ge_icon.src = 'img/close.png';
        ge_icon.className = "removeTable";
     //   ge_icon.S_PK = objAtr_sign.S_PK;
        ge_icon.onclick=function(){
          this.parentNode.remove();
}
ResultTopParentDiv.appendChild(ge_icon);

  var ls_report_main_usr = document.createElement('div');
  ls_report_main_usr.id="ls_report_main_usr";
  ls_report_main_usr.className= "ls_report_main_usr";
  ResultTopParentDiv.appendChild(ls_report_main_usr);
 
    //create div for table
  var ls_sl_table_usr=document.createElement('div');
  ls_sl_table_usr.className="ls_sl_table_usr";
  ls_report_main_usr.appendChild(ls_sl_table_usr);

    //create / append table
    var table = document.createElement('table');
    table.className="InfoTableTR";
    table.id="table_usr";
    ls_sl_table_usr.appendChild(table);

 
   rooti = info.getElementsByTagName("root");

    for(var i=0; i<rooti.length;i++){

 
    //create / append tr


// 
    var tr = document.createElement('tr');
    tr.appendChild(document.createTextNode('Fi Id'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);

    //create / append td B_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[4].innerHTML));
    tr.appendChild(td);


             var tr = document.createElement('tr');
         tr.appendChild(document.createTextNode('FI Name'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);

    //create / append td B_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[2].innerHTML));
    tr.appendChild(td);

         var tr = document.createElement('tr');
         tr.appendChild(document.createTextNode('Data Center'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);

    if (rooti[i].childNodes[0].innerHTML){
        //create / append td B_NAME
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(rooti[i].childNodes[0].innerHTML));
        tr.appendChild(td);

    }else{
        //create / append td B_NAME
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("DCA *confirm"));
        tr.appendChild(td);

    }

 
          var tr = document.createElement('tr');
          tr.appendChild(document.createTextNode('Swim Lane'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[1].innerHTML));
    tr.appendChild(td);

 
          var tr = document.createElement('tr');
          tr.appendChild(document.createTextNode('IB Status'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[3].innerHTML));
    tr.appendChild(td);


 
    /*  var tr = document.createElement('tr');
      tr.appendChild(document.createTextNode('BB Status'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[5].innerHTML));
    tr.appendChild(td);
    */

             var tr = document.createElement('tr');
         tr.appendChild(document.createTextNode('Backend Dir'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);

    //create / append td B_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[6].innerHTML));
    tr.appendChild(td);
 
          var tr = document.createElement('tr');
          tr.appendChild(document.createTextNode('Fi Port'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[7].innerHTML));
    tr.appendChild(td);

    /*var tr = document.createElement('tr');
          tr.appendChild(document.createTextNode('informix Users'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[8].innerHTML));
    tr.appendChild(td);
    */

              var tr = document.createElement('tr');
          tr.appendChild(document.createTextNode('Informix DB'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[9].innerHTML));
    tr.appendChild(td);



              var tr = document.createElement('tr');
          tr.appendChild(document.createTextNode('RDB Port'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[10].innerHTML));
    tr.appendChild(td);




              var tr = document.createElement('tr');
          tr.appendChild(document.createTextNode('IB Domain'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.value=rooti[i].childNodes[12].innerHTML;
    td.className="FiInfoTableHeaderLink";
        td.onclick=function(){
         window.open("https://"+this.value+"/tob/live/usp-core/app/login/consumer");
     }
    td.appendChild(document.createTextNode(rooti[i].childNodes[12].innerHTML));
    tr.appendChild(td);



              var tr = document.createElement('tr');
          tr.appendChild(document.createTextNode('Web Domain'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[13].innerHTML));
    tr.appendChild(td);


                  var tr = document.createElement('tr');
          tr.appendChild(document.createTextNode('UDB Users'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[11].innerHTML));
    tr.appendChild(td);
 


}

var fiid = document.getElementById("InfofiId").value = "";
}




function FoundgetMembertable(xml,xmlFI) {

    document.getElementById('memberInfoLoader').style.display= "none";

    var resultsBodyDiv = document.getElementById("getinfoMemResultDiv");

    var ResultTopParentDiv = document.createElement('div');
    ResultTopParentDiv.id="ResultTopParentDiv";
    ResultTopParentDiv.className="ResultTopParentDiv";
    resultsBodyDiv.appendChild(ResultTopParentDiv);

    var cusMenuTopParentDiv = document.createElement('div');
    cusMenuTopParentDiv.id="cusMenuTopParentDiv";
    cusMenuTopParentDiv.className="cusMenuTopParentDiv";
    resultsBodyDiv.appendChild(cusMenuTopParentDiv);

    var themeSelectTopParentDiv = document.createElement('div');
    themeSelectTopParentDiv.id="themeSelectTopParentDiv";
    themeSelectTopParentDiv.className="themeSelectTopParentDiv";
    resultsBodyDiv.appendChild(themeSelectTopParentDiv);

    var xmlTopParentDiv = document.createElement('div');
    xmlTopParentDiv.id="xmlTopParentDiv";
    xmlTopParentDiv.className="xmlTopParentDiv";
    resultsBodyDiv.appendChild(xmlTopParentDiv);

    var xmlcusCasTopParentDiv = document.createElement('div');
    xmlcusCasTopParentDiv.id="xmlcusCasTopParentDiv";
    xmlcusCasTopParentDiv.className="xmlTopParentDiv";
    resultsBodyDiv.appendChild(xmlcusCasTopParentDiv);


    var xmlAcctsTopParentDiv = document.createElement('div');
    xmlAcctsTopParentDiv.id="xmlAcctsTopParentDiv";
    xmlAcctsTopParentDiv.className="xmlTopParentDiv";
    resultsBodyDiv.appendChild(xmlAcctsTopParentDiv);
///////////////////////////////////////////////////////////////////////////////FI info for member search/////////////////////////////////////////////////////



    var info = new window.DOMParser().parseFromString(xmlFI, "text/xml");
 

    //var EnterinfoDiv = document.createElement('div');
    //EnterinfoDiv.appendChild(document.createTextNode('FI info'))
   // ResultTopParentDiv.appendChild(EnterinfoDiv);
   

  var ls_report_main_usr = document.createElement('div');
  ls_report_main_usr.id="ls_report_main_usr";
  ls_report_main_usr.className= "ls_report_main_usr";
  ResultTopParentDiv.appendChild(ls_report_main_usr);
 
    //create div for table
  var ls_sl_table_usr=document.createElement('div');
  ls_sl_table_usr.className="ls_sl_table_usr";
  ls_report_main_usr.appendChild(ls_sl_table_usr);

    //create / append table
    var table = document.createElement('table');
    table.className="InfoTableTR";
    table.id="table_usr";
    ls_sl_table_usr.appendChild(table);

 
   rooti = info.getElementsByTagName("root");

    for(var i=0; i<rooti.length;i++){

 
    //create / append tr


// 
    var tr = document.createElement('tr');
    tr.appendChild(document.createTextNode('Fi Id'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);

    //create / append td B_NAME
    var td = document.createElement('td');
    td.id="fiid";
    td.value=rooti[i].childNodes[4].innerHTML;
    td.appendChild(document.createTextNode(rooti[i].childNodes[4].innerHTML));
    tr.appendChild(td);


    var tr = document.createElement('tr');
    tr.appendChild(document.createTextNode('FI Name'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);

    //create / append td B_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[2].innerHTML));
    tr.appendChild(td);



         var tr = document.createElement('tr');
         tr.appendChild(document.createTextNode('Data Center'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);

    if (rooti[i].childNodes[0].innerHTML){
        //create / append td B_NAME
        var td = document.createElement('td');
        td.id="datacenter";
        td.value=rooti[i].childNodes[0].innerHTML;
        td.appendChild(document.createTextNode(rooti[i].childNodes[0].innerHTML));
        tr.appendChild(td);

    }else{
        //create / append td B_NAME
        var td = document.createElement('td');
        td.id="datacenter";
        td.value="DCA"
        td.appendChild(document.createTextNode("DCA"));
        tr.appendChild(td);

    }



 
          var tr = document.createElement('tr');
          tr.appendChild(document.createTextNode('Swim Lane'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.id="sl";
    td.value=rooti[i].childNodes[1].innerHTML;
    td.appendChild(document.createTextNode(rooti[i].childNodes[1].innerHTML));
    tr.appendChild(td);


              var tr = document.createElement('tr');
          tr.appendChild(document.createTextNode('Informix DB'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[9].innerHTML));
    tr.appendChild(td);



              var tr = document.createElement('tr');
          tr.appendChild(document.createTextNode('IB Login'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.className="FiInfoTableHeaderLink";
    td.value=rooti[i].childNodes[12].innerHTML;
    td.className="FiInfoTableHeaderLink";
        td.onclick=function(){
         window.open("https://"+this.value+"/tob/live/usp-core/app/login/consumer");
     }
    td.appendChild(document.createTextNode(rooti[i].childNodes[12].innerHTML));
    tr.appendChild(td);



    var tr = document.createElement('tr');
    tr.appendChild(document.createTextNode('Domain'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[13].innerHTML));
    tr.appendChild(td);


}




////////////////////////////////////////////////////////////////////////////END///////////////////////////////////////////////////////////////////////////////

    var EnterinfoDiv = document.createElement('div');
    //EnterinfoDiv.appendChild(document.createTextNode('FI info'))
    ResultTopParentDiv.appendChild(EnterinfoDiv);
    

  var ls_report_main_usr = document.createElement('div');
  ls_report_main_usr.id="ls_report_main_usr";
  ls_report_main_usr.className= "ls_report_main_usr";
  ResultTopParentDiv.appendChild(ls_report_main_usr);
 
    //create div for table
  var ls_sl_table_usr=document.createElement('div');
  ls_sl_table_usr.className="ls_sl_table_usr";
  ls_report_main_usr.appendChild(ls_sl_table_usr);

    //create / append table
    var table = document.createElement('table');
    table.className="InfoTableTR";
    table.id="table_usr";
    ls_sl_table_usr.appendChild(table);

 
   rooti = xml.getElementsByTagName("ns5:FICustomer");

    for(var i=0; i<rooti.length;i++){

 
    //create / append tr


// 
    var tr = document.createElement('tr');
    tr.appendChild(document.createTextNode('Member Number'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);

    //create / append td B_NAME
    var td = document.createElement('td');
    td.id="membernum";
    td.value=rooti[i].childNodes[3].innerHTML;
    td.appendChild(document.createTextNode(rooti[i].childNodes[3].innerHTML));
    tr.appendChild(td);


             var tr = document.createElement('tr');
         tr.appendChild(document.createTextNode('User Name'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);

   
    //create / append td B_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(xml.getElementsByTagName("ns4:loginId")[1].childNodes[0].nodeValue));
    tr.appendChild(td);

         var tr = document.createElement('tr');
         tr.appendChild(document.createTextNode('GUID'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);

    //create / append td B_NAME
    var td = document.createElement('td');
    td.id="guid";
    td.value=rooti[i].childNodes[0].innerHTML;
    td.appendChild(document.createTextNode(rooti[i].childNodes[0].innerHTML));
    tr.appendChild(td);

    var tr = document.createElement('tr');
    tr.appendChild(document.createTextNode('Name'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(rooti[i].childNodes[2].innerHTML));
    tr.appendChild(td);


    var tr = document.createElement('tr');
    tr.appendChild(document.createTextNode('Email'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(xml.getElementsByTagName("ns4:emailAddress")[0].childNodes[0].nodeValue));
    tr.appendChild(td);

        var tr = document.createElement('tr');
    tr.appendChild(document.createTextNode('Active'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(xml.getElementsByTagName("ns5:active")[0].childNodes[0].nodeValue));
    tr.appendChild(td);


        var tr = document.createElement('tr');
    tr.appendChild(document.createTextNode('Last Login'));
    tr.className="FiInfoTableHeader";
    table.appendChild(tr);
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(xml.getElementsByTagName("ns5:lastLoginDateTime")[0].childNodes[0].nodeValue));
    tr.appendChild(td);



}




        var getcusMenutopDiv = document.createElement('div');
        getcusMenutopDiv.className="getcusMenutopDiv";
        getcusMenutopDiv.id="getcusMenutopDiv";
        cusMenuTopParentDiv.appendChild(getcusMenutopDiv);

        var themeselecttopDiv = document.createElement('div');
        themeselecttopDiv.className="container";
        //themeselecttopDiv.id="themeselecttopDiv";
        themeSelectTopParentDiv.appendChild(themeselecttopDiv);



        typeSelectDiv =document.createElement('div');
      typeSelectDiv.id='typeSelectDiv';
      typeSelectDiv.className ='typeSelectDiv';
      getcusMenutopDiv.appendChild(typeSelectDiv);

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
      document.getElementById("xmlcusCasTopParentDiv").className = "xmlTopParentDivDark";     
      document.getElementById("xmlAcctsTopParentDiv").className = "xmlTopParentDivDark";    
      document.getElementById("xmlTopParentDiv").className = "xmlTopParentDivDark";


       }else{

      document.getElementById("xmlcusCasTopParentDiv").className = "xmlTopParentDiv";     
      document.getElementById("xmlAcctsTopParentDiv").className = "xmlTopParentDiv";    
      document.getElementById("xmlTopParentDiv").className = "xmlTopParentDiv";
      console.log("lights on")
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




///////////////////////Loader//////////////////////////////

     var loaderImg = document.createElement('div');
      loaderImg.id="memberInfoLoader2";
      loaderImg.style.display= "none";
      loaderImg.className= "loader2";
      getcusMenutopDiv.appendChild(loaderImg);

  ////////////////////////////////////////////////////user info page selector/////////////////////////////////////////////////

///////////////////////CBS call//////////////////////////////
      var cuscbsInfoBut = document.createElement('div');
      cuscbsInfoBut.className='infoCBSBut';
      cuscbsInfoBut.id= "cuscbsInfoBut";
      cuscbsInfoBut.appendChild(document.createTextNode('(Cbs/Ifx) info'))
      cuscbsInfoBut.onclick=function(){
      document.getElementById("accountsBut").className = "accountsBut";
      document.getElementById("cuscasInfoBut").className = "infoCASBut";
      this.className = "infoCBSButSelected";
      document.getElementById('xmlAcctsTopParentDiv').style.display= "none";
      document.getElementById('xmlcusCasTopParentDiv').style.display= "none";
     document.getElementById('xmlTopParentDiv').style.display= "block";
     document.getElementById('memberInfoLoader2').style.display= "none";///////show loader


          }
      typeSelectDiv.appendChild(cuscbsInfoBut);

      document.getElementById("cuscbsInfoBut").className = "infoCBSButSelected";



      var cuscasInfoBut = document.createElement('div');
      cuscasInfoBut.className='infoCASBut';
      cuscasInfoBut.id= "cuscasInfoBut";
      cuscasInfoBut.appendChild(document.createTextNode('(Cas/Udb) info'))
      cuscasInfoBut.onclick=function(){
      document.getElementById("accountsBut").className = "accountsBut";
      document.getElementById("cuscbsInfoBut").className = "infoCBSBut";
      this.className = "infoCASButSelected";
      document.getElementById('xmlAcctsTopParentDiv').style.display= "none";
      document.getElementById('xmlTopParentDiv').style.display= "none";
      document.getElementById('xmlcusCasTopParentDiv').style.display= "block";



      var fiid = document.getElementById("fiid").value;
      var membernum = document.getElementById("membernum").value;
      var sl = document.getElementById("sl").value;                     /////Getting variables values for the CAS call
      var datacenter = document.getElementById("datacenter").value;
      var lowersl = sl.toLowerCase()
      var lowerdc = datacenter.toLowerCase()
 
          var casXmlTopDev = document.getElementById('getcusCasXmltopDiv');                   ///
    if(!casXmlTopDev.hasChildNodes()){                                        /// If else to prevent a second API call from being made when switching xml pages
    document.getElementById('memberInfoLoader2').style.display= "block";        ///////show loader    
    grabmemcas(lowersl,lowerdc,fiid,membernum);                                 //Call get customer cas/udb
    }                   ///

 

         
          }
      typeSelectDiv.appendChild(cuscasInfoBut);

/////////////////////Accounts call/////////////////////////////////
      var accountsBut = document.createElement('div');
      accountsBut.className='accountsBut';
      accountsBut.id = "accountsBut";
      accountsBut.appendChild(document.createTextNode('Accounts'))
      accountsBut.onclick=function(){
      document.getElementById("cuscasInfoBut").className = "infoCASBut";
      document.getElementById("cuscbsInfoBut").className = "infoCBSBut";
      this.className = "accountsButSelected";
      document.getElementById("xmlTopParentDiv").style.display= "none";
      document.getElementById('xmlcusCasTopParentDiv').style.display= "none";
      document.getElementById('xmlAcctsTopParentDiv').style.display= "block";

       var fiid = document.getElementById("fiid").value;
      var guid = document.getElementById("guid").value;
 

        var casXmlTopDev = document.getElementById('getcusAcctsXmltopDiv');                   ///
    if(!casXmlTopDev.hasChildNodes()){                                        /// If else to prevent a second API call from being made when switching xml pages
    document.getElementById('memberInfoLoader2').style.display= "block";        ///////show loader    
    grabaccnts(fiid,guid);                                                  //Call get accounts                              
    }   



          }
        typeSelectDiv.appendChild(accountsBut);

///////////////////////////////////////////////////////////Show get accounts XML div////////////////////////////////////////////////////////////

    var getcusCasXmltopDiv = document.createElement('div');
    getcusCasXmltopDiv.className="getcusCasXmltopDiv";
    getcusCasXmltopDiv.id="getcusCasXmltopDiv";
    xmlcusCasTopParentDiv.appendChild(getcusCasXmltopDiv);


///////////////////////////////////////////////////////////Show get accounts XML div////////////////////////////////////////////////////////////

    var getcusAcctsXmltopDiv = document.createElement('div');
    getcusAcctsXmltopDiv.className="getcusAcctsXmltopDiv";
    getcusAcctsXmltopDiv.id="getcusAcctsXmltopDiv";
    xmlAcctsTopParentDiv.appendChild(getcusAcctsXmltopDiv);


///////////////////////////////////////////////////////////////////////////GET CUSTOMER XML////////////////////////////////////////////
    var getcusXmltopDiv = document.createElement('div');
    getcusXmltopDiv.className="getcusXmltopDiv";
    getcusXmltopDiv.id="getcusXmltopDiv";
    xmlTopParentDiv.appendChild(getcusXmltopDiv);

     LoadXMLDom('getcusXmltopDiv',xml);
    // console.log(xml)

    var fiid = document.getElementById("InfofiMemId").value = "";
    var memnumber = document.getElementById("InfomemNum").value = "";
///////////////////////////////////////////////////////////////////////////END/////////////////////////////////////////////////////////
}


/*$( "body" ).click( function() {
if( $( "#toggle" ).is( ":checked" ) ){ console.log( "yes" )
  } else { console.log( "no" ) } 
});*/