const GoButton = document.getElementById("GoButton");

var p;
var m;
var n;
var path;
var heightpath;
const start = 500;
let diz = {};
var maxValue;
var z;
var oldm = 50;
var oldn = 50;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

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
  let i = 1;
  for (; i <= m; i++) {
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

  if (!(h in diz)) {
    diz[h] = 1;
  } else {
    diz[h]++;
  }

  return h / heightpath;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Cancella tutto il canvas
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height); // Cancella tutto il secondo canvas
  sumbreaches = 0;
  numcampioni = 0;
  textmediacolpiti.innerText = "";
  diz = {};
}

var sumbreaches = 0;
var numcampioni = 0;
const textmediacolpiti = document.getElementById("mediacolpiti");
GoButton.addEventListener("click", function () {
  ctx2.clearRect(0, 0, canvas.width, canvas.height); // Cancella tutto il canvas
  p = parseFloat(document.getElementById("prob").value);
  m = parseInt(document.getElementById("systmes").value);
  n = parseInt(document.getElementById("atks").value);
  path = canvas.width / (m + 1);
  heightpath = (canvas.height - 80) / m;
  if (oldm != m || oldn != n) {
    oldm = m;
    oldn = n;
    clearCanvas();
  }
  numcampioni += 1;
  for (let i = 0; i < n; i++) {
    let nbreach = drawRandomLines();
    sumbreaches += nbreach;
  }
  maxValue = Math.max(...Object.values(diz));
  z = 200 / maxValue;

  for (h in diz) {
    ctx2.beginPath();
    ctx2.moveTo(0, start - h);
    ctx2.lineTo(z * diz[h], start - h);
    ctx2.stroke();
  }

  var mediacolpiti = sumbreaches / (n * numcampioni);
  textmediacolpiti.innerText =
    "Media sistemi compromessi: " + mediacolpiti.toFixed(2);
});

const clearButton = document.getElementById("clearCanvas");
// Aggiungi l'event listener al pulsante
clearButton.addEventListener("click", clearCanvas);
