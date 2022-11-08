<?php
include 'connection/connection.php';
require 'vendor/autoload.php';

$options = array(
  'cluster' => 'ap1',
  'useTLS' => true
);
$pusher = new Pusher\Pusher(
  '6955608fa11f5638ae70',
  '09c9d31605fb4a4bc8b8',
  '1164127',
  $options
);

date_default_timezone_set("Asia/Bangkok");
$name = $_POST['name'];
$msg = $_POST['msg'];
$room = "cindiridwan";
$time = date("Y-m-d  H:i:s");
$data['name'] = $name;
$data['message'] = $msg;
$data['datetime'] = $time;
$refresh = "<br><button type='button' class='btn btn-outline-dark btn-ref' onclick='location.reload();'><small><i class='fas fa-sync-alt'></i> Refresh</small></button>";

if(isset($_POST['name']) && isset($_POST['msg'])){
  $query = "INSERT INTO `messagea`(`name`,`msg`,`roomName`) VALUES ('$name','$msg','$room')";
  $result = mysqli_query($con,$query) or trigger_error(mysqli_error($con));
  if ($result){
    echo "Pesan terkirim!<i class='fas fa-check-circle'></i>".$refresh;
    $pusher->trigger('kahfiart', $room, $data);
  } else {
    echo "Pesan tidak terkirim!<i class='fas fa-times-circle'></i>".$refresh;
  }
} else {
  echo "Variables is not available <i class='fas fa-times-circle'></i>".$refresh;
}

mysqli_close($con);