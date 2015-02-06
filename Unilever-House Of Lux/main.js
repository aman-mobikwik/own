$(document).ready(function(){
	  var count=0;
	  $(".hide").click(function(){
	       if(count==0){
	       		$(this).addClass("show");
	       		$(this).html("Show");
	       		$(".welcome").slideUp(600);
	       		$(".not-logged-in").slideUp(600);
	       		count=1;
	   		}
	   		else{
	   			$(this).removeClass("show");
	   			$(this).html("Hide");
	   			$(".welcome").slideDown(600);
	   			$(".not-logged-in").slideDown(600);
	   			count=0;
	   		}
       });
       
   


});