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
                
                $("#image").attr("src","https://www.ppiweb.net/wp-content/uploads/2017/05/Section-3-TOOLs.png");

            });
            count = 2;

        } else if (count == 2) {
            $(".circle li").each(function() {
                $(".circle li").eq(0).removeClass('hover');
                $(".circle li").eq(1).addClass('hover');
                $("#image").attr("src","https://www.ppiweb.net/wp-content/uploads/2017/05/Section-3-PBE.png");
         
            });
            count = 3;

        } else if (count == 3) {
            $(".circle li").each(function() {
                $(".circle li").eq(1).removeClass('hover');
                $(".circle li").eq(2).addClass('hover');
                $("#image").attr("src","https://www.ppiweb.net/wp-content/uploads/2017/05/Section-3-Learning.png");      
            });
            count = 4;
        } else if (count == 4) {
            $(".circle li").each(function() {
                $(".circle li").eq(2).removeClass('hover');
                $(".circle li").eq(3).addClass('hover');
                $("#image").attr("src","https://www.ppiweb.net/wp-content/uploads/2017/05/Section-3-PA.png");

                
            });
            count = 1;
        }

        $(".circle li","#icon").mouseover(function() {

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

        
        $("#image").attr("src","https://www.ppiweb.net/wp-content/uploads/2017/05/Section-3-TOOLs.png");

    });

    $(".circle li:nth-child(2)").hover(function() {

       
         $("#image").attr("src","https://www.ppiweb.net/wp-content/uploads/2017/05/Section-3-PBE.png");

    });

    $(".circle li:nth-child(3)").hover(function() {

       

        $("#image").attr("src","https://www.ppiweb.net/wp-content/uploads/2017/05/Section-3-Learning.png");
    
        
    });

    $(".circle li:nth-child(4)").hover(function() {

       

        $("#image").attr("src","https://www.ppiweb.net/wp-content/uploads/2017/05/Section-3-PA.png");

    });




});