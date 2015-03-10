$(function() {
  $('.icon_subcription').mouseover(function() { 
        var imgChild = $(this)[0].getElementsByTagName("img")[0];
        var src = imgChild.src.replace("grey","white");
        imgChild.src= src;
    })
    .mouseout(function() {
        var imgChild = $(this)[0].getElementsByTagName("img")[0];
        var src = imgChild.src.replace("white", "grey");
        imgChild.src =  src;
    });
 })