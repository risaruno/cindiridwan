$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    // FADE
    var fade = [
        ["#couple-title","fade","0","70%"],
        [".and","fade","0","100%"],
        [".bride","slide-right","100","140%"],
        [".groom","slide-left","100","140%"],
        [".words","fade","100","140%"],
        [".saveDate","fade","50","70%"],
        [".akad-card","slide-right","-50","120%"],
        [".resepsi-card","slide-left","-50","120%"],
        [".count-down","slide-up","0","90%"],
        [".dress-code","fade","0","90%"],
        [".location","fade","50","150%"],
        [".health-card","slide-left","50","150%"],
        [".gallery-title","fade","50",""],
        [".pray","fade","50","130%"],
        [".thank-you","slide-up","200",""],
    ];
    $.each(fade, function(){
        $(''+this[0]+'').addClass(this[1]+"-out");
        new ScrollMagic.Scene({
            triggerElement: this[0],
            triggerHook: 0.8,
            offset: this[2],
            duration: this[3]
        })
        .setClassToggle(this[0], this[1]+"-in")
        // .addIndicators()
        .addTo(controller);
    });

    // NAVBAR SECTION
    var i = 1;
    $('.section').each(function(){
        var duration = $(this).outerHeight();
        var toggle = '#navbar>a:nth-child('+i+')';
        new ScrollMagic.Scene({
            triggerElement: this,
            duration: duration
        })
        .setClassToggle(toggle,'active')
        // .addIndicators()
        .addTo(controller);
        i++;
    })

});