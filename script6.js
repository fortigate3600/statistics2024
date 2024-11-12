const textmedia = document.getElementById("media");
const textvar = document.getElementById("varianza");
const textmediat = document.getElementById("mediateorica");
const textvart = document.getElementById("varianzateorica");

// Funzione per generare i campi
function generateFields() {
  const container = document.getElementById("fieldsContainer");
  container.innerHTML = ""; // Pulisce eventuali campi già generati
  const numFields = parseInt(document.getElementById("numFields").value);

  var values = [];

  for (let i = 0; i < numFields; i++) {
    values[i] = parseFloat(Math.random());
  }

  // normallizzazione probabilita
  const sum = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  for (let p in values) {
    values[p] = values[p] / sum; // Normalizza le probabilita per sommare 1
  }
  for (let i = 0; i < numFields; i++) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = `Campo ${i + 1}`;
    inputField.id = `field_${i}`;
    inputField.value = values[i].toFixed(2);
    container.appendChild(inputField);
  }
}

function welford(arr) {
  let mean = 0;
  let variance = 0;
  let n = 0;

  for (let x of arr) {
    n += 1;
    let delta = x - mean;
    mean += delta / n;
    let delta2 = x - mean;
    variance += delta * delta2;
  }

  // Calcola la varianza corretta dividendo per (n - 1) se n > 1, altrimenti restituisci 0
  variance = n > 1 ? variance / (n - 1) : 0;

  return { mean, variance };
}

function simulations(probs) {
  m = document.getElementById("systems").value;
  //for every element in probs
  var values = [];
  for (let p of probs) {
    //simulo un hacker
    var value = 0;
    for (var i = 0; i < m; i++) {
      if (p > Math.random()) value++;
    }
    values.push(value);
  }
  drawLines(values, 0);
  //calcolo e stampa valori empirici
  var result = welford(values);

  textmedia.innerText = "media empirica: " + result.mean.toFixed(2);
  textvar.innerText = "varianza empirica: " + result.variance.toFixed(2);

  //calcolo valori standard e drawlins secondo canvas
  var values = [];
  for (let p of probs) {
    //simulo un hacker
    var value = 0;
    value = p * m;
    values.push(value);
  }
  drawLines(values, 1);

  //calcolo e stampa valori statistici
  result = welford(values);

  textmediat.innerText = "media statisica: " + result.mean.toFixed(2);
  textvart.innerText = "varianza   statisica: " + result.variance.toFixed(2);
}

// Funzione per raccogliere i valori dai campi
function submitValues() {
  const numFields = parseInt(document.getElementById("numFields").value);
  const probs = [];

  for (let i = 0; i < numFields; i++) {
    const fieldValue = parseFloat(document.getElementById(`field_${i}`).value);
    probs.push(fieldValue);
  }

  // Chiama la funzione per disegnare le linee su un singolo canvas
  simulations(probs);
}

// Funzione per disegnare linee verticali su un unico canvas
function drawLines(values, flagcanvas) {
  var canvas;
  if (flagcanvas == 0) canvas = document.getElementById("lineCanvas");
  else canvas = document.getElementById("lineCanvas2");

  const context = canvas.getContext("2d");
  const maxHeight = canvas.height; // Altezza massima del canvas

  // Larghezza dinamica delle linee per riempire tutto il canvas
  const lineWidth = canvas.width / values.length;

  context.clearRect(0, 0, canvas.width, canvas.height); // Pulisce il canvas

  values.forEach((value, index) => {
    const x = index * lineWidth; // Posizione orizzontale per la linea

    // Calcola l'altezza della linea proporzionale al valore massimo
    const lineHeight = (value / m) * maxHeight - 10;

    // Disegna la linea verticale
    context.beginPath();
    context.moveTo(x + lineWidth / 2, maxHeight); // Inizio della linea (in basso)
    context.lineTo(x + lineWidth / 2, maxHeight - lineHeight); // Fine della linea (in alto)
    if (flagcanvas == 0) context.strokeStyle = "#007bff";
    else context.strokeStyle = "#ff0000";
    context.lineWidth = lineWidth * 0.8; // Spessore leggermente più piccolo della larghezza
    context.stroke();
    context.font = "15px Arial";
    if (value.toFixed(1) % 1 == 0)
      context.fillText(value.toFixed(0), x + lineWidth / 2 - 5, 300);
    else context.fillText(value.toFixed(1), x + lineWidth / 2 - 8, 300);
  });
}
function home() {
  window.location.href = "index.html";
}
