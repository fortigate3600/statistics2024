const GoButton = document.getElementById("GoButton");

var p;
var m;
var n;
var path;
var heightpath;
const start = 500;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Funzione per generare un numero casuale tra min e max
function getRandomInt() {
  return Math.random();
}

// Disegnare un numero definito di linee casuali
function drawRandomLines() {
  let h = 0;
  //inizio
  ctx.beginPath();
  ctx.moveTo(0, start - h);
  ctx.lineTo(path, start - h);
  ctx.stroke();

  for (let i = 1; i <= m; i++) {
    const prob = getRandomInt();
    if (prob < p) {
      h += heightpath;
      //salgo
      ctx.beginPath();
      ctx.moveTo(i * path, start - h + heightpath);
      ctx.lineTo(i * path, start - h);
      ctx.stroke();
    }
    //vado avanti a prescindere
    ctx.beginPath();
    ctx.moveTo(i * path, start - h);
    ctx.lineTo((i + 1) * path, start - h);
    ctx.stroke();
  }
  return h / heightpath;
}

var sumbreaches = 0;
var numcampioni = 0;
const textmediacolpiti = document.getElementById("mediacolpiti");
GoButton.addEventListener("click", function () {
  p = parseFloat(document.getElementById("prob").value);
  m = parseInt(document.getElementById("systmes").value);
  n = parseInt(document.getElementById("atks").value);
  path = canvas.width / (m + 1);
  heightpath = canvas.height / m;
  numcampioni += 1;
  for (let i = 0; i < n; i++) {
    let nbreach = drawRandomLines();
    sumbreaches += nbreach;
  }
  var mediacolpiti = sumbreaches / (n * numcampioni);
  textmediacolpiti.innerText =
    "Media sistemi compromessi: " + mediacolpiti.toFixed(2);
});

const clearButton = document.getElementById("clearCanvas");
clearButton.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Cancella tutto il canvas
  sumbreaches = 0;
  numcampioni = 0;
  textmediacolpiti.innerText = "";
});
