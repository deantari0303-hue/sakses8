function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5a2hlgEWycz":
        Script1();
        break;
      case "6ZtgANnn4g2":
        Script2();
        break;
      case "6i37NhW7XLp":
        Script3();
        break;
      case "6Hc8p2ar3Gz":
        Script4();
        break;
      case "5xTEYCvk1t0":
        Script5();
        break;
      case "6N6kIEZOMrx":
        Script6();
        break;
  }
}

function Script1()
{
  window.kirimData = function(data){
  console.log("Data yang dikirim:", data);
  fetch("https://script.google.com/macros/s/AKfycbxq9vDQGLI_WGaNp1mNFAGwNkT5ue_67kQfNV_ujPo1PrnN3FatNIguvRFfRhDoIZ0u/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data)
  });
}
console.log("kirimData ready");
}

function Script2()
{
  console.log("Tombol dipencet");

var player = GetPlayer();
var data = {
  siswald: player.GetVar("TextEntry18"),
  button: "4",
  Nama_Lengkap: player.GetVar("TextEntry18"),
  IdentifikasiMasalah1: player.GetVar("TextEntry20"),
  IdentifikasiMasalah2: player.GetVar("TextEntry21"),
  IdentifikasiMasalah3: player.GetVar("TextEntry22"),
  RumusanMasalah1: player.GetVar("TextEntry23"),
  RumusanMasalah2: player.GetVar("TextEntry24"),
  mengembangkan1: player.GetVar("TextEntry25"),
  mengembangkan2: player.GetVar("TextEntry56"),
  Evaluasi: player.GetVar("TextEntry26"),
  Kelebihan: player.GetVar("TextEntry27"),
  Kekurangan: player.GetVar("TextEntry28")
};

console.log("Data yang dikirim:", data);
window.kirimData(data);
}

function Script3()
{
  var player = GetPlayer();
var data = {
  siswaId: player.GetVar("TextEntry18"), // tetap pakai nama button 1 biar nyatu
  button: "4",
  Nama_Lengkap: player.GetVar("TextEntry19"),
  IdentifikasiMasalah1: player.GetVar("TextEntry29"),
  IdentifikasiMasalah2: player.GetVar("TextEntry30"),
  IdentifikasiMasalah3: player.GetVar("TextEntry31"),
  RumusanMasalah1: player.GetVar("TextEntry32"),
  RumusanMasalah2: player.GetVar("TextEntry33"),
  mengembangkan1: player.GetVar("TextEntry34"),
  mengembangkan2: player.GetVar("TextEntry57"),
  Evaluasi: player.GetVar("TextEntry35"),
  Kelebihan: player.GetVar("TextEntry36"),
  Kekurangan: player.GetVar("TextEntry37")
};
kirimData(data);
}

function Script4()
{
  var player = GetPlayer();
var data = {
  siswaId: player.GetVar("TextEntry18"),
  button: "4",
  Nama_Lengkap: player.GetVar("TextEntry61"),
  IdentifikasiMasalah1: player.GetVar("TextEntry38"),
  IdentifikasiMasalah2: player.GetVar("TextEntry39"),
  IdentifikasiMasalah3: player.GetVar("TextEntry40"),
  RumusanMasalah1: player.GetVar("TextEntry41"),
  RumusanMasalah2: player.GetVar("TextEntry42"),
  mengembangkan1: player.GetVar("TextEntry43"),
  mengembangkan2: player.GetVar("TextEntry58"),
  Evaluasi: player.GetVar("TextEntry44"),
  Kelebihan: player.GetVar("TextEntry45"),
  Kekurangan: player.GetVar("TextEntry46")
};
kirimData(data);
}

function Script5()
{
  function kirimData(data){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://script.google.com/macros/s/AKfycbxq9vDQGLI_WGaNp1mNFAGwNkT5ue_67kQfNV_ujPo1PrnN3FatNIguvRFfRhDoIZ0u/exec", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
}
}

function Script6()
{
  var player = GetPlayer();
var data = {
  siswaId: player.GetVar("TextEntry18"),
  button: "4",
  Nama_Lengkap: player.GetVar("TextEntry62"),
  IdentifikasiMasalah1: player.GetVar("TextEntry47"),
  IdentifikasiMasalah2: player.GetVar("TextEntry48"),
  IdentifikasiMasalah3: player.GetVar("TextEntry49"),
  RumusanMasalah1: player.GetVar("TextEntry50"),
  RumusanMasalah2: player.GetVar("TextEntry51"),
  mengembangkan1: player.GetVar("TextEntry52"),
  mengembangkan2: player.GetVar("TextEntry59"),
  Evaluasi: player.GetVar("TextEntry53"),
  Kelebihan: player.GetVar("TextEntry54"),
  Kekurangan: player.GetVar("TextEntry55")
};
kirimData(data);
}

