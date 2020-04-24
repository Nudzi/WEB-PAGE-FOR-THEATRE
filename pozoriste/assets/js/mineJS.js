//romeo i julija
document.getElementById("romeoijulija").onclick = function () {
  window.onclick = function (event) {
    if (event.target == document.getElementById("myModalromeoijulija")) {
      document.getElementById("myModalromeoijulija").style.display = "none";
    }
  };
  document.getElementById("myModalromeoijulija").style.display = "block";
  document.getElementById("cl4").onclick = function () {
    document.getElementById("myModalromeoijulija").style.display = "none";
  };
};
//eu resurs myModalromeoijulija
document.getElementById("saraEUResurs").onclick = function () {
  window.onclick = function (event) {
    if (event.target == document.getElementById("myModalsaraEUResurs")) {
      document.getElementById("myModalsaraEUResurs").style.display = "none";
    }
  };
  document.getElementById("myModalsaraEUResurs").style.display = "block";
  document.getElementById("cl3").onclick = function () {
    document.getElementById("myModalsaraEUResurs").style.display = "none";
  };
};
// mimar
document.getElementById("mimar-1").onclick = function () {
  window.onclick = function (event) {
    if (event.target == document.getElementById("myModalMimar-1")) {
      document.getElementById("myModalMimar-1").style.display = "none";
    }
  };
  document.getElementById("myModalMimar-1").style.display = "block";
  document.getElementById("cl2").onclick = function () {
    document.getElementById("myModalMimar-1").style.display = "none";
  };
};
document.getElementById("preminuoElezi").onclick = function () {
  window.onclick = function (event) {
    if (event.target == document.getElementById("myModalpreminuoElezi")) {
      document.getElementById("myModalpreminuoElezi").style.display = "none";
    }
  };
  document.getElementById("myModalpreminuoElezi").style.display = "block";
  document.getElementById("cl1").onclick = function () {
    document.getElementById("myModalpreminuoElezi").style.display = "none";
  };
};
document.getElementById("kurdsihLullabye").onclick = function () {
  window.onclick = function (event) {
    if (event.target == document.getElementById("myModalkurdishLullabye")) {
      document.getElementById("myModalkurdishLullabye").style.display = "none";
    }
  };
  document.getElementById("myModalkurdishLullabye").style.display = "block";
  document.getElementById("cl0").onclick = function () {
    document.getElementById("myModalkurdishLullabye").style.display = "none";
  };
};
