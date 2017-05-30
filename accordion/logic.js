$(document).ready(function(){
    
    $(".cont").click(function(){
        
         
        
        $("#bas1").toggle();
        
       $(this).find("span").toggleClass("glyphicon-minus");
       
       
       
        $("#bas2").css('display', 'none');
        
        $("#bas3").css('display', 'none');
        
      
                    
      
        
    })
    
    $(".cont2").click(function(){
        
        $("#bas2").toggle();
        
       $(this).find("span").toggleClass("glyphicon-minus");
        
    $("#bas1").css('display', 'none');
    
     $("#bas3").css('display', 'none');
        
    })
    
    
    $(".cont3").click(function(){
        
        $("#bas3").toggle();
        
       $(this).find("span").toggleClass("glyphicon-minus");
        
    $("#bas1").css('display', 'none');
    
    $("#bas2").css('display', 'none');
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    $(".cont").mouseover(function(){
        
        $("#tit1").css('color',"white");
        
        $("#im1").css('color','white')
  
        
        
    })
    
    $(".cont").mouseleave(function(){
        
        $("#tit1").css('color',"#828490");
        
        $("#im1").css('color','#828490')
       
        
    })
    
    $(".cont2").mouseover(function(){
        
        $("#tit2").css('color',"white");
        
        $("#im2").css('color','white')
        
        
        
    })
    
    $(".cont2").mouseleave(function(){
        
        $("#tit2").css('color',"#828490");
        
        $("#im2").css('color','#828490')
       
        
    })
    
    $(".cont3").mouseover(function(){
        
        $("#tit3").css('color',"white");
        
        $("#im3").css('color','white')
        
        
        
    })
    
    $(".cont3").mouseleave(function(){
        
        $("#tit3").css('color',"#828490");
        
        $("#im3").css('color','#828490')
       
        
    })
    
    
})