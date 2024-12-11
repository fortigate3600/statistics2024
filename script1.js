const GoButton = document.getElementById("GoButton");

var col = 0;
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

// Richiama la funzione con il valore di 'n' desiderato
// Cambia il numero 10 con quello che desideri

// Funzione per generare un numero casuale tra min e max
function getRandomInt() {
  return Math.random();
}

// Disegnare un numero definito di linee casuali
function drawRandomLines() {
  if (col == 5) col = 0;
  switch (col) {
    case 0:
      ctx.strokeStyle = "brown";
      break;
    case 1:
      ctx.strokeStyle = "red";
      break;
    case 2:
      ctx.strokeStyle = "blue";
      break;
    case 3:
      ctx.strokeStyle = "darkgreen";
      break;
    case 4:
      ctx.strokeStyle = "purple";
      break;
  }
  col++;

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
  textvarianza.innerText = "";
  textmassimi.innerText = "";
  diz = {};
}
var valori = [];
var sumbreaches = 0;
var numcampioni = 0;
const textmediacolpiti = document.getElementById("mediacolpiti");
const textvarianza = document.getElementById("varianza");
const textmassimi = document.getElementById("massimi");
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

  var spacing = canvas.width / m;

  ctx.font = "10px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";

  if (m < 76) {
    for (let i = 0; i <= m; i++) {
      ctx.fillText(i, i * spacing - spacing / 2, canvas.height - 10);
    }
  } else if (m < 300) {
    for (let i = 0; i <= m; i += 5) {
      ctx.fillText(i, i * spacing - spacing / 2, canvas.height - 10);
    }
  } else if (m < 700) {
    for (let i = 0; i <= m; i += 10) {
      ctx.fillText(i, i * spacing - spacing / 2, canvas.height - 10);
    }
  } else {
    for (let i = 0; i <= m; i += 50) {
      ctx.fillText(i, i * spacing - spacing / 2, canvas.height - 10);
    }
  }

  numcampioni += 1;
  for (let i = 0; i < n; i++) {
    let nbreach = drawRandomLines();
    valori.push(parseInt(nbreach));
    sumbreaches += nbreach;
  }
  var massimi = [];
  maxValue = Math.max(...Object.values(diz));
  z = 200 / maxValue;
  for (h in diz) {
    if (diz[h] == maxValue) {
      massimi.push(parseInt(h));
      ctx2.strokeStyle = "blue";
    }

    ctx2.lineWidth = 2;
    ctx2.beginPath();
    ctx2.moveTo(0, start - h);
    ctx2.lineTo(z * diz[h], start - h);
    ctx2.stroke();

    ctx2.strokeStyle = "black";
  }

  var mediacolpiti = sumbreaches / (n * numcampioni);
  var varianza = 0;
  for (let i = 0; i < valori.length; i++) {
    varianza += (valori[i] - mediacolpiti) ** 2;
  }
  varianza /= valori.length;

  textmediacolpiti.innerText =
    "Media sistemi compromessi: " + mediacolpiti.toFixed(2);
  textvarianza.innerText = "varianza: " + varianza.toFixed(2);
  textmassimi.innerText = "moda (in blu): " + massimi.join(", ");
});

const clearButton = document.getElementById("clearCanvas");
// Aggiungi l'event listener al pulsante
clearButton.addEventListener("click", clearCanvas);

function home() {
  window.location.href = "index.html";
}

function right() {
  window.location.href = "hmw2.html";
}
