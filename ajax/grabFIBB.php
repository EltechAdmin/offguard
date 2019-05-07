<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
//@$fiid = $request->fiid;
//@$mem_number = $request->mem_number;

$fiid = $_POST['fiid'];
$BBbusId = $_POST['BBbusId'];


//$output = exec("/usr/local/bin/python /home/tsScripts/btpub/bbdashboard.py $fiid $BBbusId -j", $out, $status);
$output = exec("C:\Python27\python.exe C:\Work\scripts\getbb.py");  //UNCOMMENT FOR LOCAL USE

echo $output;



?>
