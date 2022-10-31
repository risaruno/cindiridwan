<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "kahfiart";

$con = mysqli_connect($host, $user, $pass, $db);
if (!$con) {
    die("Connection failed!");
}