/* global $ */
$(document).ready(function(){

    $("#button1").click(function() {
        alert("hi");
        $("h2").css("color","red");
    });
    
   
   
    $("#button2").click(function() {
    $("#four").append("i live in NYC")
    });
    
    
    $("#button3").click(function(){
        alert("Are you sure you want to click this button?");
    });
    
}); 
    