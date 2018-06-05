/*global $*/

$(document).ready(function() {

  $(".btn").stop().click(function(e) {
    e.preventDefault();
    
    $(".box").stop();
    
    $(".box").css({
      width: "10%",
      height: "150px",
    });
    
    clearTimeout();
    
    $(".overlay").hide();
    $(".setsumei").hide();

    $(".box").animate({
      width: "100%",
    }, 3000);

    // 画面がボーダーで満たされたら白い背景を準備
    setTimeout(function() {
      $(".kekka-wrapper").fadeIn();
    }, 3000);

    // ボーダーで満たされてから1秒ご、ボーダーを縮める
     setTimeout(function() {
      $(".box").animate({
        width: "30%",
      }, 3000);
    }, 4000);
  });
  
  
  $(".kekka-wrapper").hide();

  $(".box").animate({
    width: "100%",
  }, 3000);

  // ボーダーで満たされてから1秒ご、ボーダーを縮める
  setTimeout(function() {
    $(".box").animate({
      width: "30%",
    }, 3000);
  }, 4000);



});