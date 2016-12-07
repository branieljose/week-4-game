$(document).ready(function() {
  var goal;
  var losses = 0;
  var wins = 0;
  var total = 0;
  var valueAssign = [ 
     emerald = 0,
     aquamarine = 0,
     amethyst = 0,
     opal = 0 
      ];  
  var images = [
      $("<img>").addClass("emeraldImage").attr("src", "assets/images/Emerald.png").attr("data-emeraldValue", emerald) ,
      $("<img>").addClass("aquamarineImage").attr("src", "assets/images/Aquamarine.png").attr("data-aquamaineValue", aquamarine) ,
      $("<img>").addClass("amethystImage").attr("src", "assets/images/Amethyst.png").attr("data-amethystValue", amethyst) ,
      $("<img>").addClass("opalImage").attr("src", "assets/images/Opal.png").attr("data-opalValue", opal)
      ];
      $('#crystalImages').append(images);
    
  function startGame() {
    goal  = Math.floor(Math.random()*120);
    $('#goal').text(goal);
    total = 0;
    valueAssign = [ 
     emerald = Math.floor((Math.random()*12)+1),
     aquamarine = Math.floor((Math.random()*12)+1),
     amethyst = Math.floor((Math.random()*12)+1),
     opal = Math.floor((Math.random()*12)+1) 
      ];     
  };
    
  
 $('.emeraldImage' ).on('click', function() {
      total = total + emerald;    
      $('#currentScore').text(total);
      cases(); 
  });
 $('.aquamarineImage' ).on('click', function() {
      total = total + aquamarine;      
      $('#currentScore').text(total);
      cases(); 
  });
 $('.amethystImage' ).on('click', function() {
      total = total + amethyst;      
      $('#currentScore').text(total);
      cases(); 
  });
 $('.opalImage' ).on('click', function() {
      total = total + opal;      
      $('#currentScore').text(total);
      cases(); 
  });

 function cases(){
 if (total > goal){
  losses++;
  total = 0;
  $('#currentScore').text(total);
  $('#lost').text('You Lost! :(');
  $('#losses').text(losses);
  startGame();
 } else if (total === goal){
    wins++;
    total = 0;
    $('#currentScore').text(total);
    $('#lost').text('You Won! :)');
    $('#wins').text(wins);
    startGame();
 }
};

$('#button').append('<button>Reset</button>')
$('button').on('click', function(){ 
  total = 0;
  $('#currentScore').text(total);
  startGame();$('#lost').text('');
});

startGame();



  

   




});