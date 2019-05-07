<?php
//include file which will make mysqli connection, this functionality will likely need improvements
//include_once('/lib/pg/mysqli_db_connect.php');
include_once($_SERVER['DOCUMENT_ROOT'].'/www2/ToolKit/common/pg/mysqli_db_connect_ul.php');
//include_once($_SERVER['DOCUMENT_ROOT'].'/www2/ToolKit/common/pg/tk_query.php');


date_default_timezone_set('UTC');

//include_once($_SERVER['DOCUMENT_ROOT'].'/SHARED/pg2/mysqli_db_connect.php');
//function createHead($title, $header_business, $header_appName, $ary_meta, $ary_JSfiles, $ary_CSSfiles, $ary_onload, $ary_misc) {
function createHead($ini_fileLoc, $title) {


?>

<!DOCTYPE html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />

<meta charset='UTF-8'>
<!-- page generated dynamically with page generator --> 

<?php
//set title, if title_overide is set then this variable will be updated
$page_title = "$title";
//set default header variables
$header_flag_beta = 0;
$header_business = 'NCR';
$header_appName = 'Template';
$header_secondName = '';
//set default for user_log_flag
$user_log_flag = 1;

//get array of contents from ini file
$ary_ini =parse_ini_file($ini_fileLoc, true);

//BEGIN	:	FOREACH section of data in ini file
foreach ($ary_ini as $section_name => $ary_section){
	//BEGIN	:	switch on $section_name 
	switch ($section_name){
		case 'onload':
			
			//BEGIN	:	FOREACH item in this ary_section
			foreach ($ary_section as $item_name => $item_value){
				$ary_js_onload[$item_name] = $item_value;
			}
			//END	:	FOREACH item in this ary_section
			
		break;
		case 'sso':
			//BEGIN	:	FOREACH item in this ary_section
			foreach ($ary_section as $item_name => $item_value){
				switch($item_name){
					case 'enable':
						if($item_value){
							//get user information
							//$user_first_name  = $_SERVER['HTTP_FIRSTNAME'];
							//$user_last_name = $_SERVER['HTTP_LASTNAME'];
							//$user_sso = $_SERVER['HTTP_SSO'];
						} else {
							$user_first_name ='firstName';
							$user_last_name = 'lastName';
							$user_sso = 444444444;
						}
						if(isset($_SERVER['HTTP_PHONE'])){
						$user_phone  = $_SERVER['HTTP_PHONE'];
						
					} else {
							$user_phone = '518'; 
					}
					break;
				}
			}
			//END	:	FOREACH item in this ary_section
		break;
		case 'user_log':
			//BEGIN	:	FOREACH item in this ary_section
			foreach ($ary_section as $item_name => $item_value){
				switch($item_name){
					case 'enable':
						if($item_value){
							//user log flag
							$user_log_flag = 1;
						} else {
							//user log flag
							$user_log_flag = 0;
						}
					break;
				}
			}
			//END	:	FOREACH item in this ary_section
		break;
		case 'title_override':
			//BEGIN	:	FOREACH item in this ary_section
			foreach ($ary_section as $item_name => $item_value){
				switch($item_name){
					case 'title':
						$page_title = $item_name;
					break;
				}
			}
			//END	:	FOREACH item in this ary_section
		break;
		case 'database':
			//BEGIN	:	FOREACH item in this ary_section
			foreach ($ary_section as $item_name => $item_value){
				switch($item_name){
					case 'host':
						$host = $item_value;
					break;
					case 'user':
						$user = $item_value;
					break;
					case 'pass':
						$pass = $item_value;
					break;
					case 'db':
						$db = $item_value;
					break;
				}	
			}
			if(isset($host) && isset($user) && isset($pass) &&isset($db)){
				// mysqli connection
				/*
				function get_mysqli_connection() {
				   $mysqli = new mysqli($host, $user, $pass, $db);

				   if($mysqli->connect_error) {
				     die('Connect Error (' . mysqli_connect_errno() . ') :'. mysqli_connect_error());
				   } else {
				   		return $mysqli;
					}
				}
				*/
			}
			//END	:	FOREACH item in this ary_section
		break;
		case 'header':
			//BEGIN	:	FOREACH item in this ary_section
			foreach ($ary_section as $item_name => $item_value){
				switch($item_name){
					case 'business':
						$header_business = $item_value;
					break;
					case 'appName':
						$header_appName = $item_value;
					break;
					case 'secondName':
						$header_secondName = $item_value;
					break;
				
				}
			}
			//END	:	FOREACH item in this ary_section
		break;
		case 'meta_data':
			echo "<!-- Meta Data -->\n";
			//BEGIN	:	FOREACH item in this ary_section
			foreach ($ary_section as $item_name => $item_value){
				echo "<meta name='$item_name' content='$item_value'>\n";
			}
			//END	:	FOREACH item in this ary_section
		
		break;
		case 'javascript_files':
			echo "<!-- JavaScript Files -->\n";
			//BEGIN	:	FOREACH item in this ary_section
			foreach ($ary_section as $item_name => $item_value){
				echo "<script type='text/javascript' src='$item_value'></script>\n";
			}
			//END	:	FOREACH item in this ary_section
		break;
		case 'css_files':
			echo "<!-- CSS Files -->\n";
			//BEGIN	:	FOREACH item in this ary_section
			foreach ($ary_section as $item_name => $item_value){
				echo "<link rel='stylesheet' type='text/css' href='$item_value' title='stylesheet' />\n";
			}
			//END	:	FOREACH item in this ary_section
		break;
		case 'home_page':
			//BEGIN	:	FOREACH item in this ary_section
			foreach ($ary_section as $item_name => $item_value){
				switch($item_name){
					case 'url':
						$home_page_url = $item_value;
					break;
				}
			}
			//END	:	FOREACH item in this ary_section
		break;
		case 'banner_image':
			//BEGIN	:	FOREACH item in this ary_section
			foreach ($ary_section as $item_name => $item_value){
				switch($item_name){
					case 'link':
						if($item_value != ""){
							$banner_image_link = $item_value;
						}
					break;
				}
			}
			//END	:	FOREACH item in this ary_section
	}
	//END	:	switch on $section_name (section name)
}
//END	:	FOREACH section of data in ini file

?>


<!-- BEGIN	:   add default files to header, files which will always be included -->
<link rel='stylesheet' type='text/css' href='common/pg/pg.css' title='stylesheet' />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!--<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<!-- END	:   add default files to header, files which will always be included -->



<script type="text/javascript">

	//will set a global JS variable of the root of where this file is, to be used for links on the site
     //GLOBAL_site_root = "<?php echo( __DIR__ ); ?>";
     //GLOBAL_site_root = "<?php echo $_SERVER['DOCUMENT_ROOT']; ?>";
	
	/* 	
	--------------------
	| function	:	pagePiecesOnloadFunction()
	| purpose	:	call JS functions passed to createHead() on body onload, 	
	|				function contents dynamicly generated based on PHP array, $ary_onload
	|
	|
	-------------------- 
	*/ 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

	


function note_builder() {
    window.open("http://anprd10utlge003.dca.diginsite.net/TSX/#/note_builder", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=500,left=500,width=500,height=700");
}

function loanOverpaymentsTool() {
    window.open("http://153.83.45.65/web-experiments/loanOverpaymentsTool.html", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=500,left=400,width=1200,height=700");
}

function diparser() {
    window.open("http://devnull.prd1.diginsite.net/newtsp/tool/5/", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=500,left=400,width=1200,height=700");
}

	function pagePiecesOnloadFunction() {
		<?php
		/* BEGIN - output any miscellaneous header code */
		if(isset ($ary_js_onload)){
			foreach($ary_js_onload as $function_name=>$function){
				echo "//$function_name \n";
				echo "$function \n";
			}
		}
		
		?>

	
		 // All items we'd like to add
    var navItems = [
       
       
        {href: '', text: 'Home'},
        {href: '', text: 'Log Out'}
      
    ];
    
    // A few variables for use later
    var navElem = document.createElement("nav"),
        navList = document.createElement("ul"), 
        navItem, navLink;
    
    static_bar_content.appendChild(navList);
    
    // Cycle over each nav item
    for (var i = 0; i < navItems.length; i++) {
        // Create a fresh list item, and anchor
        navItem = document.createElement("li");
        navLink = document.createElement("a");
        
        // Set properties on anchor
        navLink.href = navItems[i].href;
        navLink.innerHTML = navItems[i].text;
        navLink.value = navItems[i].text;


        
        // Add anchor to list item, and list item to list
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    }
    
    // Set first list item as current
    navList.className = "menu";
      navList.children[0].id = "current";
      navList.children[1].id = "Log Out"
    
    // Add list to body (or anywhere else)
    window.onload = function () {
        document.body.appendChild(navElem);
    }

      document.getElementById("current").onclick = function(){ window.history.go(+1)}
  
	}


</script>


<title><?php echo "$page_title" ?></title>
</head>

<body onLoad="pagePiecesOnloadFunction();"  ng-App="myApp">
	<!-- BEGIN 	:	static_bar 	-->
	<div id="static_bar">
		<!-- BEGIN 	:	static_bar_content 	-->
		<div id="static_bar_content">
			<!-- BEGIN 	:	ncr header 	-->
			<div id="ge_header">
				<div class="gh_ge_logo"></div>
				<div class="gh_text">
					<span class="primary"><?php echo $header_business ?></span>
					<span class="secondary"><?php echo $header_appName ?></span>
					<span class="beta-tag"><?php echo $header_secondName ?></span>
				</div>
			</div>

        </div>
        <!-- END 	:	static_bar_content 
    </div>
    <!-- END 	:	static_bar 	-->
	<!-- BEGIN 	: PAGE -->
	<div id="page">
        <!-- BEGIN: page_content -->
		<div id="content">

			<div class="topnav" id="myTopnav">
  <a href="#Queries" onclick="getInfo()" id="getInfoBut" >Get Info</a>
  <a href="#Queries" onclick="ShowQuery()" id="queriesBut" >Queries</a>
  <a href="#Defects" onclick="Defects()" id="defectsBut">Defects</a>
  <a href="#BB" onclick="bbDashboard()" id="bbDashboardBut">B.B. Dashboard</a>
  <a href="#Tools" onclick="tools()" id="toolsBut">Tools</a>
  <a href="#Admin"  class="adminMenu">Admin</a>

</div>

  <a href="#" class="QuickLU" onclick="QuickLU()" id="LookupBut">Quick LookUp</a>

       <div id="myCtrl" ng-controller="myCtrl">
            <div id="BodyDiv">

                    </div>
  
<div class="infobody" id="infobody">
<div class="infobody2" >
	<h1 style="color:white;">Popular Links</h1>
<a class="ghost-button-full-color" href="#" onclick="window.open('http://cs-support.ncr.com/')" >Service Now</a>
<a class="ghost-button-full-color" href="#" onclick="window.open('https://ap.diginsite.net/connect/group/di-home/di-home')" >Admin Platform</a>
<a class="ghost-button-full-color" href="#" onclick="window.open('http://devnull.prd1.diginsite.net/newtsp/')" >Dev-Null</a>
<a class="ghost-button-full-color" href="#" onclick="window.open('https://splunk.diginsite.net/en-US/app/search/search')" >Splunk</a>
<a class="ghost-button-full-color" href="#" onclick="window.open('https://ncr.quickbase.com/db/main')" >Quick base</a>
<a class="ghost-button-full-color" href="#" onclick="window.open('https://jira.diginsite.net/secure/Dashboard.jspa')" >Jira</a>
<a class="ghost-button-full-color" href="#" onclick="window.open('http://mediawiki.dcb.diginsite.net/ifstswiki/index.php/Main_Page')" >Media Wiki</a>
<a class="ghost-button-full-color" href="#" onclick="window.open('https://ncr.sharepoint.com/sites/d/TDS/SitePages/Home.aspx')" >SharePoint</a>
</div>
</div>
<div id="moreLinks" class="moreLinks" >
<br><br>
   <p>More Links..</p>
    <br>
    <ul>
        <li><a target="_blank" href="https://app.opsgenie.com/alert#/alert-genie">OpsGenie</a></li>
        <li><a target="_blank" href="http://myworkday.ncr.com">MyWorkDay</a></li>
        <li><a target="_blank" href="https://outlook.office365.com/owa/?realm=cornell-mayo.com">WebMail</a></li><li><a target="_blank" href="https://ncr.sharepoint.com/sites/d/TDS/Lists/TS%20PTO%20Calendar/calendar.aspx">TS PTO Calendar</a></li>
    </ul>

    Mediawiki Links:
    <ul>
        <li><a target="_blank" href="http://mediawiki.dcb.diginsite.net/ifstswiki/index.php/USP">USP</a></li>
        <li><a target="_blank" href="http://mediawiki.dcb.diginsite.net/ifstswiki/index.php/Responsive_Design_(Leapfrog)">RUI</a></li>
        <li><a target="_blank" href="http://mediawiki.dcb.diginsite.net/ifstswiki/index.php/CMA">CMA </a></li>
        <li><a target="_blank" href="http://mediawiki.dcb.diginsite.net/ifstswiki/index.php/BPUI">BPUI</a></li>
        <li><a target="_blank" href="http://mediawiki.dcb.diginsite.net/ifstswiki/index.php/Imageservice_Check_Images">Image Service - Check Imaging Wiki</a></li>
        <li><a target="_blank" href="http://mediawiki.dcb.diginsite.net/ifstswiki/index.php/ImageService_OLS">Image Service - Online Statements Wiki</a></li>
        <li><a target="_blank" href="http://mediawiki.dcb.diginsite.net/ifstswiki/index.php/Registration">Registration</a></li>
        <li><a target="_blank" href="http://mediawiki.dcb.diginsite.net/ifstswiki/index.php/Business_Banking">Business Banking</a></li>
        <br>
        <li><a target="_blank" href="http://confluence.ncr.com/display/PSuite/Campaigns+not+showing+up+for+a+user">Promotion Suite (Confluence)</a></li>
        <li><a target="_blank" href="http://bat-beast.prd1.lb.diginsite.net:8080/beast/default.jsp">BEAST</a></li>
    </ul>
    TS Engineer Wiki Links:
    <ul>
        <li><a target="_blank" href="http://mediawiki.dcb.diginsite.net/ifstswiki/index.php/Bmartinez_notes">Bernardo Martinez</a></li>
        <li><a target="_blank" href="http://mediawiki.dcb.diginsite.net/ifstswiki/index.php/User:Solson2">Steve Olson</a></li>
           </ul>
	</div>
	<div id="NewUpdates" class="NewUpdates" >
		<br><br>
<p>New Updates..</p>
    <ul>
        <li>Business Banking Dashboard</li>
        <li>...</li>
           </ul>
	</div>
                <div id="body">

                <!--    <div class="col-md-9 toolkitBox" ng-view></div>  	-->
                    <div class="col-md-3" id="inputData" style="display: none ">
                        <div class="toolkitBox" style="display: inline-block; ">
                            <div class="column">
                                <p>
                                    <label>4-digit FIID*</label>
                                    <input class="right" type="text" id="fiid" placeholder="FI ID" oninput="settings()" maxlength="5" n title="Please enter 4-digit FIID">
                                </p>
                                   <button  onclick="grabFI(2)" class="querybuttons" >Get FI</button>
                                <p>
                                    <label>Member Number*</label>
                                    <input class="right" type="text" id="memnumber" placeholder="Member Number"ng-model="toolkitValues.MemberNumber">
                                </p>
                                   <button  onclick="grabmem(2)" class="querybuttons" >Get Member</button>
                                <!-- Loader section 
                                <div ng-show="loadingBar == true" class="loader"></div>-->
                                <p class="queryLabel">
                                    <label>Informix DB</label>
                                    <input class="right" type="text" id="informix" ng-model="toolkitValues.Database">
                                </p>
                                <p class="queryLabel">
                                    <label>Datacenter</label>
                                    <input class="right" type="text" id="datacenter" ng-model="toolkitValues.Datacenter">
                                </p>
                                <p class="queryLabel">
                                    <label>Swimlane</label>
                                    <input class="right" type="text" id="swimlane" ng-model="toolkitValues.Swimlane">
                                </p>
                                <p class="queryLabel">
                                    <label>IB Domain</label>
                                    <input class="right" oninput="settings()" id="ibdomain" type="text" id="TDOMAIN" ng-model="toolkitValues.Domain">
                                </p>
                                <p class="queryLabel">
                                    <label>Alt ID</label>
                                    <input class="right" type="text" id="loginId" ng-model="toolkitValues.UserAltID">
                                </p>
                                <p class="queryLabel">
                                    <label>GUID</label>
                                    <input class="right" type="text" id="id" ng-model="toolkitValues.UserGUID">
                                </p>
                                <p class="queryLabel">
                                    <label>Email</label>
                                    <input class="right" type="text" id="emailAddress" ng-model="toolkitValues.userEmail">
                                </p>
                                <p class="queryLabel">
                                    <label>Status</label>
                                    <input class="right" type="text" id="statusCode" ng-model="toolkitValues.UserStatus">
                                </p>
                                 <p class="queryLabel">
                                    <label>Auth ID</label>
                                    <input class="right" type="text" id="TAUTHID" ng-model="toolkitValues.UserAuthID">
                                </p>
                                 <p class="queryLabel">
                                    <label>HB Domain</label>
                                    <input class="right" type="text" id="backend_dir" ng-model="toolkitValues.UserDecompressedPin">
                                </p>
                                 <p class="queryLabel">
                                    <label>FI Port</label>
                                    <input class="right" type="text"  id="fiport"  oninput="settings()" ng-model="toolkitValues.UserPassword">
                                </p>
                                <p class="queryLabel">
                                    <label>TASK#</label>
                               <input class="right" type="text" id="CASE1" ="TINC" id="inc"  placeholder="TASK12345" oninput="settings()" ng-model="IncidentNumber">
                                </p>
                                <p class="queryLabel">
                                    <label>RDB Port</label>
                                    <input class="right" type="text" id="rdbport" ng-model="toolkitValues.LivePassword">
                                </p>
                                <p class="queryLabel">
                                    <label>PIN (Informix)</label>
                                    <input class="right" type="text" id="TPIN" ng-model="toolkitValues.UserPin">
                                </p>
                                <p class="queryLabel">
                                    <label>Spons Cons</label>
                                    <input class="right" type="text" id="TSPONSCONS" ng-model="toolkitValues.SponsCons">
                                </p>
                                <p class="queryLabel">
                                    <label>Billpay ID</label>
                                    <input class="right" type="text" id="TBPID" ng-model="toolkitValues.BillPayID">
                                </p>
                                <p class="queryLabel">
                                    <label>Sponsor ID</label>
                                    <input class="right" type="text" id="TSPONSOR" ng-model="toolkitValues.SponsorID">
                                </p>
                            </div>
                        </div>
                    </div>
                    	<div class="queryParentTOP" id="queryParentTOP">
                    		
                </div>

                <div style="clear:both;"></div>
                <br>
                <br>


            </div>
          </div>

       <!-- <!-- Modules
        <script src="js/app.js"></script>
        <script src="js/services/LoginService.js"></script>





    </script>
   
    <?php
}


function createBottom() {
/* ----------
function:		function createBottom()
---------- */
?>
		</div>
        <!-- END: page_content -->
		<div id="footer">
        	<div id="footer_bottom">
            	<img src="img/bottomlogo.png" alt="NCR Monogram" width="25" />
                <div id="disclaimer_text">© <?php echo date('Y')?> NCR | Digital Insight</div>
              <!--  <img src="common/pg/images/logo_chrome.png" class="browser_logo" width="25" />
                <div id="disclaimer_text"> Preferred Browser: Google Chrome. </div> -->
                <div id="ebusiness_text">Created by TS Prod, Please <a href="mailto:el.hailegiorgis@ncr.com">contact us</a> with any issues or inquiries</div>
                <div class="spacer"></div>
            </div>
        </div>
	</div>
    <!-- END: PAGE -->


</body>
    <!-- page generated dynamically with page generator --> 
</html>

<?php
}
?>
