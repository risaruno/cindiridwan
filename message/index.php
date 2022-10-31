<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://js.pusher.com/7.0/pusher.min.js"></script>
    <link rel="shortcut icon" type="image/x-icon" href="../src/img/kahfiart-icon.png"/>
    <title>Messages for Herlin & Helmi | KahfiArt</title>
</head>
<body>
    <div class="content">
        <div class="container">
            <div class="title">Messages for Herlin and Helmi</div>
            <div class="messages" id="messages">
                <script>
                    $(document).ready(function(){
                        var pusher = new Pusher('9ec54ae14f315d40586e', {cluster: 'ap1'});
                        var channel = pusher.subscribe('kahfiart');
                        channel.bind('herlinhelmi', function(data) {
                            var newItem = "<div class='card m-card sh-hover new'><div class='card-body'><h5 class='card-title'>"+ data.name +" :</h5><p class='card-text'>"+ data.message +"</p><h6 class='card-subtitle mb-2 text-muted'>"+ data.time +"</h6></div></div>";
                            $("#messages").prepend(newItem);
                        });

                        $.ajax({
                            url:"load.php",
                            dataType: "JSON",
                            success: function(datas){
                                var data = datas.data;
                                var html="";
                                $.each(data, function(i, data){
                                    html += "<div class='card m-card sh-hover'><div class='card-body'><h5 class='card-title'>"+ data.name +" :</h5><p class='card-text'>"+ data.message +"</p><h6 class='card-subtitle mb-2 text-muted'>"+ data.time +"</h6></div></div>";
                                });
                                $("#messages").html(html);
                            }
                        });
                    });
                </script>
            </div>
        </div>
    </div>
</body>
</html>