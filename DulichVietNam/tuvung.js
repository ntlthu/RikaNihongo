var vietnamese = document.getElementById("vietnamese");
var nihongo = document.getElementById("nihongo");

function suriJP() {
  var textSuri = (document.getElementById("suri").innerHTML = "スリ");
}

function suriVN() {
  var textSuri = (document.getElementById("suri").innerHTML =
    "Móc túi( pickpocketing)");
}

function group2JP() {
  var kotoba2 = (document.getElementById("kotoba2").innerHTML =
    "電話を取られる");
}
function group2VN() {
  var giatDienThoai = "";
  giatDienThoai += "<p> でんわをとられる </p>";
  giatDienThoai += "<p> Bị giật điện thoại </p>";
  var kotoba2 = (document.getElementById("kotoba2").innerHTML = giatDienThoai);
}
function kotoba3JP() {
  var kotoba3 = (document.getElementById("kotoba3").innerHTML = "盗む");
}
function kotoba3VN() {
  var tromCap = "";
  tromCap += "<p>ぬすむ : trộm cắp</p>";
  tromCap += "<p>何を盗まれましたか。: Bạn đã bị trộm mất cái gì?</p>";
  tromCap += "<p>現金を盗まれた。:Tôi bị trộm mất tiền mặt.</p>";
  var kotoba3 = (document.getElementById("kotoba3").innerHTML = tromCap);
}
