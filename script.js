$(function() {

  // アコーディオン
  
  //分割したい個数を入力
  var $division = 2;
  //要素の数を数える
  var $divlength = $('#news-list li').length;

  //分割数 刻みで後ろにmorelinkを追加する
  $('#news-list li').eq($division-1)
  .after('<div class="show-all-btn"><p>Show All</p></div>');
  //最初のli（分割数）と、morelinkを残して他を非表示
  $('#news-list li,.show-all-btn').hide();
  for(var j=0;j<$division;j++){
    $('#news-list li').eq(j).show();
  }
  $('.show-all-btn').show();

  //morelinkにクリック時の動作
  $('.show-all-btn').click(function(){

    //(クリックされたindex +2) * 分割数 = 表示数
    for(var k=0;k<$divlength;k++){
      $('#news-list li').eq(k).fadeIn();
    }

    //一旦全てのmorelink削除
    $('.show-all-btn').hide();

  });

});
