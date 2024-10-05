const GoButton = document.getElementById("GoButton");

var p;
var m;
var n;
var path;
var heightpath;
const start = 500;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.moveTo(1000, 0);
  ctx.lineTo(1000, 800);
  ctx.stroke();
}

// Funzione per generare un numero casuale tra min e max
function getRandomInt() {
  return Math.random();
}

let diz = {};

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

var sumbreaches = 0;
var numcampioni = 0;
const textmediacolpiti = document.getElementById("mediacolpiti");
GoButton.addEventListener("click", function () {
  p = parseFloat(document.getElementById("prob").value);
  m = parseInt(document.getElementById("systmes").value);
  n = parseInt(document.getElementById("atks").value);
  path = (canvas.width - 200) / (m + 1);
  heightpath = canvas.height / m;
  diz = {};
  numcampioni += 1;
  for (let i = 0; i < n; i++) {
    let nbreach = drawRandomLines();
    sumbreaches += nbreach;
  }

  const maxValue = Math.max(...Object.values(diz));
  console.log(maxValue);
  z = 200 / maxValue;

  for (h in diz) {
    ctx.beginPath();
    ctx.moveTo(m * path, start - h);
    ctx.lineTo(m * path + z * diz[h], start - h);
    ctx.stroke();
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
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.moveTo(1000, 0);
    ctx.lineTo(1000, 800);
    ctx.stroke();
  }
});
