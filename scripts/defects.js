/*
 function :   Defects()
 author   :   E
 created  :   08/25/18
 */



function Defects() {

document.getElementById('defectsBut').style.backgroundColor="#41a65b";
document.getElementById('queriesBut').style.backgroundColor="";
document.getElementById('toolsBut').style.backgroundColor="";
document.getElementById('bbDashboardBut').style.backgroundColor="";
document.getElementById('getInfoBut').style.backgroundColor="";
document.getElementById("moreLinks").style.display= "none";//Hide more links
document.getElementById("NewUpdates").style.display= "none";//Hide New Updates
document.getElementById("infobody").style.display= "none";
document.getElementById("inputData").style.display= "none";
document.getElementById("queryParentTOP").style.display= "none";
document.getElementById("BodyDiv").style.display= "block";

    
    var defectsTopDev = document.getElementById('BodyDiv');
 //	var DefectbodyTop1 = document.getElementById('myContainer');     ///
    if(defectsTopDev.hasChildNodes()){                                        /// Checks if user report table exists and replace it on selection of a new user.
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
/*
    var DefectDiv = document.createElement('div');
    //.id="DefectDiv";
    DefectDiv.className= 'DefectDiv';
    DefectDiv.appendChild(document.createTextNode('Defects'));
    DefectTopDiv.appendChild(DefectDiv); 
*/

 //add S_PK to content as attribute
      //document.getElementById('content').S_PK = this.S_PK;

      //BEGIN :   create/send obj_query
      var obj_query = new Object({
        query_type : 'ls_user_data',
       // S_PK : this.S_PK,
        cb_function : function(xml){
          //BEGIN :callback function
          //add returned xml to content, to be used once page loads
          //this should be updated with call back object return, newer version of thi concept
        ///  document.getElementById('content').xml_user_sign = xml;
          //print sign
          IBstatusUpdate123(xml);
          //END   :callback function 
        }
      });
      ls_query_send(obj_query);
      //END :   create/send obj_query


  //button to create a new defect
  var add_defect_but = document.createElement('div');
  add_defect_but.className='NewDefectBut';
  add_defect_but.appendChild(document.createTextNode('Add New'))
  add_defect_but.onclick=function(){
  addDefect();
  }
  DefectTopDiv.appendChild(add_defect_but);

         ////Line divider 
  var SearchDiv = document.createElement('div');
  SearchDiv.className="SearchDiv";
  DefectTopDiv.appendChild(SearchDiv);

  //button to create a new search
  var add_search_inp = document.createElement('input');
  add_search_inp.className='Searchinput';
  SearchDiv.appendChild(add_search_inp);



  //button to create a new search
  var add_search_but = document.createElement('div');
  add_search_but.className='SearchBut';
  add_search_but.appendChild(document.createTextNode('Search'))
  add_search_but.onclick=function(){
  //SearchDefect();
  }
  SearchDiv.appendChild(add_search_but);

         ////Line divider 
  var menu_divider = document.createElement('div');
  menu_divider.className="admin_menu_bar";
  DefectTopDiv.appendChild(menu_divider);
//////////////////////////////////////////////////////////////////////////////Select drop down

//////////////////////////////////////////////////////////////////////////////ENd/////////////NEW:Defect Div





}

function IBstatusUpdate123(xml_in) {


     //get div where to append content
var content_usr = document.getElementById("defectParent");
  //clear out anything that may already be in that div
//content.innerHTML = "";
  //create main div
  var ls_report_main_usr = document.createElement('div');
  ls_report_main_usr.id="ls_report_main_usr";
  ls_report_main_usr.className= "ls_report_main_usr";
  content_usr.appendChild(ls_report_main_usr);
 
//create div for table
  var ls_sl_table_usr=document.createElement('div');
  ls_sl_table_usr.className="ls_sl_table_usr";
  ls_report_main_usr.appendChild(ls_sl_table_usr);
 
  //get ROOT
  var x_ROOT = xml_in.getElementsByTagName('ROOT');
  //get SIGNS
  var usr_SIGNS = x_ROOT[0].getElementsByTagName('SIGN');

  var xml_USER = x_ROOT[0].getElementsByTagName('Defect');


    // users dropdown value U_PK(database value).
    /// u_pk = document.getElementById('select_add_usr').value;
 
    //create / append table
    var table = document.createElement('table');
    table.className="TableTR";
    table.id="table_usr";
    ls_sl_table_usr.appendChild(table);
    //create / append tr
    var tr = document.createElement('tr');
    tr.className="datahead_report";
    table.appendChild(tr);
 
     //create / append td L_BUILDING
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('Defect Id'));
    td.className="defect";
    tr.appendChild(td);
 
    //create / append td L_ROOM
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('Description'));
    tr.appendChild(td);
 
    //create / append td SSO
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('Product Team'));
    tr.appendChild(td);

        //create / append td date created
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('Status'));
    tr.appendChild(td);

        
    var td = document.createElement('td');    
     td.appendChild(document.createTextNode('Reference'));
     tr.appendChild(td);

     var td = document.createElement('td');
     td.appendChild(document.createTextNode('Added'));
     tr.appendChild(td);


     var td = document.createElement('td');
     td.appendChild(document.createTextNode('Jira'))
     tr.appendChild(td);

     var td = document.createElement('td');
     td.appendChild(document.createTextNode('WorkAround'))
     tr.appendChild(td);



     var td = document.createElement('td');
     td.appendChild(document.createTextNode('Delete'))
     tr.appendChild(td);

