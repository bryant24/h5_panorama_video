$(function(){
    var player = videojs('my_video_1');
    player.width("1080px");
    player.height("540px");
    player.panorama({
        clickAndDrag: true,
        autoMobileOrientation: true,
        initFov: 100,
        Notice: "左右移动或使用手指拖拽进行全景浏览",
        ready: function () {
            player.play();
        }
    });
  var $refreshButton = $('#refresh');
  var $results = $('#css_result');
  
  function refresh(){
    var css = $('style.cp-pen-styles').text();
    $results.html(css);
  }

  refresh();
  $refreshButton.click(refresh);
  
  // Select all the contents when clicked
  $results.click(function(){
    $(this).select();
  });
});
