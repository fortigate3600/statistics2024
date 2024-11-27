function caesarCipher(text, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let char of text.toLowerCase()) {
    if (alphabet.includes(char)) {
      let newIndex = (alphabet.indexOf(char) + shift) % alphabet.length;
      result += alphabet[newIndex];
    } else {
      result += char; // Mantiene i caratteri non alfabetici (spazi, punteggiatura, ecc.)
    }
  }
  return result;
}

function cifra() {
  const text = document.getElementById("inputText").value.toLowerCase();
  const shift = parseInt(document.getElementById("shiftValue").value, 10);

  calculateFrequency(text, "plain");

  const cypherText = caesarCipher(text, shift);
  calculateFrequency(cypherText, "cypher");

  const testocifrato = document.getElementById("cryptedText");
  testocifrato.innerText = cypherText.slice(0, 250) + "...";

  let decryptedText = decrypt(cypherText);
  const testo = document.getElementById("decryptedText");
  testo.innerText = decryptedText.slice(0, 250) + "...";
}

function calculateFrequency(text, type) {
  const letterCounts = {};
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Inizializza il conteggio delle lettere a zero
  for (let letter of alphabet) {
    letterCounts[letter] = 0;
  }

  // Conta le occorrenze di ciascuna lettera
  for (let char of text) {
    if (alphabet.includes(char)) {
      letterCounts[char]++;
    }
  }

  // Ottieni il massimo valore di frequenza per normalizzare il grafico
  const maxFrequency = Math.max(...Object.values(letterCounts));

  let canvas;
  // Disegna il grafico
  if (type == "plain") canvas = document.getElementById("lineCanvas");
  else canvas = document.getElementById("cypherCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Pulisci il canvas

  const barWidth = canvas.width / alphabet.length; // Larghezza di ogni barra
  const canvasHeight = canvas.height;

  // Disegna ogni barra
  alphabet.split("").forEach((letter, index) => {
    const frequency = letterCounts[letter];
    const barHeight = (frequency / maxFrequency) * (canvasHeight - 20); // Normalizza l'altezza

    // Calcola posizione della barra
    const x = index * barWidth;
    const y = canvasHeight - barHeight;

    // Disegna rettangolo
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(x, y, barWidth - 5, barHeight); // -5 per lo spazio tra le barre

    // Disegna lettera sotto la barra
    ctx.fillStyle = "#000";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(letter, x + barWidth / 2, canvasHeight - 5);
  });
}

function calculateF(text) {
  const letterCounts = {};
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Inizializza il conteggio delle lettere a zero
  for (let letter of alphabet) {
    letterCounts[letter] = 0;
  }

  // Conta le occorrenze di ciascuna lettera
  for (let char of text.toLowerCase()) {
    if (alphabet.includes(char)) {
      letterCounts[char]++;
    }
  }

  return letterCounts;
}

function decrypt(cypherText) {
  const topN = 4;
  const languageFrequency = "eaionlrtscdpumvghfbqz"; // Frequenza in italiano o inglese

  // Calcola la distribuzione di frequenza delle lettere nel testo cifrato
  const letterCounts = calculateF(cypherText);

  // Ordina le lettere in base alla frequenza
  const sortedLetters = Object.keys(letterCounts).sort(
    (a, b) => letterCounts[b] - letterCounts[a]
  );

  // Prendi le prime N lettere più frequenti nel testo cifrato
  const mostFrequentInCypher = sortedLetters.slice(0, topN);

  // Prendi le prime N lettere più frequenti nella lingua
  const mostFrequentInLanguage = languageFrequency.slice(0, topN).split("");

  var arrShift = [];
  for (let i = 0; i < topN; i++) {
    for (let j = 0; j < topN; j++) {
      const shift =
        (mostFrequentInCypher[i].charCodeAt(0) -
          mostFrequentInLanguage[j].charCodeAt(0) +
          26) %
        26;
      arrShift.push(shift);
    }
  }

  // Usa lo shift calcolato per decriptare il testo
  const decryptedText = caesarCipher(cypherText, 26 - calcolaModa(arrShift)); // Decrypt usando lo shift trovato
  return decryptedText;
}

function calcolaModa(arr) {
  const frequenze = {};
  let moda = [];
  let maxFreq = 0;

  // Conta la frequenza di ogni elemento
  for (let num of arr) {
    frequenze[num] = (frequenze[num] || 0) + 1;
  }

  // Trova la frequenza massima
  for (let num in frequenze) {
    if (frequenze[num] > maxFreq) {
      maxFreq = frequenze[num];
      moda = [num]; // Resetta la moda
    } else if (frequenze[num] === maxFreq) {
      moda.push(num); // Aggiungi alla moda in caso di pareggio
    }
  }

  return moda;
}

function home() {
  window.location.href = "index.html";
}
