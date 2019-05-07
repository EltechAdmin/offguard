/*
 function :   ls_load()
 author   :   E
 created  :   07/06/18
 */



function ShowQuery() {
  document.getElementById("moreLinks").style.display= "none";//Hide more links
  document.getElementById("NewUpdates").style.display= "none";//Hide New updates
document.getElementById('queriesBut').style.backgroundColor="#41a65b";
document.getElementById('defectsBut').style.backgroundColor="";
document.getElementById('getInfoBut').style.backgroundColor="";
document.getElementById('getInfoBut').style.backgroundColor="";
document.getElementById('toolsBut').style.backgroundColor="";
document.getElementById('bbDashboardBut').style.backgroundColor="";
 document.getElementById("infobody").style.display= "none";
 document.getElementById("inputData").style.display= "block";
  document.getElementById("queryParentTOP").style.display= "block";
  document.getElementById("BodyDiv").style.display= "none";

 var scripts = new Array ( );
scripts = new Array ( "----Select---","Gather Info","IB Status","Brokers","Caps");

    var queryParent= document.getElementById('queryParent');
    var content= document.getElementById('queryParentTOP');



    var queryParent = document.createElement('div');
    queryParent.id="queryParent";
    queryParent.className = "queryParent";
    content.appendChild(queryParent); 


    var QueryTopDiv = document.createElement('div');
    QueryTopDiv.id="QueryDiv";
    QueryTopDiv.setAttribute("disabled", false);
    QueryTopDiv.className = "QueryTopDiv";
   // QueryTopDiv.value= a;
    queryParent.appendChild(QueryTopDiv); 

    var QueryDiv = document.createElement('div');
    QueryDiv.id="QueryDiv";
    QueryDiv.className= 'QueryDiv';
    QueryDiv.appendChild(document.createTextNode('Select Query'));
    QueryTopDiv.appendChild(QueryDiv); 


//////////////////////////////////////////////////////////////////////////////Select drop down
     var selectQuery = document.createElement("select");
      selectQuery.className="selectQuery";
      selectQuery.id='selectQuery';
      selectQuery.onchange=function(){

     //  var content= document.getElementById('queryParent');

       var selectedValue= document.getElementById('selectQuery').value;
//alert(selectedValue + selectedValue.innerHTML + selectedValue.value)
      if (selectedValue == "Gather Info"){gatherInfo();}
       if (selectedValue == "IB Status"){IBstatus();}
       if (selectedValue == "Brokers"){Brokers();} 
       if (selectedValue == "Caps"){Caps();}  
      }



        for (var i = 0; i < scripts.length; i++) {  
        ///var itmes = scriptis[i].get("itemTitle");
      ///  var id = events[i].id
        var option = document.createElement('option');
        option.text = scripts[i];
        //option.value = "Gather info";
        selectQuery.appendChild(option);
    }
      QueryDiv.appendChild(selectQuery);
//////////////////////////////////////////////////////////////////////////////ENd/////////////NEW:Query Div

    var QuerybodyTop = document.createElement('div');
    QuerybodyTop.id="QuerybodyTop";
    QuerybodyTop.setAttribute("disabled", false);
    QuerybodyTop.className = "QuerybodyTop";
   // QuerybodyTop.value= a;
    queryParent.appendChild(QuerybodyTop); 


    var QuerybodyTop = document.getElementById('queryParentTOP');     ///
   // alert(QuerybodyTop)
  if(QuerybodyTop.hasChildNodes()){                                        /// Checks if user report table exists and replace it on selection of a new user.
    QuerybodyTop.removeChild(QuerybodyTop.childNodes[0]);                   ///
}
/*
    var Querybody = document.createElement('div');
    Querybody.id="Querybody";
    //Querybody.className= 'Querybody';
    Querybody.appendChild(document.createTextNode('blah balh'));
    QuerybodyTop.appendChild(Querybody); 
*/









}