/*
          //create / append td SSO
      var td = document.createElement('td');
      var checkbox = document.createElement('Added');
      checkbox.type = "checkbox";
      checkbox.onclick=function(){


       var usrs= document.getElementsByName("select_users");

        for(var c_t=0; c_t<usrs.length;c_t++){
          
      if(usrs.length>0){

        usrs[c_t].disabled= false;
       }
      }

      }
      td.appendChild(checkbox);
      */





  //BEGIN   :   FOR every SIGN
  for(var c_xs_u=0; c_xs_u<xml_USER.length;c_xs_u++){
    var objAtr_sign_usr = xml_attributes_to_object(xml_USER[c_xs_u]);
 
    //create / append tr
    var tr = document.createElement('tr');
   table.appendChild(tr);
//Checks and only displays users that match U_Pk(seleceted from the Users dropdown list)
//if(u_pk == objAtr_sign_usr.U_PK){
// 
    //create / append td B_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(objAtr_sign_usr.NUMBER));
    tr.appendChild(td);
 
     //create / append td R_NAME
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(objAtr_sign_usr.DESCRIPTON));
    tr.appendChild(td);
 
     //create / append td date created
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(objAtr_sign_usr.PD));
    tr.appendChild(td);

 
    //create / append td S_ACTIVE
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(objAtr_sign_usr.STATUS));
    tr.appendChild(td);

        var td = document.createElement('td');
    td.appendChild(document.createTextNode(objAtr_sign_usr.REFERENCE));
    tr.appendChild(td);



    var td = document.createElement('td');
    td.appendChild(document.createTextNode(objAtr_sign_usr.ADDED));
    tr.appendChild(td);

    var td = document.createElement('td');
    td.appendChild(document.createTextNode("View"));
    td.value=objAtr_sign_usr.NUMBER;
    td.className="JiraCell";
    td.onclick=function(){
         window.open("https://jira.diginsite.net/browse/"+this.value);
     }
    tr.appendChild(td);


    if (objAtr_sign_usr.WORKAROUND != ""){
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("View"));
        td.value=objAtr_sign_usr.WORKAROUND;
        td.className="JiraCell";
        td.onclick=function(){
             ShowWorkaround(this.value);
         }
        tr.appendChild(td);

    }else{
        var td = document.createElement('td');
        tr.appendChild(td);



    }

     
        var ge_icon = document.createElement('img');
        ge_icon.src = 'img/trash.png';
        ge_icon.name='icon';
        ge_icon.className = "Trashicon";
        ge_icon.onclick=function(){

        alert("Sorry :( I haven't learned how to delete yet. Try it from the database.")

        };
      var td = document.createElement('td');
      td.appendChild(ge_icon);
      tr.appendChild(td);    
        /*/ check if sign is active
    if (objAtr_sign_usr.S_ACTIVE=='0'){
    //set 0 as string value of 'Active'
    objAtr_sign_usr.S_ACTIVE="Active";
    }  //else set string value to 'inactive'
    else{objAtr_sign_usr.S_ACTIVE="Inactive";}*/


