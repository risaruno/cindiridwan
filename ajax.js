jQuery.validator.setDefaults({
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});
$("#wish-form").submit(function(e) {
    e.preventDefault();
}).validate({
    submitHandler: function(){
        var afterForm = "<h3 class='after-form'></h3>";
        var spinner = "<div class='spinner-border text-dark' role='status'><span class='visually-hidden'>Loading...</span></div>";
        var name = $("input#name").val();
        var msg = $("textarea#msg").val();
        console.log(name, msg);
        $.ajax({
            url: 'send.php',
            method: 'POST',
            data: {'name':name, 'msg':msg},
            beforeSend: function(){
                $('.wish-card form').html(afterForm);
                $('h3.after-form').html(spinner);
                $('form').css({'display':'flex','justify-content':'center'});
            },
            success: function(r){
                $('h3.after-form').addClass('form-success');
                setTimeout(function(){$('h3.after-form').html(r)},2000);
            },
            error: function(e){
                $('h3.after-form').addClass('form-fail');
                setTimeout(function(){$('h3.after-form').html(e)},2000);
            }
        });
    }
});