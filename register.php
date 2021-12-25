<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'database_for_project');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

if(isset($_POST['username'])){
    $uname = $_POST['username'];
    $pass = $_POST['password'];

    $sql = "insert into users(`id`, `username`, `password`) values (NULL, '".$uname."', '".$pass."')";

    $result = mysqli_query($link, $sql);

    if($result){
        echo "Success!";
        exit();
    }
    else{
        echo "Wrong!";
    }
}
?>