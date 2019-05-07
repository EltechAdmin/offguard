<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
//@$fiid = $request->fiid;
//@$mem_number = $request->mem_number;

$fiid = $_POST['fiid'];
$guid = $_POST['guid'];

   //$output = exec("/usr/local/bin/python /home/tsScripts/btpub/Tgetuseraccounts.py $fiid $guid", $out, $status);
 $output = exec("C:\Python27\python.exe C:\Work\scripts\Lgetaccnts.py");  //This will not work locally unless you have a python file that outputs an entire get customer xml string with no spaces.

echo $output;



?>
