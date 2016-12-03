$(document).ready(function() {
  var losses = 0;
  var wins = 0;
  
    
  function startGame() {
    var total = 0;
    var goal  = Math.floor(Math.random()*120);
    var emerald = Math.floor((Math.random()*12)+1);
    var aquamarine = Math.floor((Math.random()*12)+1);
    var amethyst = Math.floor((Math.random()*12)+1);
    var opal = Math.floor((Math.random()*12)+1); 
      console.log(emerald);
      console.log(aquamarine);
      console.log(amethyst);
      console.log(opal);
    $('#goal').text(goal);
    $("#currentScore").text(total);
    $("#emerald").append(emeraldImage);
  }
  startGame();  


             
          // if (total > goal) {
          //   $('#losses').text(losses+=1);
            
          //     startGame();
             
                
          // } else if ( total === goal) {
          //   $('#wins').text(wins+=1);            
            
          //   startGame();
          // } 



    $("#button").on("click", function(){
         
         total = 0;

    });
});