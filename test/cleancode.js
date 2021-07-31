let array = ['a', 'b', 'c', 'd', 'e']
let sql = ' group_name IN ("' + array + '")'
let str = ''
array.map(x => str = str + "'" + x + "',");
console.log(str)
console.log(sql) // output group_name IN (a,b,c,d,e)


var LV11 = {
  "10": "請選擇",
  "11" : "第一項",
  "12" : "第二項",
  "13" : "第三項"
};
var LV12 = {
  "20": "SELECT",
  "21" : "1st",
  "22" : "2nd",
  "23" : "3rd",
  "24" : "4th"
}

$(function() {
  $("#LV1").hide(); //開始執行時先將第二層的選單藏起來
  var strOpt;
  $("#LV0").change(
    function() {
      switch ($("#LV0").val()) {
        case "01":
          showSel(LV11);
          break;
        case "02":
          showSel(LV12);
          break;
        default:
          $("#LV1").hide();
  };});
  function showSel(_option) {
    $("#LV1").removeOption(/./);         //先移除原有的選項
    $("#LV1").addOption(_option, false); //帶入新的選項
    $("#LV1").show();                    //開啟第二層選單
  };
})