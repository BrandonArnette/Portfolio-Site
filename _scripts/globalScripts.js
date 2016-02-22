var selectedNav = "#aboutWrapper";
var allowNav = true;

$("#resW").text("W:" + $( window ).width());
$("#resH").text("H:" + $( window ).height());







//$("#servicesWrapper").hide();
//$("#portfolioWrapper").hide();
//$("#contactWrapper").hide();


$("#navAbout").click(function(){

    if (selectedNav == "#aboutWrapper" || !allowNav){return;}
    allowNav = false;
    $("#navAbout").css("color", "#607625");
    $("#navServices").css("color", "#3d3d3d");
    $("#navPortfolio").css("color", "#3d3d3d");
    $("#navContact").css("color", "#3d3d3d");
    
    
    $(selectedNav).animate({ opacity: "0" }, 1200, 'easeOutQuint', function(){
        $(selectedNav).hide();
     
        
        
        $("#aboutWrapper").css("opacity", "0");
        $("#aboutWrapper").show();
               
        $("#aboutWrapper").animate({ opacity: "1" }, 1600, 'easeOutBounce', function(){
            
            selectedNav="#aboutWrapper"; 
            allowNav = true;
        });
        
        
    });
    
    
   
    
});   



//$(".box1").click(function(){
//    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
//    var items = [
    //    {
        //    src: 'http://www.appstemplates.com/images/108.png',
        //    w: 1200,
        //    h: 1367
        //},
        //{
        //    src: 'https://www.myresponsee.com/wp-content/uploads/free-responsive-design-//template.jpg',
          //  w: 1500,
        //    h: 1322
      //  }
    //];

    // define options (if needed)
//    var options = {
        // optionName: 'option value'
        // for example:
        
  //      index: 0 // start at first slide
  //  };

    // Initializes and opens PhotoSwipe
//    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    
   // gallery.init();
    
///});

$("#navServices").click(function(){

    


    
    
    
    
    
    
   
    
    
    
   
});
    
$("#navPortfolio").click(function(){

    if (selectedNav == "#portfolioWrapper" || !allowNav){return;}
    allowNav = false;
    $("#navAbout").css("color", "#3d3d3d");
    $("#navServices").css("color", "#3d3d3d");
    $("#navPortfolio").css("color", "#607625");
    $("#navContact").css("color", "#3d3d3d");
    
    
    $(selectedNav).animate({ opacity: "0" }, 1200, 'easeOutQuint', function(){
        $(selectedNav).hide();
     
        $("#portfolioWrapper").css("opacity", 0);
        $("#portfolioWrapper").show();
               
        $("#portfolioWrapper").animate({ opacity: "1" }, 1600, 'easeOutBounce', function(){
            
            selectedNav="#portfolioWrapper"; 
            allowNav = true;
            
        
        });
        
    });
    
});   

$("#navContact").click(function(){

    if (selectedNav == "#contactWrapper" || !allowNav){return;}
    allowNav = false;
    $("#navAbout").css("color", "#3d3d3d");
    $("#navServices").css("color", "#3d3d3d");
    $("#navPortfolio").css("color", "#3d3d3d");
    $("#navContact").css("color", "#607625");
    
    
    $(selectedNav).animate({ opacity: "0" }, 1200, 'easeOutQuint', function(){
        $(selectedNav).hide();
     
        $("#contactWrapper").css("opacity", 0);
        $("#contactWrapper").show();
               
        $("#contactWrapper").animate({ opacity: "1" }, 1600, 'easeOutBounce', function(){
            
            selectedNav="#contactWrapper"; 
            allowNav = true;
            
        
        });
        
    });
    
}); 
  
    
    









