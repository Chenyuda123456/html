// js动态控制屏幕的基准值
(function(win) {
  var doc = win.document;
  var docEl = doc.documentElement;
  var tid;

  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    if (width > 540) { // 最大宽度
      width = 540;
    }
    var rem = width / 10; // 将屏幕宽度分成10份， 1份为1rem
    docEl.style.fontSize = rem + 'px';
  }

  win.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  refreshRem();

})(window);

// 获取url参数
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

  var r = window.location.search.substr(1).match(reg);

  if (r != null) {return decodeURI(r[2])}else{ return null}

}
