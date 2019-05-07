<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
//@$fiid = $request->fiid;
//@$mem_number = $request->mem_number;

$fiid = $_POST['fiid'];


   // $output = exec("/usr/local/bin/python /home/tsScripts/btpub/getfi.py $fiid", $out, $status);   //Prod
  $output = exec("C:\Python27\python.exe C:\Work\scripts\Lgetfi.py");  //Local


echo $output;



?>
