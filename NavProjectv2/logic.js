$(document).ready(function() {

    $(".circle li").each(function(i) {


        $(this).delay(300 * i)


            .css({
                opacity: 0,
                "z-index": 1
            })
            .animate({
                opacity: 1
            }, 400);

    });



    var count = 1;

    function transition() {

        if (count == 1) {

            $(".circle li").each(function() {
                $(".circle li").eq(4).removeClass('hover');
                $(".circle li").eq(1).addClass('hover');

                $("#image").attr("src", "https://www.ppiweb.net/wp-content/uploads/2017/06/Section-3-TOOLs.jpg");

            });
            count = 2;

        } else if (count == 2) {
            $(".circle li").each(function() {
                $(".circle li").eq(1).removeClass('hover');
                $(".circle li").eq(2).addClass('hover');
                $("#image").attr("src", "https://www.ppiweb.net/wp-content/uploads/2017/06/Section-3-PBE.jpg");

            });
            count = 3;

        } else if (count == 3) {
            $(".circle li").each(function() {
                $(".circle li").eq(2).removeClass('hover');
                $(".circle li").eq(3).addClass('hover');
                $("#image").attr("src", "https://www.ppiweb.net/wp-content/uploads/2017/06/Section-3-Learning.jpg");
            });
            count = 4;
        } else if (count == 4) {
            $(".circle li").each(function() {
                $(".circle li").eq(3).removeClass('hover');
                $(".circle li").eq(4).addClass('hover');
                $("#image").attr("src", "https://www.ppiweb.net/wp-content/uploads/2017/06/Section-3-PA.jpg");


            });

            count = 1;
        }

        $(".circle li").mouseover(function() {

            count = 0;

            if ($(".circle li").eq(1)) {
                $(".circle li").eq(2).removeClass('hover');
                $(".circle li").eq(3).removeClass('hover');
                $(".circle li").eq(4).removeClass('hover');
            } else if ($(".circle li").eq(2)) {
                $(".circle li").eq(1).removeClass('hover');
                $(".circle li").eq(3).removeClass('hover');
                $(".circle li").eq(4).removeClass('hover');
            } else if ($(".circle li").eq(3)) {
                $(".circle li").eq(1).removeClass('hover');
                $(".circle li").eq(2).removeClass('hover');
                $(".circle li").eq(4).removeClass('hover');
            } else if ($(".circle li").eq(4)) {
                $(".circle li").eq(1).removeClass('hover');
                $(".circle li").eq(2).removeClass('hover');
                $(".circle li").eq(3).removeClass('hover');
            }

        });



        $(".circle li").mouseleave(function() {

            count = 1;
        });


    }
    setInterval(transition, 10000);




    $(".circle li:nth-child(2)").hover(function() {


        $("#image").attr("src", "https://www.ppiweb.net/wp-content/uploads/2017/06/Section-3-TOOLs.jpg");

    });

    $(".circle li:nth-child(3)").hover(function() {


        $("#image").attr("src", "https://www.ppiweb.net/wp-content/uploads/2017/06/Section-3-PBE.jpg");

    });

    $(".circle li:nth-child(4)").hover(function() {



        $("#image").attr("src", "https://www.ppiweb.net/wp-content/uploads/2017/06/Section-3-Learning.jpg");


    });

    $(".circle li:nth-child(5)").hover(function() {



        $("#image").attr("src", "https://www.ppiweb.net/wp-content/uploads/2017/06/Section-3-PA.jpg");

    });



});