//inputされた生文字列を返す
function returnInputPath() {
  return document.getElementById("input_path").value;
}

//どちら方向でパスを変更するか監視
function checkDerection() {
  var val1 = document.direction.choice[0];
  var val2 = document.direction.choice[1];

  if (val1.checked === true) {
    return val1.value;
  }else if (val2.checked === true) {
    return val2.value;
  }
}

//方向によって文字列を加工
function convertPath(direction) {
  var convertedPath = returnInputPath();

  convertedPath = convertedPath.replace( "file://" , "" ).replace( /\s/g , "" ).replace( /\\\(/ , "\(" ).replace( /\\\)/g , "\)" );
  if (direction === 'win_to_mac') {
    convertedPath = convertedPath.replace( /File01/i , "Volumes" ).replace( /\\\\/g , "/" ).replace( /\\/g , "/" );
  } else if (direction === 'mac_to_win') {
    convertedPath = convertedPath.replace( /Volumes/i , "File01" ).replace( /\\\\/g , "/" ).replace( /\//g , "\\" ).replace( "\\File01" , "\\\\File01" );
  }

  return convertedPath;
}

//outputフォームに加工後の文字列を書き込む
function outputPath(){
  var target = document.getElementById("output_path");
  target.textContent = convertPath( checkDerection() );
}

//convertPath()を自動コピー
window.onload = function copyPath() {
  var clip = new ZeroClipboard(document.getElementById("btn"));

  clip.on("beforecopy", function() {
    outputPath();
  });
};