//}

}
}




   function addDefect(){

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
  storeIdDiv.className= "storeIdDiv";
  addStoreSecdiv.appendChild(storeIdDiv);

/////////////////////////////////////////////////////////////////////////////////////////////
     //create a div for inputs 
  var input_name = document.createElement('div');
  input_name.className= "input_names_div";
  addStoreSecdiv.appendChild(input_name);
      //create header s
  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="store_input_text";
  ls_input_usr.appendChild(document.createTextNode('Defect Id'));   
  input_name.appendChild(ls_input_usr);

    var userText = document.createElement('input');
  userText.id = 'DefectidInput';
  userText.name = 'validate'; 
  userText.className='store_input';
  input_name.appendChild(userText);

///////////////////////////////////////////////////////////////////////////////////////////////

           //create a div for inputs 
  var input_disc = document.createElement('div');
  //input_address.className= "input_names_div";
  addStoreSecdiv.appendChild(input_disc);

      //create header s
  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="store_input_text";
  ls_input_usr.appendChild(document.createTextNode('Discription'));
  input_disc.appendChild(ls_input_usr);

  var userPass = document.createElement('textarea');
  userPass.id = 'DiscriptionInout';
  userPass.name = 'validate';
  userPass.className='store_input_textarea';
  input_disc.appendChild(userPass);
///////////////////////////////////////////////////////////////////////////////////////////////


     //create a div for inputs 
  var input_address = document.createElement('div');
  input_address.className= "input_names_div";
  addStoreSecdiv.appendChild(input_address);

      //create header s
  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="store_input_text";
  ls_input_usr.appendChild(document.createTextNode('Product Team'));
  input_address.appendChild(ls_input_usr);

  var userPass = document.createElement('input');
  userPass.id = 'ProductTeamInput';
  //userPass.name = 'validate';
  userPass.className='store_input';
  input_address.appendChild(userPass);

  ///////////////////////////////////////////////////////////////////////////////////////////////
           //create a div for inputs 
  var input_food_type = document.createElement('div');
  input_address.className= "input_names_div";
  addStoreSecdiv.appendChild(input_food_type);

      //create header s
  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="store_input_text";
  ls_input_usr.appendChild(document.createTextNode('Status'));
  input_food_type.appendChild(ls_input_usr);

  var userPass = document.createElement('input');
  userPass.id = 'StatusInput';
  userPass.setAttribute("list", "types");
  userPass.name = 'validate';
  userPass.className='store_input';
  input_food_type.appendChild(userPass);

  var datalist = document.createElement("datalist");
  datalist.id = 'types';
  input_food_type.appendChild(datalist);

        var option = document.createElement('option');
        option.text = "Active";
        option.value = 1;
        datalist.appendChild(option);

        var option = document.createElement('option');
        option.text = "In Review";
        option.value = 2;
        datalist.appendChild(option);

        var option = document.createElement('option');
        option.text = "Resolved";
        option.value = 3;
        datalist.appendChild(option);
///////////////////////////////////////////////////////////////////////////////////////////////
       //create a div for inputs 
  var input_phone = document.createElement('div');
  input_address.className= "input_names_div";
  addStoreSecdiv.appendChild(input_phone);

      //create header s
  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="store_input_text";
  ls_input_usr.appendChild(document.createTextNode('Reference'));
  input_phone.appendChild(ls_input_usr);

  var userPass = document.createElement('input');
  userPass.id = 'ReferenceInput';
  userPass.name = 'validate';
  userPass.className='store_input';
  input_phone.appendChild(userPass);
///////////////////////////////////////////////////////////////////////////////////////////////
  
           //create a div for inputs 
  var input_disc = document.createElement('div');
  //input_address.className= "input_names_div";
  addStoreSecdiv.appendChild(input_disc);

      //create header s
  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="store_input_text";
  ls_input_usr.appendChild(document.createTextNode('Work around'));
  input_disc.appendChild(ls_input_usr);

  var userPass = document.createElement('textarea');
  userPass.id = 'WorkaroundInput'; 
  userPass.name = 'validate';
  userPass.className='store_input_textarea';
  input_disc.appendChild(userPass);


/* IF a new filed need ot be added . uncomment 
///////////////////////////////////////////////////////////////////////////////////////////////
  
         //create a div for inputs 
  var input_pic_url = document.createElement('div');
  input_pic_url.className= "input_names_div";
  addStoreSecdiv.appendChild(input_pic_url);

      //create header s
  var ls_input_usr = document.createElement('div');
  ls_input_usr.className="store_input_text";
  ls_input_usr.appendChild(document.createTextNode('Image URL'));
  input_pic_url.appendChild(ls_input_usr);

  var userPass = document.createElement('input');
  userPass.id = 'inputURL';
  userPass.name = 'validate';
  userPass.className='store_input';
  input_pic_url.appendChild(userPass);

*/
  ///////////////////////////////////////////////////////////////////////////////////////////////


  
  //button to create a new sign
  var but_blue = document.createElement('div');
  but_blue.className='but_add';
  but_blue.appendChild(document.createTextNode('Add'))
  but_blue.onclick=function(){

 var chks = document.getElementsByName('validate');                    
        for (var i = 0; i < chks.length; i++)  {       
        if (chks[i].value == "") {

           chks[i].style.borderColor = '#ff0000';  
          chks[i].style.borderWidth = '4px'; 
          chks[i].focus();
          chks[i].style.borderColor = ''; 


          return false
        }//if loop end 
        } //For loop end


///Defect input values to be saved
var DefectidInput = document.getElementById('DefectidInput').value;
  var DiscriptionInout = document.getElementById('DiscriptionInout').value;
    var ProductTeamInput = document.getElementById('ProductTeamInput').value;
      var StatusInput = document.getElementById('StatusInput').value;      
        var ReferenceInput = document.getElementById('ReferenceInput').value;
          var WorkaroundInput = document.getElementById('WorkaroundInput').value;///End



   save_defect(DefectidInput,DiscriptionInout,ProductTeamInput,StatusInput,ReferenceInput,WorkaroundInput);


  }
  addStoreSecdiv.appendChild(but_blue);
  //div_show() //Show Div after creating elements.
   }


     function div_hide(){
    var element = document.getElementById("update");
element.parentNode.removeChild(element);
}



   function SearchDefect(){

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

  

  //div_show() //Show Div after creating elements.
   }


     function div_hide(){
    var element = document.getElementById("update");
element.parentNode.removeChild(element);
}




 function ShowWorkaround(a){

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

    var ls_input_usr = document.createElement('div');
  ls_input_usr.className="store_input_text";
  ls_input_usr.appendChild(document.createTextNode(a));
  AvarageMealTopTwo.appendChild(ls_input_usr);

  //div_show() //Show Div after creating elements.
   }