
function hide() {
    $('#ps1').css('display', 'none')
}

function show() {
    $('#ps1').css('display', '')
}

function toggle() {
    if ($('#ps1:visible').length == 0) {
        show()
    }
    else {
        hide()
    }
}

function _fadeIn() {
    $('#ps2').fadeIn()
    $('#ps2').fadeTo(1000, 1.0)
}

function _fadeOut() {
    $('#ps2').fadeOut()
}

function _fadeTo() {
    $('#ps2').fadeTo(1000, 0.5)
}

function _fadeToggle() {
    $('#ps2').fadeToggle()
    $('#ps2').fadeTo(1000, 1.0)
}

function msg() {
    alert("Done!");
}

function startAnima() {
    $('#box').css('width', '0px');
    $("#box").animate ({
            width: "200px"}
            , 3000, function() {msg();}
            );
}

function stopAnima() {
    $("#box").stop();
    msg();
}

function chainFading() {
    $("#f_3 p").each(function(index) {
        $(this).delay(400*index).fadeOut();
    })
}

function chainAnimate() {
    $("#a3 div").each(function(index) {
        $(this).delay(400*index).animate({width:"200px"})
    })
}