$(document).ready(function() {

$(".circle li").each(function(i) {


        $(this).delay(400 * i)


            .css({
                opacity: 0,
                "z-index": 1
            })
            .animate({
                opacity: 1
            }, 500);

    });
    


    var count = 1;

    function transition() {

        if (count == 1) {


            $(".circle li").each(function() {
                $(".circle li").eq(3).removeClass('hover');
                $(".circle li").eq(0).addClass('hover');
                $(".center").text("Embracing personal responsibility to act in anticipation of perceived problems and opportunities while fully owning actions, behaviors, and outcomes.")


            });
            count = 2;

        } else if (count == 2) {
            $(".circle li").each(function() {
                $(".circle li").eq(0).removeClass('hover');
                $(".circle li").eq(1).addClass('hover');
                $(".center").text("Simple behavioral, technical, and organizational aids for rapidly growing Reliability, Efficiency, Productivity, and Safety.")
            });
            count = 3;

        } else if (count == 3) {
            $(".circle li").each(function() {
                $(".circle li").eq(1).removeClass('hover');
                $(".circle li").eq(2).addClass('hover');
                $(".center").text("Building relationships while aligning attitudes and actions with organizational Core Principles.")
            });
            count = 4;
        } else if (count == 4) {
            $(".circle li").each(function() {
                $(".circle li").eq(2).removeClass('hover');
                $(".circle li").eq(3).addClass('hover');
                $(".center").text("Sharing, understanding, and acting upon insights gained from organizational activities, conditions, and outcomes.")
            });
            count = 1;
        }

        $(".circle li").mouseover(function() {

            count = 0;

            if ($(".circle li").eq(0)) {
                $(".circle li").eq(1).removeClass('hover');
                $(".circle li").eq(2).removeClass('hover');
                $(".circle li").eq(3).removeClass('hover');
            } else if ($(".circle li").eq(1)) {
                $(".circle li").eq(0).removeClass('hover');
                $(".circle li").eq(2).removeClass('hover');
                $(".circle li").eq(3).removeClass('hover');
            } else if ($(".circle li").eq(2)) {
                $(".circle li").eq(0).removeClass('hover');
                $(".circle li").eq(1).removeClass('hover');
                $(".circle li").eq(3).removeClass('hover');
            } else if ($(".circle li").eq(3)) {
                $(".circle li").eq(0).removeClass('hover');
                $(".circle li").eq(1).removeClass('hover');
                $(".circle li").eq(2).removeClass('hover');
            }

        });



        $(".circle li").mouseleave(function() {

            count = 1;
        });


    }
    setInterval(transition, 3000);




    $(".circle li:nth-child(1)").hover(function() {


        $(".center").text("Embracing personal responsibility to act in anticipation of perceived problems and opportunities while fully owning actions, behaviors, and outcomes.")

    });

    $(".circle li:nth-child(2)").hover(function() {

        $(".center").text("Simple behavioral, technical, and organizational aids for rapidly growing Reliability, Efficiency, Productivity, and Safety.")

    });

    $(".circle li:nth-child(3)").hover(function() {

        $(".center").text("Building relationships while aligning attitudes and actions with organizational Core Principles.")

    });

    $(".circle li:nth-child(4)").hover(function() {

        $(".center").text("Sharing, understanding, and acting upon insights gained from organizational activities, conditions, and outcomes.")

    });




});