const $ = selector => document.querySelector(selector);

$(document).ready(function(){
    $("#about").click(function(){
      alert("ooga");
    });
  });