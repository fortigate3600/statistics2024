const text = document.getElementById("text");

// Funzione della distribuzione normale
function normalDistribution(x, mean = 0, stdDev = 1) {
  return (
    (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
    Math.exp(-((x - mean) ** 2) / (2 * stdDev ** 2))
  );
}

// Funzione quadratica
function quadratic(x) {
  return x ** 2;
}

// Funzione seno
function sine(x) {
  return Math.sin(x);
}

// Calcolo numerico del Lebesgue integral
function lebesgueIntegral(func, range, delta) {
  const [start, end] = range;
  const gridPoints = Math.ceil((end - start) / delta);
  let integral = 0;

  for (let i = 0; i < gridPoints; i++) {
    const x = start + i * delta;
    integral += func(x) * delta; // Somma prodotto valore funzione * larghezza intervallo
  }

  return integral;
}

// Calcolo del Riemann integral (usiamo un approccio simile per confronto)
function riemannIntegral(func, range, partitions) {
  const [start, end] = range;
  const deltaX = (end - start) / partitions;
  let integral = 0;

  for (let i = 0; i < partitions; i++) {
    const x = start + i * deltaX; // Punto medio del rettangolo
    integral += func(x) * deltaX; // Somma area rettangolo
  }

  return integral;
}

// Parametri per il calcolo
const range = [0, Math.PI]; // intervallo per quadratica e seno [0, π]
const rangeNormal = [-3, 3]; // intervallo per distribuzione normale
const delta = 0.01; // Delta per integrale di Lebesgue
const partitions = 1000; // Numero di partizioni per Riemann

// Funzioni da calcolare
const functions = {
  "Distribuzione Normale (std = 1)": (x) => normalDistribution(x),
  "Quadratica (x^2)": quadratic,
  "Sin(x)": sine,
};

let output = "";
// Calcolo e stampa dei risultati
for (const [name, func] of Object.entries(functions)) {
  const currentRange = name.includes("Normale") ? rangeNormal : range; // Usa l'intervallo appropriato
  const lebesgueResult = lebesgueIntegral(func, currentRange, delta);
  const riemannResult = riemannIntegral(func, currentRange, partitions);

  output += `\nFunzione: ${name}<br>`;
  output += `Intervallo: [${currentRange[0]}, ${
    currentRange[1] == 3
      ? currentRange[1].toFixed(0)
      : currentRange[1].toFixed(2)
  }]<br>`;
  output += `Risultato Integrale di Lebesgue: ${lebesgueResult.toFixed(
    10
  )}<br>`;
  output += `Risultato Integrale di Riemann: ${riemannResult.toFixed(
    10
  )}<br><br>`;
}
text.innerHTML = output;

function home() {
  window.location.href = "index.html";
}
