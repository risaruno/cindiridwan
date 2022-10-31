<?php
include 'connection/connection.php';
require 'vendor/autoload.php';

$options = array(
  'cluster' => 'ap1',
  'useTLS' => true
);
$pusher = new Pusher\Pusher(
  '9ec54ae14f315d40586e',
  '3d179217570b2e0d2235',
  '1163858',
  $options
);

date_default_timezone_set("Asia/Bangkok");
$name = $_POST['name'];
$msg = $_POST['msg'];
$time = date("Y-m-d  H:i:s");
$data['name'] = $name;
$data['message'] = $msg;
$data['time'] = $time;

if(isset($_POST['name']) && isset($_POST['msg'])){
    $refresh = "<br><button type='button' class='btn btn-outline-dark btn-ref' onclick='location.reload();'><small><i class='fas fa-sync-alt'></i> Refresh</small></button>";
    $query = "INSERT INTO `message`(`name`,`msg`,`room`) VALUES ('$name','$msg','1')";
    $result = mysqli_query($con,$query) or trigger_error(mysqli_error($con));
    if ($result){
        echo "Pesan terkirim!<i class='fas fa-check-circle'></i>".$refresh;
        $pusher->trigger('kahfiart', 'herlinhelmi', $data);
    } else {
        echo "Pesan tidak terkirim!<i class='fas fa-times-circle'></i>".$refresh;
    }
} else {
    echo "Error";
}

mysqli_close($con);