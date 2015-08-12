<html>
<head>
<style>
*, *:before, *:after {
  box-sizing: border-box;
}

html {
  overflow-y: scroll;
}

body {
  
  font-family: 'Titillium Web', sans-serif;
  background-size:100% 100%;
  background-opacity:0.6;
  background: url('16308-NQLOOE.jpg');
 
}


.form {
  background:tranparent;
  padding: 40px;
  max-width:1050px;
  margin: 0px auto;
  
  opacity: 0.7;
 
}



.tab-group {
	margin: 0px 0px 0px 280px;
  padding: 10px;
  color:  #ffffff;
  font-size: 30px;
  align:center;
  width: 400px;;
  text-align: center;
  outline: 2px solid #ffffff;
  
}




::-webkit-input-placeholder {
color: 	#C0C0C0;
font-family:Comic Sans MS;}


input, textarea {
  font-size: 22px;
  display: block;
  width: 88%;
  height: 100%;
  padding: 5px 10px;
  background: none;
  opacity:0.8;
  border: 2px solid rgb(46, 46, 120);
  font-family: Comic Sans MS;
  text-color: #000000;
  border-radius: 0;
  -webkit-transition: border-color .25s ease, box-shadow .25s ease;
          transition: border-color .25s ease, box-shadow .25s ease;
		  background:#ffffff;
}
input:focus, textarea:focus {
  outline: 0;
  border-color:#FF4500;
}

textarea {
  border: 2px solid rgb(46, 46, 120);
  resize: vertical;
  background:#ffffff;}

.field-wrap {
  height:46px;
  margin-bottom: 0px;
  position: relative;

}



.button {
  border: 0;
  margin-top:25px;
  outline: none;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 600;
  text-color:rgb(46, 46, 120);
  letter-spacing: .1em;
  background: transparent;
  text-decoration: none;
  -webkit-transition: all 0.5s ease;
          transition: all 0.5s ease;
  -webkit-appearance: none;
	border:2px solid #D2691E ;
	display:block;
	padding: 10px;

}
.button:hover, .button:focus {
  background: transparent;
  cursor: pointer;
  border:1px solid 	#8B0000;
}

.button-block{
  display: block;
  width:100%;
}


#bottom{
	\\background:rgb(46, 46, 120);
	background: transparent;
	padding:40px ;
	padding-top: 10px;
	width: 450px;
	margin: -40px ;	
	margin-top: 90px;
}
.outer{
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0.45)), color-stop(100%,rgba(0,0,0,0.03)));
	width: 450px;
	height:550px;
	margin-left:260px;
	margin-bottom:0px;
	padding-top:40px;}
select{
		margin-top: 75px;
		margin-left: 28px;
		color: 	#808080;
		font-size:18px;
		font-family:Comic Sans MS;
		padding:8px;
		border:solid 2px rgb(46, 46, 120);

}
select:hover{
		border-color:#FF4500;
}
.error{
		color: #ffffff;
		font-size:15px;
		margin-left:-240px;
}

</style>


</head>

<body>
<?php

$host="localhost";
$user="root";
$password="";
$db = @mysql_connect($host, $user, $password) or die("Could not connect! Error:".mysql_error());
@mysql_select_db('techweek') or die("Database Error:".mysql_error());


$nameErr = $emailErr = $commentErr="";
$name = $email = $comment="";




if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["name"])) {
     $nameErr = "*Name is required";
   } else {
     $name = test_input($_POST["name"]);
     // check if name only contains letters and whitespace
     if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
       $nameErr = " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp *Only letters and white space allowed"; 
     }
   }
   
   if (empty($_POST["email"])) {
     $emailErr = "*Email is required";
   } else {
     $email = test_input($_POST["email"]);
     // check if e-mail address is well-formed
     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $emailErr = "*Invalid email format"; 
     }
   }
   if (empty($_POST["comment"])) {
     $commentErr = "&nbsp &nbsp *Comments are required";
   } else {
     $comment = test_input($_POST["comment"]);
  }
 }
 function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
$query="INSERT INTO teck (`name`, `email`,`comment` ) VALUES (`$name`,`$email`,`$comment`)";
@mysql_query($query);

?>

<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>

<div class="form">

	<div class="tab-group">
    <b>Feedback Form</b>
    </div>

  <br>
  
  
    
  

       <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 

			<div class="outer">
          <center><div class="field-wrap">
			<input type="text" required autocomplete="off" name="name" placeholder="Name" value="<?php echo $name;?>"autofocus/> <span class="error"> <?php echo $nameErr;?></span>	
          </div></center>

          
			
        <center><div class="field-wrap">

          <input style="margin-top:20px;" type="email" name="email" required autocomplete="off" placeholder="Email" value="<?php echo $email;?>"/><span class="error"> <?php echo $emailErr;?></span>
		  </div></center>
		<center><div class="field-wrap">

          <textarea name="comment" placeholder= "Your Comments.." cols="10"  style="margin-top: 20px; wrap: virtual; height: 100px;" value="<?php echo $comment;?>"></textarea><span class="error"> <?php echo $commentErr;?></span>
        </div></center>
		<div class="field-wrap">
		<select>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<option value="4">Option 4</option>
		</select>
		</div>
		
		<center><div id= "bottom">
		<p style="text-align:center; color:#ffffff; font-size: 20px; font-family:Kaushan script; letter-spacing:0.5px; color:rgb(46, 46, 120);">Thanks for filling in the form!</p>
		<button type="submit" class="button button-block">Submit</button>



		</div>
		</center>
		</div>
		</form>
		</div>
		
</body>
</html>