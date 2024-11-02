const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

// Classe generale per un'equazione differenziale stocastica
class SDE {
  constructor(dt) {
    this.dt = dt;
  }

  drift(x) {
    throw new Error("Drift function must be implemented by subclasses");
  }

  diffusion(x) {
    throw new Error("Diffusion function must be implemented by subclasses");
  }
}

// Simulatore di Euler–Maruyama
class EulerMaruyamaSimulator {
  constructor(sde, x0, steps) {
    this.sde = sde;
    this.x = x0;
    this.steps = steps;
    this.trajectory = [x0];
  }

  run() {
    for (let i = 0; i < this.steps; i++) {
      const x = this.x;
      const dt = this.sde.dt;
      const dW = Math.sqrt(dt) * this.randomGaussian();

      this.x += this.sde.drift(x) * dt + this.sde.diffusion(x) * dW;
      this.trajectory.push(this.x);
    }
    return this.trajectory;
  }

  randomGaussian() {
    let u = 0,
      v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }
}

// Implementazione di un tipo di SDE specifico: moto browniano geometrico
class GeometricBrownianMotion extends SDE {
  constructor(dt, mu, sigma) {
    super(dt);
    this.mu = mu;
    this.sigma = sigma;
  }

  drift(x) {
    return this.mu * x;
  }

  diffusion(x) {
    return this.sigma * x;
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function home() {
  window.location.href = "index.html";
}

function runSimulation() {
  // Ottieni parametri dall'interfaccia
  const steps = parseInt(document.getElementById("steps").value);
  const mu = parseFloat(document.getElementById("mu").value);
  const sigma = parseFloat(document.getElementById("sigma").value);
  const dt = 0.01;
  const x0 = 1.0;

  // Crea l'istanza del modello e del simulatore
  const gbm = new GeometricBrownianMotion(dt, mu, sigma);
  const simulator = new EulerMaruyamaSimulator(gbm, x0, steps);

  // Esegui la simulazione
  const trajectory = simulator.run();
  drawChart(trajectory);
}

function drawChart(data) {
  // Pulisci il canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Impostazioni di scala
  const maxX = data.length;
  const maxY = Math.max(...data);
  const minY = Math.min(...data);

  // Funzione per mappare i dati alle coordinate del canvas
  const mapX = (index) => (index / maxX) * canvas.width;
  const mapY = (value) =>
    canvas.height - ((value - minY) / (maxY - minY)) * canvas.height;

  // Disegna la traiettoria
  ctx.beginPath();
  ctx.moveTo(mapX(0), mapY(data[0]));
  for (let i = 1; i < data.length; i++) {
    ctx.lineTo(mapX(i), mapY(data[i]));
  }
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.stroke();
}
