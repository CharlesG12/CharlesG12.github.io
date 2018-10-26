$(document).ready(function(){
    // for filter table
    $("#mySearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTableContent tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    // effects
    $('#hide').click(function() {
        $('#hiding').hide();
    });
    $('#show').click(function() {
        $('#hiding').show();
    });
    $('#s_toggle').click(function() {
        $('#hiding').toggle();
    });



    $('#f_toggle').dblclick(function() {
        $('#fading').toggle();
    })
    $('#fadeIn').dblclick(function(){
        $('#fading').fadeIn("slow");
        $('#fading').fadeTo("slow", 1);
    })
    $('#fadeOut').dblclick(function(){
        $('#fading').fadeOut(1000);
    })
    $('#fadeTo').dblclick(function(){
        $('#fading').fadeTo(1000, 0.5);
    })


    $('#alertButton').mouseenter(function(){
        $('#box').css('width', '0px');
        $("#box").animate ({
            width: "200px"}
            , 3000, function() {msg();}
            );
    })

    function msg(){
        alert("Done!");
    }

    $('#alertButton').mouseleave(function(){
        $("#box").stop();
        msg();
    })

    $('#keyPr').keypress(function(){
        $("#f_3 p").each(function(index) {
            $(this).delay(1000*index).fadeOut(1000);
        })
    })

    $('#keyDn').keydown(function(){
        $("#a3 div").each(function(index) {
            $(this).delay(1000*index).animate({width:"50px"}, 1000)
        })
    })



    // for sorting table 
    $('th').click(function(){
        var table = $(this).parents('table').eq(0)
        var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
        this.asc = !this.asc
        if (!this.asc){rows = rows.reverse()}
        for (var i = 0; i < rows.length; i++){table.append(rows[i])}
    })
    function comparer(index) {
        return function(a, b) {
            var valA = getCellValue(a, index), valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
        }
    };
    function getCellValue(row, index){ return $(row).children('td').eq(index).text() };

   



});


