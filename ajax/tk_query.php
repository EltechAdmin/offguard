<?php
/*
    created     :   09/21/18
*/
//Set to return XML
header("Content-Type: text/xml");
//create domDoc
$domDoc = new DOMDocument("1.0", "iso-8859-1");
//create XML root
$domROOT = $domDoc->appendChild($domDoc->createElement("ROOT"));
//create create node for info
$domINFO = $domROOT->appendChild($domDoc->createElement("INFO"));


// BEGIN    :   get mysqli
//include file which will make mysqli connection, this functionality will likely need improvements
include_once('../common/pg/mysqli_db_connect_ul.php');
//include_once($_SERVER['DOCUMENT_ROOT'].'/www2/ToolKit/common/pg/mysqli_db_connect_ul.php');
//get mysqli
$mysqli = get_mysqli_connection();
// END      :   get mysqli

$query_type = $_POST['query_type'];
//create/populate create node for query type
$domNode = $domINFO->appendChild($domDoc->createElement("query_type", $query_type));


$ary_queries = array();

switch ($query_type){
    //BEGIN :   ls_sign_insert
    case 'ls_sign_insert':


        $S_PK = $_POST['S_PK'];
        $R_PK = $_POST['R_PK'];
        $query = "INSERT INTO signs (S_PK, S_CREATOR_SSO,S_ACTIVE,S_DRAFT) VALUES (NULL, '$sso','0','0')";
        
        if($result=  $mysqli->query($query)) {

        }else{
            $domROOT->appendChild($domDoc->createElement('ERROR', $mysqli->error));
        }

        $query_lastId = "SELECT LAST_INSERT_ID()";
        $result_query_lastId=  $mysqli->query($query_lastId);

        //RESULTS
        $domRESULTS = $domROOT->appendChild($domDoc->createElement('RESULTS'));
        while ($row = mysqli_fetch_row($result_query_lastId)){
            $domRESULTS = $domRESULTS->appendChild($domDoc->createElement('RESULT',$row[0]));
        }

    break;



     case 'ls_user_data':



        $domUSERS = $domROOT->appendChild($domDoc->createElement('Defects'));
      
        $query = "select * from defects";

      // $domUSER= $domUSERS->appendChild($domDoc->createElement('USER'));
        //BEGIN : IF result
        if(!$result=  $mysqli->query($query)) {
            //ERROR
            $domERROR = $domUSER->appendChild($domDoc->createElement('ERROR'));
            //MESSAGE
            $domERROR->appendChild($domDoc->createElement('MESSAGE',$mysqli->error));
            //QUERY
            $domERROR->appendChild($domDoc->createElement('QUERY',$query));
        }else {
            /*/number of row
            $count_result = $result->num_rows;
            //create attribute - count
            $domAtr = $domDoc->createAttribute("count");
            $domUSERS->appendChild($domAtr);
            $domAtr_value = $domDoc->createTextNode($count_result);
            $domAtr->appendChild($domAtr_value);


            $domAtr = $domDoc->createAttribute("U_SSO"); //Current logged in user.
            $domUSERS->appendChild($domAtr);
            $domAtr_value = $domDoc->createTextNode($sso);
            $domAtr->appendChild($domAtr_value);*/
                            //S_CREATOR_SSO
     

            //BEGIN :   FOR every result returned
            while ($row = $result->fetch_object()) {
                //create element - 
                $domUSER= $domUSERS->appendChild($domDoc->createElement('Defect'));

                //*can optimize below, generic loop through variables/fields returned and create attributes

                //S_PK
                $domAtr = $domDoc->createAttribute("ID");
                $domUSER->appendChild($domAtr);
                $domAtr_value = $domDoc->createTextNode(htmlentities($row->id));
                $domAtr->appendChild($domAtr_value);

                //S_CREATOR_SSO
                $domAtr = $domDoc->createAttribute("NUMBER");
                $domUSER->appendChild($domAtr);
                $domAtr_value = $domDoc->createTextNode(htmlentities($row->number));
                $domAtr->appendChild($domAtr_value);
                ///S_DATE_CREATED
                $domAtr = $domDoc->createAttribute("DESCRIPTON");
                $domUSER->appendChild($domAtr);
                $domAtr_value = $domDoc->createTextNode(htmlentities($row->description));
                $domAtr->appendChild($domAtr_value);

                 ///S_DATE_CREATED
                $domAtr = $domDoc->createAttribute("PD");
                $domUSER->appendChild($domAtr);
                $domAtr_value = $domDoc->createTextNode(htmlentities($row->pd));
                $domAtr->appendChild($domAtr_value);

                //B_NAME
                $domAtr = $domDoc->createAttribute("STATUS");
                $domUSER->appendChild($domAtr);
                $domAtr_value = $domDoc->createTextNode(htmlentities($row->status));
                $domAtr->appendChild($domAtr_value);


                ///L_ROOM
                $domAtr = $domDoc->createAttribute("ADDED");
                $domUSER->appendChild($domAtr);
                $domAtr_value = $domDoc->createTextNode(htmlentities($row->added));
                $domAtr->appendChild($domAtr_value);

                                ///L_ROOM
                $domAtr = $domDoc->createAttribute("REFERENCE");
                $domUSER->appendChild($domAtr);
                $domAtr_value = $domDoc->createTextNode(htmlentities($row->reference));
                $domAtr->appendChild($domAtr_value);

                $domAtr = $domDoc->createAttribute("WORKAROUND");
                $domUSER->appendChild($domAtr);
                $domAtr_value = $domDoc->createTextNode(htmlentities($row->workaround));
                $domAtr->appendChild($domAtr_value);



            }   //END WHILE LOOP 
        }
        //BEGIN : IF result

    break;

    case 'insert_defect':
        ///DefectidInput,DiscriptionInput,ProductTeamInput,StatusInput,ReferenceInput,WorkaroundInput
        ////     a              b                 c            d             e              f        ////

        $a = $_POST['a'];
        $b = $_POST['b'];
        $c = $_POST['c'];
        $d = $_POST['d'];
        $e = $_POST['e'];
        $f = $_POST['f'];
 $query = "INSERT INTO defects (number,description,pd,status,reference,workaround,user) VALUES ('$a', '$b','$c','$d','$e','$f','rocketMan')";
        
        if($result=  $mysqli->query($query)) {

        }else{
            $domROOT->appendChild($domDoc->createElement('ERROR', $mysqli->error));
        }

        $query_lastId = "SELECT LAST_INSERT_ID()";
        $result_query_lastId=  $mysqli->query($query_lastId);

        //RESULTS
        $domRESULTS = $domROOT->appendChild($domDoc->createElement('RESULTS'));
       while ($row = mysqli_fetch_row($result_query_lastId)){
           $domRESULTS = $domRESULTS->appendChild($domDoc->createElement('RESULT',$row[0]));
       }
        
    break;


    
    
}


    /* Shorting starts DESC */
    

//return XML
echo $domDoc->saveXML();
