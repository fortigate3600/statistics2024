const GoButton = document.getElementById("GoButton");
const textmediacolpiti = document.getElementById("mediacolpiti");
const textvarianza = document.getElementById("varianza");
const textmediacolpitit = document.getElementById("mediacolpitit");
const textvarianzat = document.getElementById("varianzat");
var valori = [];
var sumbreaches = 0;
var numcampioni = 0;

var stepup;
var stepdown;
var mode;

var col = 0;
var p;
var m;
var n;
var t;

var path;
var heightpath;
var spacing;
var start = 260;

let diz = {};
let diztempot = {};
var maxValue;
var z;
var oldm = 50;
var oldn = 50;
var oldt = 25;
var oldp = 20;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.globalAlpha = 0.75;
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
ctx.font = "10px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "bottom";

var runningmean = 0;
var runningvariance = 0;

function getRandomInt() {
  return Math.random();
}

function drawRandomLinesWeiner() {
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
      h += (heightpath * stepup) / Math.sqrt(i);
      //salgo
      ctx.beginPath();
      ctx.moveTo(i * path, start - h + (heightpath * stepup) / Math.sqrt(i));
      ctx.lineTo(i * path, start - h);
      ctx.stroke();
    } else {
      //scedo

      h += (heightpath * stepdown) / Math.sqrt(i);
      ctx.beginPath();
      ctx.moveTo(i * path, start - h + (heightpath * stepdown) / Math.sqrt(i));

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

function drawRandomLinesLambda() {
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
    if (prob < p / i) {
      h += heightpath * stepup;
      //salgo
      ctx.beginPath();
      ctx.moveTo(i * path, start - h + heightpath * stepup);
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

// Disegnare un numero definito di linee casuali
function drawRandomLines() {
  if (col == 5) col = 0;
  switch (col) {
    case 0:
      ctx.strokeStyle = "brown";
      break;
    case 1:
      ctx.strokeStyle = "hot pink";
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
    default:
      ctx.strokeStyle = "brown";
      break;
  }
  col++;

  let h = 0;
  //inizio
  ctx.beginPath();
  ctx.moveTo(0, start - h);
  ctx.lineTo(path, start - h);
  ctx.stroke();
  for (let i = 1; i <= m; i++) {
    //ogni server: i-esimo server
    const prob = getRandomInt();
    if (prob < p) {
      //salgo
      h += heightpath * stepup;
      ctx.beginPath();
      ctx.moveTo(i * path, start - h + heightpath * stepup);
      ctx.lineTo(i * path, start - h);
      ctx.stroke();
    } else {
      //scendo
      h += heightpath * stepdown;
      ctx.beginPath();
      ctx.moveTo(i * path, start - h + heightpath * stepdown);
      ctx.lineTo(i * path, start - h);
      ctx.stroke();
    }
    //vado avanti a prescindere
    ctx.beginPath();
    ctx.moveTo(i * path, start - h);
    ctx.lineTo((i + 1) * path, start - h);
    ctx.stroke();

    if (i == t) {
      if (!(h in diztempot)) {
        diztempot[h] = 1;
      } else {
        diztempot[h]++;
      }
    }
  }
  return h / heightpath;
}

function istogramma(pos) {
  var massimi = [];
  var massimitempt = [];
  maxValue = Math.max(...Object.values(diz));
  maxValuet = Math.max(...Object.values(diztempot));
  z = 200 / maxValue;
  if (pos == 0) {
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

      ctx.strokeStyle = "black";
      if (diz[h] == maxValue) {
        massimi.push(parseInt(h));
        ctx.strokeStyle = "blue";
      }
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(canvas.width, start - h);
      ctx.lineTo(canvas.width - (z * diz[h]) / m, start - h);
      ctx.stroke();
      ctx.globalAlpha = 0.75;
      ctx.lineWidth = 2;
      ctx.strokeStyle = "black";
    }
  } else {
    for (h in diztempot) {
      ctx.globalAlpha = 1;
      ctx.lineWidth = 5;
      ctx.strokeStyle = "black";
      if (diztempot[h] == maxValuet) {
        massimitempt.push(parseInt(h));
        ctx.strokeStyle = "blue";
      }
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(pos + path / 2, start - h);
      ctx.lineTo(7 * diztempot[h] + pos + path / 2, start - h);
      ctx.stroke();
      ctx.globalAlpha = 0.75;
      ctx.lineWidth = 2;

      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(pos + path / 2, start - h);
      ctx.lineTo(-(10 * diztempot[h]) / t + pos + path / 2, start - h);
      ctx.stroke();
      ctx.globalAlpha = 0.75;
      ctx.lineWidth = 2;
    }
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Cancella tutto il canvas
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height); // Cancella tutto il secondo canvas
  textmediacolpiti.innerText = "";
  textvarianza.innerText = "";
  textmediacolpitit.innerText = "";
  textvarianzat.innerText = "";
  diz = {};
  diztempot = {};
  massimi = [];
  massimitempt = [];
  runningmean = 0;
  runningvariance = 0;
}

GoButton.addEventListener("click", function () {
  if (document.getElementsByName("modalita")[0].checked)
    mode = document.getElementsByName("modalita")[0].value;
  if (document.getElementsByName("modalita")[1].checked)
    mode = document.getElementsByName("modalita")[1].value;
  if (document.getElementsByName("modalita")[2].checked)
    mode = document.getElementsByName("modalita")[2].value;
  stepup = parseFloat(document.getElementById("stepup").value);
  stepdown = parseFloat(document.getElementById("stepdown").value);
  p = parseFloat(document.getElementById("prob").value);
  m = parseInt(document.getElementById("systmes").value);
  n = parseInt(document.getElementById("atks").value);

  clearCanvas();
  if (mode == "simple") {
    start = 260;
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    t = parseInt(document.getElementById("tempo").value);

    massimi = [];
    massimitempt = [];

    path = canvas.width / (m + 1);
    heightpath =
      (canvas.height - 80) /
      (2 * m * Math.max(Math.abs(stepup), Math.abs(stepdown)));
    spacing = canvas.width / m;

    // la riga del tempo in mezzo
    ctx.lineWidth = 2;
    ctx.globalAlpha = 1;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(t * path + path / 2, 0);
    ctx.lineTo(t * path + path / 2, 525);
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.75;

    //numeri sotto
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
    let M2 = 0;

    //funzione disegna
    for (let i = 0; i < n; i++) {
      let nbreach = drawRandomLines();
      let h = nbreach * heightpath;
      if (!(h in diz)) {
        diz[h] = 1;
      } else {
        diz[h]++;
      }
      // Calcolo statistiche running t finale
      var oldmean = runningmean;
      runningmean = runningmean + (nbreach - runningmean) / (i + 1);
      // Aggiorna M2, che tiene traccia della somma delle differenze quadrate
      M2 = M2 + (nbreach - oldmean) * (nbreach - runningmean);
    }
    //calcolo statististiche tempo t
    var runmeant = 0;
    let cont = 0;
    var media = 0;
    var m2t = 0;
    for (h in diztempot) {
      media += diztempot[h] * (h / heightpath);
      for (let j = 0; j < diztempot[h]; j++) {
        cont++;
        let oldmeant = runmeant;
        runmeant = runmeant + (h / heightpath - runmeant) / cont;
        m2t = m2t + (h / heightpath - oldmeant) * (h / heightpath - runmeant);
      }
    }
    media /= n;

    var varianza = 0;
    for (h in diztempot) {
      for (var z = 0; z < diztempot[h]; z++) {
        varianza += (h / heightpath - media) ** 2;
      }
    }
    varianza /= n;

    textmediacolpitit.innerText = "Mean al tempo t: " + runmeant.toFixed(2);
    // La varianza è M2 diviso per il numero di campioni
    textvarianzat.innerText = "Variance al tempo t: " + (m2t / n).toFixed(2);

    //istogrammi
    istogramma(0);
    istogramma(t * path);

    var media = 0;
    for (h in diz) {
      media += (h * diz[h]) / heightpath;
    }
    media /= n;
    var varianza = 0;
    for (h in diz) {
      for (var i = 0; i < diz[h]; i++)
        varianza += (h / heightpath - media) ** 2;
    }
    varianza /= n;

    //stampa statistiche
    textmediacolpiti.innerText = "Mean: " + runningmean.toFixed(2);
    textvarianza.innerText = "Variance: " + (M2 / n).toFixed(2);
  }
  if (mode == "lambda") {
    start = 500;
    ctx2.clearRect(0, 0, canvas.width, canvas.height); // Cancella tutto il canvas

    path = canvas.width / (m + 1);
    heightpath = (canvas.height - 80) / (m * stepup);
    if (oldm != m || oldn != n || oldp != p) {
      oldm = m;
      oldn = n;
      oldp = p;
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
      let nbreach = drawRandomLinesLambda();
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
  }
  if (mode == "wiener") {
    start = 260;

    path = canvas.width / (m + 1);
    heightpath =
      ((canvas.height - 80) /
        (m * Math.max(Math.abs(stepup), Math.abs(stepdown)))) *
      2;
    if (oldm != m || oldn != n || oldp != p) {
      oldm = m;
      oldn = n;
      oldp = p;
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
      let nbreach = drawRandomLinesWeiner();
      valori.push(parseInt(nbreach));
      sumbreaches += nbreach;
    }
    var massimi = [];
    maxValue = Math.max(...Object.values(diz));
    z = 200 / maxValue;
    for (h in diz) {
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
  }
});

const clearButton = document.getElementById("clearCanvas");
// Aggiungi l'event listener al pulsante
clearButton.addEventListener("click", clearCanvas);

function home() {
  window.location.href = "index.html";
}
function right() {
  window.location.href = "hmw6.html";
}
function left() {
  window.location.href = "hmw4.html";
}
