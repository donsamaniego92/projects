$(document).ready(function() {

    // Container 1 

    $(".cont").click(function() {

        $("#bas1").toggle();

        $("#bas2").css('display', 'none');

        $("#bas3").css('display', 'none');


        $(".cont").find('span').toggleClass('glyphicon-minus')



        $(".cont2").find('span').attr("class", 'glyphicon glyphicon-plus')

        $(".cont3").find('span').attr("class", 'glyphicon glyphicon-plus')

    })

    // Container 2 


    $(".cont2").click(function() {

        $("#bas2").toggle();

        $("#bas1").css('display', 'none');

        $("#bas3").css('display', 'none');



        $(".cont2").find('span').toggleClass('glyphicon-minus')

        $(".cont").find('span').attr("class", 'glyphicon glyphicon-plus')

        $(".cont3").find('span').attr("class", 'glyphicon glyphicon-plus')


        // Container 3 


    })


    $(".cont3").click(function() {

        $("#bas3").toggle();

        $("#bas1").css('display', 'none');

        $("#bas2").css('display', 'none');



        $(".cont3").find('span').toggleClass('glyphicon-minus')

        $(".cont").find('span').attr("class", 'glyphicon glyphicon-plus')

        $(".cont2").find('span').attr("class", 'glyphicon glyphicon-plus')




    })


    // Mouseover Container 1

    $(".cont").mouseover(function() {

        $("#tit1").css('color', "white");

        $("#im1").css('color', 'white')



    })
    // Mouseleave Container 1

    $(".cont").mouseleave(function() {

        $("#tit1").css('color', "#828490");

        $("#im1").css('color', '#828490')


    })

    // Mouseover Container 2

    $(".cont2").mouseover(function() {

        $("#tit2").css('color', "white");

        $("#im2").css('color', 'white')



    })
    // Mouseleave Container 2

    $(".cont2").mouseleave(function() {

        $("#tit2").css('color', "#828490");

        $("#im2").css('color', '#828490')


    })

    // Mouseover Container 3

    $(".cont3").mouseover(function() {

        $("#tit3").css('color', "white");

        $("#im3").css('color', 'white')



    })
    // Mouseleave Container 3

    $(".cont3").mouseleave(function() {

        $("#tit3").css('color', "#828490");

        $("#im3").css('color', '#828490')


    })


})