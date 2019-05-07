<?php
	//include pg2.php, page generator
	include_once("common/pg/pg.php");
	$ini_fileLoc = 'pg2.ini';
	$title = "TS ToolKit";
	createHead($ini_fileLoc, $title);
?>

<div id="page_2">
	<div id="content"></div>
</div>

<?php
	createBottom();
?>